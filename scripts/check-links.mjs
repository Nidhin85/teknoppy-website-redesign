// Post-build audit of every link and button target in dist/.
//
// Three failure modes, all of which have shipped to production before:
//   1. a link to a page that was never built and has no redirect  -> dead click
//   2. an in-page #anchor with no matching id                     -> button does nothing
//   3. a vercel.json redirect covering a URL that now exists      -> the redirect
//      wins over the static file, so a real page is unreachable
//
// Run: npm run check:links   (after npm run build)
import { readFileSync, readdirSync, existsSync, statSync } from 'node:fs';
import { join, relative, dirname } from 'node:path';

const DIST = 'dist';
const walk = (dir) => readdirSync(dir).flatMap((e) => {
  const p = join(dir, e);
  return statSync(p).isDirectory() ? walk(p) : [p];
});

const files = walk(DIST);
const pages = files.filter((f) => f.endsWith('.html'));
const routes = new Set();
for (const f of files) {
  const rel = '/' + relative(DIST, f).replace(/\\/g, '/');
  routes.add(rel);
  if (f.endsWith('index.html')) routes.add((dirname(rel) + '/').replace(/\\/g, '/').replace(/^\/\//, '/'));
}

const redirects = existsSync('vercel.json')
  ? (JSON.parse(readFileSync('vercel.json', 'utf8')).redirects ?? [])
  : [];
const redirected = new Set(redirects.map((r) => r.source.replace(/\/$/, '') + '/'));

const idCache = new Map();
const idsOf = (route) => {
  if (idCache.has(route)) return idCache.get(route);
  const f = join(DIST, route.replace(/^\//, ''), 'index.html');
  const ids = existsSync(f)
    ? new Set([...readFileSync(f, 'utf8').matchAll(/id="([^"]+)"/g)].map((m) => m[1]))
    : null;
  idCache.set(route, ids);
  return ids;
};

const dead = new Map();
const badAnchor = new Map();
const add = (map, key, page) => map.set(key, (map.get(key) ?? new Set()).add(page));

for (const file of pages) {
  const page = ('/' + relative(DIST, file)).replace(/\\/g, '/');
  const here = (dirname(page) + '/').replace(/^\/\//, '/');
  const html = readFileSync(file, 'utf8');

  for (const [, href] of html.matchAll(/href="([^"]+)"/g)) {
    if (/^(https?:|\/\/|mailto:|tel:|data:|javascript:)/.test(href)) continue;
    const [base, frag] = href.split('#');
    const route = base === '' ? here : base;
    if (!route.startsWith('/')) continue;

    const path = route.split('?')[0];
    const known = [path, path.replace(/\/$/, ''), path.replace(/\/$/, '') + '/',
                   path.replace(/\/$/, '') + '/index.html'].some((c) => routes.has(c));
    if (!known) {
      if (!redirected.has(path.replace(/\/$/, '') + '/')) add(dead, path, page);
      continue;
    }
    if (frag) {
      const ids = idsOf(path);
      if (ids && !ids.has(frag)) add(badAnchor, `${path}#${frag}`, page);
    }
  }
}

const shadowed = redirects
  .filter((r) => existsSync(join(DIST, r.source.replace(/^\/|\/$/g, ''), 'index.html')))
  .map((r) => `${r.source} -> ${r.destination}`);

const report = (label, map) => {
  if (!map.size) return 0;
  console.error(`\n${label}`);
  for (const [k, v] of [...map].sort()) console.error(`  ${k}  (on ${v.size} page(s), e.g. ${[...v][0]})`);
  return map.size;
};

let failures = 0;
failures += report('Dead links — no page and no redirect:', dead);
failures += report('Anchors with no matching id — the button scrolls nowhere:', badAnchor);
if (shadowed.length) {
  console.error('\nRedirects shadowing a real page — visitors never reach it:');
  for (const s of shadowed) console.error(`  ${s}`);
  failures += shadowed.length;
}

const covered = [...new Set(redirects.map((r) => r.destination))].length;
console.log(`Checked ${pages.length} pages · ${routes.size} routes · ${redirects.length} redirects to ${covered} destinations`);
if (failures) {
  console.error(`\n${failures} problem(s) found.`);
  process.exit(1);
}
console.log('All links, anchors and redirects resolve.');
