import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  versions: false,
  access: {
    read: () => true,
  },
  admin: {
    useAsTitle: 'name',
    defaultColumns: [
      'name',
      'specifications.code',
      'category',
      'active',
      'featured'
    ],
    pagination: {
      defaultLimit: 20,
      limits: [10, 20, 50, 100],
    },
    listSearchableFields: ['name', 'specifications.code'],
  },
  indexes: [
    {
      fields: ['active', 'category'],
    },
    {
      fields: ['featured', 'active'],
    },
    {
      fields: ['createdAt'],
    },
  ],
  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
      index: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'category',
      required: true,
      index: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'longDescription',
      type: 'richText',
    },
    {
      name: 'productHighlights',
      type: 'richText',
    },
    {
      name: 'coverImage',
      type: 'upload',
      relationTo: 'media',
      required: true,
      hasMany: false,
    },
    {
      name: 'gallery',
      type: 'upload',
      relationTo: 'media',
      hasMany: true,
    },
    {
      name: "specifications",
      type: "group",
      fields: [
        {
          name: "code",
          label: "Product code",
          type: "text",
          required: true,
          unique: true,
          index: true,
        },
        {
          name: "fabric",
          type: "text",
        },
        {
          name: "height",
          type: "number",
          required: true,
        },
        {
          name: "width",
          type: "number",
          required: true,
        },
        {
          name: "weight",
          type: "number",
        },
        {
          name: "unit",
          type: "select",
          required: true,
          defaultValue: "cm",
          options: [
            {
              label: "Centimeter (cm)",
              value: "cm",
            },
            {
              label: "Meter (m)",
              value: "m",
            },
            {
              label: "Inch (in)",
              value: "inch",
            },
          ],
        },
      ],
    },
    {
      name: "featured",
      type: "checkbox",
      defaultValue: false,
      index: true,
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: true,
      index: true,
    },
  ],
}
