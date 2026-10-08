import type { CollectionConfig, Field, GlobalConfig } from 'payload'

import contentMap from '../../content-map.json'
import { rebuildAfterChange, rebuildAfterDelete, rebuildAfterGlobalChange } from '../hooks/triggerRebuild'
import generated from './generated.json'

// Content is read by the site's build with an API key (see Users), never anonymously:
// the documents carry internal dev notes alongside the published copy.
const loggedIn = ({ req }: { req: { user: unknown } }) => Boolean(req.user)
const access = { read: loggedIn, create: loggedIn, update: loggedIn, delete: loggedIn }

const fieldsOf = (kind: 'collections' | 'globals', slug: string) =>
  (generated[kind] as unknown as Record<string, Field[]>)[slug]

export const contentCollections: CollectionConfig[] = contentMap.collections.map((collection) => ({
  slug: collection.slug,
  labels: collection.labels,
  access,
  admin: {
    group: collection.group,
    useAsTitle: 'slug',
    defaultColumns: ['slug', 'updatedAt'],
    listSearchableFields: ['slug'],
  },
  hooks: { afterChange: [rebuildAfterChange], afterDelete: [rebuildAfterDelete] },
  fields: [
    {
      name: 'slug',
      type: 'text',
      required: true,
      unique: true,
      index: true,
      admin: {
        position: 'sidebar',
        description: `File name the site reads this from: ${collection.dir}/<slug>.${collection.ext}`,
      },
    },
    ...fieldsOf('collections', collection.slug),
  ],
}))

export const contentGlobals: GlobalConfig[] = contentMap.globals.map((global) => ({
  slug: global.slug,
  label: global.label,
  access: { read: loggedIn, update: loggedIn },
  admin: { group: global.group, description: `Source of ${global.file}` },
  hooks: { afterChange: [rebuildAfterGlobalChange] },
  fields: fieldsOf('globals', global.slug),
}))
