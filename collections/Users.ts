import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  versions: false,
  disableDuplicate: true,
  admin: {
    enableListViewSelectAPI: true,
    useAsTitle: 'email',
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
