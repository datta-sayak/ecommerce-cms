import type { CollectionConfig } from 'payload'

export const Users: CollectionConfig = {
  slug: 'users',
  versions: false,
  disableDuplicate: true,
  admin: {
    hideAPIURL: true,
    enableListViewSelectAPI: true,
    useAsTitle: 'email',
    components: {
      edit: {
        beforeDocumentControls: [{
          path: '@/components/admin/BackButton#BackButton',
          clientProps: {
            collections: 'users',
          },
        }],
      },
    },
  },
  auth: true,
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
