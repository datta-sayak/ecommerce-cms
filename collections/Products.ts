import type { CollectionConfig } from 'payload'

export const Products: CollectionConfig = {
  slug: 'products',
  access: {
  read: () => {
        return {
          active: {
            equals: true,
          },
        }
    },
  },

  admin: {
    useAsTitle: 'name',
    defaultColumns: ['name', 'category', 'featured'],
  },

  fields: [
    {
      name: 'name',
      type: 'text',
      required: true,
    },
    {
      name: 'category',
      type: 'relationship',
      relationTo: 'category',
      required: true,
    },
    {
      name: 'shortDescription',
      type: 'textarea',
      required: true,
    },
    {
      name: 'longDescription',
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
    },
    {
      name: "active",
      type: "checkbox",
      defaultValue: true,
    },
  ],
}