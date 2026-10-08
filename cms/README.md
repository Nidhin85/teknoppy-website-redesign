# Teknoppy CMS

Payload CMS for teknoppy.com. Editors change content here; the Astro site in the
repo root stays fully static and pulls that content into its content files before
each build.

```
editor saves in Payload ──► deploy hook ──► site build: npm run cms:pull ──► astro build
        (Neon Postgres)                      writes src/data + src/content
```

## What is editable

Every content file of the site maps to one Payload global or collection — the map is
[content-map.json](content-map.json).

| In the admin | Site files |
| --- | --- |
| Pages (102) | `src/data/pages/**/*.json` — section-based service, location, case-study and portfolio pages |
| Case Studies (36) | `src/data/case-studies/*.json` |
| Blog Posts, Portfolio Projects, Testimonials | `src/content/{blog,portfolio,testimonials}/*.md` |
| Globals | homepage, site settings, footer, client logos, video testimonials, Life at Teknoppy, case-study listing, website portfolio, and the standalone and service pillar pages |

The fields are generated from the content files by `npm run generate:schema` into
[src/schema/generated.json](src/schema/generated.json), so they match what the Astro
components read. Images are still path strings pointing at the site's `public/` folder.

Editing existing content needs no code change. A **new** page or case study also
needs its `.astro` route file in the site; new blog posts, portfolio projects and
testimonials do not.

## Run locally

Needs Node 20+ and a Postgres database.

```bash
cp .env.example .env        # fill in DATABASE_URL, PAYLOAD_SECRET and the seed values
npm install
npm run seed                # first time: imports the site's content, creates the logins
npm run dev                 # http://localhost:3000/admin
```

Then, in the repo root, set `PAYLOAD_URL=http://localhost:3000` and
`PAYLOAD_API_KEY=<SITE_BUILD_API_KEY>` in `.env`:

```bash
npm run cms:pull -- --check   # lists content files that differ from the CMS
npm run cms:pull              # writes them
```

## Scripts

| Script | Purpose |
| --- | --- |
| `npm run dev` | Admin at `/admin`, REST API at `/api` |
| `npm run seed [-- slug …]` | Load content files into the CMS. **Overwrites CMS edits** — first import only |
| `npm run generate:schema` | Regenerate field configs after a content file gains a new key or section type |
| `npm run migrate:create` | Record a schema change as a migration (commit it) |
| `npm run ci` | What Vercel runs: apply migrations, then build |

## Deploy (Vercel + Neon)

1. **Vercel project** — new project from this repo with **Root Directory `cms`**, and
   Build Command `npm run ci`.
2. **Neon** — add the Neon integration to that project (Storage → Neon). It sets
   `DATABASE_URL`.
3. **Env vars** on the CMS project: `PAYLOAD_SECRET`, `SEED_ADMIN_EMAIL`,
   `SEED_ADMIN_PASSWORD`, `SITE_BUILD_API_KEY`, and `BLOB_READ_WRITE_TOKEN` (add a
   Blob store under Storage).
4. **Import the content once** — from this folder, with the Neon `DATABASE_URL` and the
   variables above in `.env`: `npm run migrate && npm run seed`.
5. **Connect the site** — on the Astro project (`tekenoppy`) set `PAYLOAD_URL` to the
   CMS URL and `PAYLOAD_API_KEY` to `SITE_BUILD_API_KEY`. Create a deploy hook there
   (Settings → Git → Deploy Hooks) and set it as `SITE_DEPLOY_HOOK_URL` on the CMS
   project.

The site build fails if `PAYLOAD_URL` is set but the CMS cannot be reached, so the
previous deployment stays live instead of publishing stale content.

Schema changes after the first deploy: change the config, run
`npm run migrate:create`, commit the migration. `npm run ci` applies it on deploy.
