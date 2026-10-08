import type { CollectionAfterChangeHook, CollectionAfterDeleteHook, GlobalAfterChangeHook } from 'payload'

/**
 * The Astro site is static: it only picks up CMS edits when it is rebuilt. Each save
 * calls the site's Vercel deploy hook (SITE_DEPLOY_HOOK_URL), whose build runs
 * `npm run cms:pull` first. Unset locally and during seeding, so nothing fires.
 */
async function rebuild(context: Record<string, unknown>, what: string) {
  const url = process.env.SITE_DEPLOY_HOOK_URL
  if (!url || context.skipRebuild) return
  try {
    await fetch(url, { method: 'POST' })
  } catch (err) {
    console.error(`[rebuild] deploy hook failed after saving ${what}`, err)
  }
}

export const rebuildAfterChange: CollectionAfterChangeHook = async ({ doc, req, collection }) => {
  await rebuild(req.context, collection.slug)
  return doc
}

export const rebuildAfterDelete: CollectionAfterDeleteHook = async ({ doc, req, collection }) => {
  await rebuild(req.context, collection.slug)
  return doc
}

export const rebuildAfterGlobalChange: GlobalAfterChangeHook = async ({ doc, req, global }) => {
  await rebuild(req.context, global.slug)
  return doc
}
