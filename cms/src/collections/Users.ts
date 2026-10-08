import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
    group: 'Admin',
  },
  // API keys let the Astro build read content without a login session.
  auth: { useAPIKey: true },
  fields: [{ name: 'name', type: 'text' }],
}
