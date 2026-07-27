import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'category',

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'parent'],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
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
  ],
}