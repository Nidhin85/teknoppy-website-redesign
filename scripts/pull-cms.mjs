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
import { repoRoot, contentMap, collectionFiles, readContentFile, parseMarkdown } from '../cms/scripts/content-files.mjs';
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
    if (!result || !Array.isArray(result.docs)) {
      throw new Error(`GET /api/${slug} returned invalid response shape (docs is not an array)`);
    }
    docs.push(...result.docs);
    if (!result.hasNextPage) return docs;
  }
}

function safeReadContentFile(file) {
  try {
    return readContentFile(file);
  } catch {
    if (file.endsWith('.md')) {
      const source = fs.readFileSync(file, 'utf8').replace(/\r\n/g, '\n');
      return parseMarkdown(source);
    }
    return undefined;
  }
}

function isDocValid(collection, doc, content) {
  if (!doc?.slug || typeof doc.slug !== 'string' || !doc.slug.trim()) {
    console.warn(`[cms:pull] Skipping unnamed doc in collection "${collection.slug}"`);
    return false;
  }

  // Nested pages (collections marked `recursive`) are keyed by path, e.g. "portfolios/website-projects".
  const nested = collection.recursive && doc.slug.split('/').every((part) => part.trim());
  if ((doc.slug.includes('/') && !nested) || doc.slug.includes('\\') || doc.slug.includes('..')) {
    console.warn(`[cms:pull] Skipping doc with invalid characters in slug "${doc.slug}" in collection "${collection.slug}"`);
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
      const rawDate = content.date?.$date ?? content.date;
      if (!rawDate || isNaN(new Date(rawDate).getTime())) {
        console.warn(`[cms:pull] Skipping incomplete post doc "${doc.slug}" (missing or invalid "date" field)`);
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
  const current = fs.existsSync(file) ? safeReadContentFile(file) : undefined;
  if (isDeepStrictEqual(current, content)) return;
  changed.push(rel);
  if (check) return;
  fs.mkdirSync(path.dirname(file), { recursive: true });
  fs.writeFileSync(file, file.endsWith('.md') ? stringifyMarkdown(content) : JSON.stringify(content, null, 2) + '\n');
}

for (const global of contentMap.globals) {
  const doc = await get(`globals/${global.slug}?depth=0`);
  const content = objectFromPayload(doc, schema.globals[global.slug]);
  const file = path.join(repoRoot, global.file);
  if ((!content || Object.keys(content).length === 0) && fs.existsSync(file)) {
    console.warn(`[cms:pull] CMS returned empty content for global "${global.slug}" — preserving local file.`);
    continue;
  }

  // Guard: Protect homepage, Kochi page, and site footer corrections from being overwritten by stale CMS database records
  if (global.slug === 'home' && fs.existsSync(file)) {
    const local = safeReadContentFile(file);
    if (local?.faq?.items?.length > (content?.faq?.items?.length ?? 0)) {
      console.warn(`[cms:pull] Preserving approved local FAQs for "home" (${local.faq.items.length} items vs CMS ${content?.faq?.items?.length ?? 0}).`);
      content.faq = local.faq;
    }
    if (local?.hero?.trustBar) content.hero = { ...content?.hero, trustBar: local.hero.trustBar };
    if (local?.about) content.about = { ...content?.about, intro: local.about.intro, stats: local.about.stats };
    if (local?.services?.cards?.[0]) {
      content.services = content.services || { cards: [] };
      content.services.cards[0] = { ...content.services.cards[0], ...local.services.cards[0] };
    }
    if (local?.whyChooseUs?.features?.[1]) {
      content.whyChooseUs = content.whyChooseUs || { features: [] };
      content.whyChooseUs.features[1] = { ...content.whyChooseUs.features[1], ...local.whyChooseUs.features[1] };
    }
  }

  if (global.slug === 'webDesignPage' && fs.existsSync(file)) {
    const local = safeReadContentFile(file);
    if (local) {
      console.warn(`[cms:pull] Preserving approved local corrections for "webDesignPage" (Kochi page).`);
      if (local.meta) content.meta = { ...content?.meta, description: local.meta.description };
      if (local.hero) content.hero = { ...content?.hero, badge: local.hero.badge, body: local.hero.body, stats: local.hero.stats };
      if (local.introBand) content.introBand = local.introBand;
      if (local.whyTeknoppy) content.whyTeknoppy = local.whyTeknoppy;
      if (local.services) content.services = local.services;
      if (local.pricing) content.pricing = local.pricing;
      if (local.industries) content.industries = local.industries;
      if (local.projects) content.projects = local.projects;
      if (local.caseStudies) content.caseStudies = local.caseStudies;
      if (local.author) content.author = local.author;
      if (local.cta) content.cta = local.cta;
      if (local.faqs) content.faqs = local.faqs;
    }
  }

  if (global.slug === 'footer' && fs.existsSync(file)) {
    const local = safeReadContentFile(file);
    if (local) {
      if (local.columns) content.columns = local.columns;
      if (local.areasWeServe) content.areasWeServe = local.areasWeServe;
    }
  }

  sync(file, content ?? {});
}

for (const collection of contentMap.collections) {
  const docs = await getAll(collection.slug);
  const dir = path.join(repoRoot, collection.dir);
  const validDocs = [];

  for (const doc of docs) {
    const content = objectFromPayload(doc, schema.collections[collection.slug]) ?? {};
    if (!isDocValid(collection, doc, content)) {
      if (collection.ext === 'md') {
        const localFile = path.join(dir, `${doc.slug}.${collection.ext}`);
        if (fs.existsSync(localFile)) {
          const localContent = safeReadContentFile(localFile);
          if (localContent && isDocValid(collection, doc, localContent)) {
            console.warn(`[cms:pull] Preserving valid local file for "${doc.slug}" because remote CMS document is incomplete.`);
            validDocs.push(doc);
            continue;
          }
        }
      }
      continue;
    }

    validDocs.push(doc);
    sync(path.join(dir, `${doc.slug}.${collection.ext}`), content);
  }

  // Markdown collections are globbed by Astro, so a post deleted in the CMS must lose
  // its file. JSON pages are imported by name from a route file and are left alone.
  if (collection.ext === 'md') {
    const currentFiles = collectionFiles(collection);
    if (docs.length === 0 && currentFiles.length > 0) {
      console.warn(`[cms:pull] CMS returned 0 docs for "${collection.slug}" while ${currentFiles.length} local file(s) exist — skipping deletion to protect local content.`);
      continue;
    }

    const live = new Set(validDocs.map((doc) => doc.slug));
    for (const { key, file } of currentFiles) {
      if (live.has(key)) continue;
      changed.push(`${path.relative(repoRoot, file)} (deleted)`);
      if (!check) fs.unlinkSync(file);
    }
  }
}

console.log(`[cms:pull] ${changed.length} file(s) ${check ? 'differ from' : 'updated from'} ${base}`);
for (const file of changed) console.log(`  ${file}`);
if (check && changed.length) process.exit(1);
