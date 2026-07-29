import type { CollectionConfig } from 'payload'

const RO_FIELD = '@/components/admin/ReadOnlyField#ReadOnlyField'
const SECTION = '@/components/admin/SectionHeading#SectionHeading'

export const QuoteRequests: CollectionConfig = {
  slug: 'quote-requests',
  access: {
    read: ({ req }) => !!req.user,
    create: () => false,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    enableListViewSelectAPI: true,
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'status', 'createdAt'],
    pagination: {
      defaultLimit: 25,
      limits: [25, 50, 100],
    },
    description: 'Quote requests submitted via the website.',
  },
  fields: [
    {
      type: 'ui',
      name: 'contactSection',
      label: 'Contact Information',
      admin: {
        components: { Field: SECTION },
      },
    },
    {
      name: 'fullName',
      label: 'Full Name',
      type: 'text',
      required: true,
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },
    {
      name: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },
    {
      name: 'phone',
      label: 'Phone Number',
      type: 'text',
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },
    {
      name: 'company',
      label: 'Company / Organization',
      type: 'text',
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },
    {
      name: 'country',
      label: 'Country',
      type: 'text',
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },

    {
      type: 'ui',
      name: 'orderSection',
      label: 'Order Details',
      admin: {
        components: { Field: SECTION },
      },
    },
    {
      name: 'productType',
      label: 'Product Type',
      type: 'select',
      required: true,
      options: [
        { label: 'Jute Bags', value: 'jute' },
        { label: 'Cotton Tote Bags', value: 'cotton' },
        { label: 'Canvas Bags', value: 'canvas' },
        { label: 'Non-Woven Bags', value: 'non-woven' },
        { label: 'Pouches & Accessories', value: 'pouches' },
        { label: 'Custom / Mixed Order', value: 'custom' },
      ],
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },
    {
      name: 'quantity',
      label: 'Estimated Quantity',
      type: 'text',
      required: true,
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },
    {
      name: 'message',
      label: 'Additional Details',
      type: 'textarea',
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New', value: 'new' },
        { label: 'In Review', value: 'in-review' },
        { label: 'Quoted', value: 'quoted' },
        { label: 'Closed', value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
