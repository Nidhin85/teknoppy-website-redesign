// Pulls content from Payload CMS (cms/) into the content files the Astro pages read,
// so the site stays fully static. Runs before every build (see package.json).
//
//   npm run cms:pull            # overwrite content files with what is in the CMS
//   npm run cms:pull -- --check # report differences, write nothing (exit 1 if any)
//
// Needs PAYLOAD_URL and PAYLOAD_API_KEY. Without PAYLOAD_URL it does nothing and the
// build uses the committed files. If the CMS is set but unreachable the build fails,
// which leaves the previous deployment live rather than publishing stale content.
import fs from 'node:fs';
import path from 'node:path';
import { isDeepStrictEqual } from 'node:util';
import { repoRoot, contentMap, collectionFiles, readContentFile } from '../cms/scripts/content-files.mjs';
import { objectFromPayload, stringifyMarkdown } from '../cms/scripts/transform.mjs';

for (const file of ['.env', '.env.local']) {
  const full = path.join(repoRoot, file);
  if (fs.existsSync(full)) process.loadEnvFile(full);
}

const check = process.argv.includes('--check');
const base = process.env.PAYLOAD_URL?.replace(/\/$/, '');
if (!base) {
  console.log('[cms:pull] PAYLOAD_URL is not set — using the committed content files.');
  process.exit(0);
}

const schema = JSON.parse(fs.readFileSync(path.join(repoRoot, 'cms/src/schema/generated.json'), 'utf8'));

async function get(route) {
  const res = await fetch(`${base}/api/${route}`, {
    headers: { Authorization: `users API-Key ${process.env.PAYLOAD_API_KEY ?? ''}` }
  });
  if (!res.ok) throw new Error(`GET /api/${route} → ${res.status} ${res.statusText}`);
  return res.json();
}

async function getAll(slug) {
  const docs = [];
  for (let page = 1; ; page++) {
    const result = await get(`${slug}?depth=0&limit=50&page=${page}&sort=slug`);
    docs.push(...result.docs);
    if (!result.hasNextPage) return docs;
  }
}

function isDocValid(collection, doc, content) {
  if (!doc?.slug || typeof doc.slug !== 'string' || !doc.slug.trim()) {
    console.warn(`[cms:pull] Skipping unnamed doc in collection "${collection.slug}"`);
    return false;
  }

  const slug = doc.slug.trim().toLowerCase();
  if (slug === 'test' || slug === 'testing' || slug.startsWith('test-') || slug.startsWith('test_')) {
    console.warn(`[cms:pull] Skipping test doc "${doc.slug}" in collection "${collection.slug}"`);
    return false;
  }

  if (collection.ext === 'md') {
    if (collection.slug === 'portfolio') {
      const required = ['name', 'location', 'industry', 'description', 'result'];
      for (const field of required) {
        if (!content[field] || typeof content[field] !== 'string' || !content[field].trim()) {
          console.warn(`[cms:pull] Skipping incomplete portfolio doc "${doc.slug}" (missing required "${field}" field)`);
          return false;
        }
      }
    } else if (collection.slug === 'posts') {
      const required = ['title', 'excerpt', 'category'];
      for (const field of required) {
        if (!content[field] || typeof content[field] !== 'string' || !content[field].trim()) {
          console.warn(`[cms:pull] Skipping incomplete post doc "${doc.slug}" (missing required "${field}" field)`);
          return false;
        }
      }
      if (!content.date) {
        console.warn(`[cms:pull] Skipping incomplete post doc "${doc.slug}" (missing required "date" field)`);
        return false;
      }
    } else if (collection.slug === 'testimonials') {
      const required = ['name', 'role', 'quote'];
      for (const field of required) {
        if (!content[field] || typeof content[field] !== 'string' || !content[field].trim()) {
          console.warn(`[cms:pull] Skipping incomplete testimonial doc "${doc.slug}" (missing required "${field}" field)`);
          return false;
        }
      }
    }
  }

  return true;
}

const changed = [];
function sync(file, content) {
  const rel = path.relative(repoRoot, file);
  let current;
  try {
    current = fs.existsSync(file) ? readContentFile(file) : undefined;
  } catch {
    current = undefined;
  }
  if (isDeepStrictEqual(current, content)) return;
  changed.push(rel);
  if (check) return;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, file.endsWith('.md') ? stringifyMarkdown(content) : JSON.stringify(content, null, 2) + '\n');
}

for (const global of contentMap.globals) {
  const doc = await get(`globals/${global.slug}?depth=0`);
  sync(path.join(repoRoot, global.file), objectFromPayload(doc, schema.globals[global.slug]) ?? {});
}

for (const collection of contentMap.collections) {
  const docs = await getAll(collection.slug);
  const dir = path.join(repoRoot, collection.dir);
  const validDocs = [];

  for (const doc of docs) {
    const content = objectFromPayload(doc, schema.collections[collection.slug]) ?? {};
    if (!isDocValid(collection, doc, content)) continue;

    validDocs.push(doc);
    sync(path.join(dir, `${doc.slug}.${collection.ext}`), content);
  }

  // Markdown collections are globbed by Astro, so a post deleted in the CMS must lose
  // its file. JSON pages are imported by name from a route file and are left alone.
  if (collection.ext === 'md') {
    const live = new Set(validDocs.map((doc) => doc.slug));
    for (const { key, file } of collectionFiles(collection)) {
      if (live.has(key)) continue;
      changed.push(`${path.relative(repoRoot, file)} (deleted)`);
      if (!check) fs.unlinkSync(file);
    }
  }
}

console.log(`[cms:pull] ${changed.length} file(s) ${check ? 'differ from' : 'updated from'} ${base}`);
for (const file of changed) console.log(`  ${file}`);
if (check && changed.length) process.exit(1);
