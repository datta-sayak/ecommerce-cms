import type { CollectionConfig } from 'payload'

export const Categories: CollectionConfig = {
  slug: 'category',
  versions: false,
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'parent'],
    pagination: {
      defaultLimit: 20,
      limits: [10, 20, 50, 100],
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
  ],
}