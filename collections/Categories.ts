import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'category',
  versions: false,
  disableDuplicate: true,
  access: {
    read: () => true,
  },
  admin: {
    hideAPIURL: true,
    enableListViewSelectAPI: true,
    useAsTitle: 'name',
    defaultColumns: ['name'],
    pagination: {
      defaultLimit: 20,
      limits: [10, 20, 50, 100],
    },
    components: {
      edit: {
        beforeDocumentControls: [{
          path: '@/components/admin/BackButton#BackButton',
          clientProps: {
            collections: 'category',
          },
        }],
      },
    },
  },
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'description',
      type: 'textarea',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: false,
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: true,
      index: true,
    },
  ],
}