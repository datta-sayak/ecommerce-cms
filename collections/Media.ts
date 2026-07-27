import { cloudinaryConfig } from '@/utils/cloudinaryAdapter';
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  access: {
    read: () => true,
  },
  admin: {
    defaultColumns: [
      'filename',
      'createdAt',
      'mimeType',
      'url',
      'height',
      'width'
    ],
  },
  fields: [
    {
      name: 'alt',
      type: 'text',
      admin: {
        hidden: true,
      },
      hooks: {
        beforeChange: [
          ({ data }) => {
            return data?.filename;
          },
        ],
      },
    },
  ],
  upload: {
    pasteURL: false,
    bulkUpload: false,
    focalPoint: false,
    adminThumbnail: ({ doc }) => {
      if (!doc.filename) return null
      return cloudinaryConfig.url(doc.filename as string, {
        secure: true,
        width: 300,
        height: 300,
        crop: 'fill',
      })
    }
  },
}
