import { cloudinaryConfig } from '@/utils/cloudinaryAdapter';
import type { CollectionConfig } from 'payload'

export const Media: CollectionConfig = {
  slug: 'media',
  versions: false,
  disableDuplicate: true,
  access: {
    read: () => true,
  },
  admin: {
    hideAPIURL: true,
    enableListViewSelectAPI: true,
    pagination: {
      defaultLimit: 20,
      limits: [10, 20, 50, 100],
    },
    components: {
      views: {
        list: {
          Component: '@/components/media/GalleryListView#GalleryListView',
        },
      },
    },
  },
  indexes: [
    { fields: ['filename'] },
    { fields: ['mimeType'] },
    { fields: ['createdAt'] },
  ],
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
        width: 150,
        height: 150,
        crop: 'thumb',
        quality: 'auto:low',
        fetch_format: 'auto',
      })
    }
  },
}
