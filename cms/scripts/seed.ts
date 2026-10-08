// Loads the Astro site's content files into Payload (create or overwrite).
//
//   npm run seed                 # everything
//   npm run seed -- pages posts  # only these collections/globals
//
// Overwrites CMS edits with what is on disk — it is for the first import and for
// loading new content shapes, not for routine use once editors work in the CMS.
import config from '@payload-config'
import path from 'node:path'
import { getPayload, type CollectionSlug, type Field, type GlobalSlug } from 'payload'

import generated from '../src/schema/generated.json'
import { collectionFiles, contentMap, readContentFile, repoRoot } from './content-files.mjs'
import { objectToPayload } from './transform.mjs'

const only = process.argv.slice(2).filter((arg) => !arg.startsWith('-'))
const wanted = (slug: string) => only.length === 0 || only.includes(slug)
const fieldsOf = (kind: 'collections' | 'globals', slug: string) =>
  (generated[kind] as unknown as Record<string, Field[]>)[slug]
const context = { skipRebuild: true }

const payload = await getPayload({ config })

for (const global of contentMap.globals) {
  if (!wanted(global.slug)) continue
  const data = objectToPayload(readContentFile(path.join(repoRoot, global.file)), fieldsOf('globals', global.slug))
  await payload.updateGlobal({ slug: global.slug as GlobalSlug, data: data as never, context })
  payload.logger.info(`seeded global ${global.slug}`)
}

for (const collection of contentMap.collections) {
  if (!wanted(collection.slug)) continue
  const slug = collection.slug as CollectionSlug
  let created = 0
  let updated = 0
  for (const { key, file } of collectionFiles(collection)) {
    const data = { slug: key, ...objectToPayload(readContentFile(file), fieldsOf('collections', collection.slug)) }
    const existing = await payload.find({ collection: slug, where: { slug: { equals: key } }, limit: 1, depth: 0 })
    if (existing.docs[0]) {
      await payload.update({ collection: slug, id: existing.docs[0].id, data: data as never, context })
      updated++
    } else {
      await payload.create({ collection: slug, data: data as never, context })
      created++
    }
  }
  payload.logger.info(`seeded ${collection.slug}: ${created} created, ${updated} updated`)
}

// First run only: an admin login and the API key the site build reads content with.
const { SEED_ADMIN_EMAIL, SEED_ADMIN_PASSWORD, SITE_BUILD_API_KEY } = process.env
const users = await payload.count({ collection: 'users' })
if (users.totalDocs === 0) {
  if (SEED_ADMIN_EMAIL && SEED_ADMIN_PASSWORD) {
    await payload.create({ collection: 'users', data: { email: SEED_ADMIN_EMAIL, password: SEED_ADMIN_PASSWORD, name: 'Admin' } })
    payload.logger.info(`created admin user ${SEED_ADMIN_EMAIL}`)
  }
  if (SITE_BUILD_API_KEY) {
    await payload.create({
      collection: 'users',
      data: {
        email: 'site-build@teknoppy.com',
        password: crypto.randomUUID() + crypto.randomUUID(),
        name: 'Site build (API key)',
        enableAPIKey: true,
        apiKey: SITE_BUILD_API_KEY,
      },
    })
    payload.logger.info('created the site-build API user')
  }
}

process.exit(0)
