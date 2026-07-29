import type { CollectionConfig } from 'payload'

const RO_FIELD = '@/components/admin/ReadOnlyField#ReadOnlyField'
const SECTION  = '@/components/admin/SectionHeading#SectionHeading'

export const Enquiries: CollectionConfig = {
  slug: 'enquiries',
  access: {
    read:   ({ req }) => !!req.user,
    create: () => false,
    update: ({ req }) => !!req.user,
    delete: ({ req }) => !!req.user,
  },
  admin: {
    hideAPIURL: true,
    enableListViewSelectAPI: true,
    useAsTitle: 'fullName',
    defaultColumns: ['fullName', 'email', 'productName', 'createdAt'],
    description: 'Product enquiries submitted via the product pages.',
    components: {
      edit: {
        beforeDocumentControls: [{
          path: '@/components/admin/BackButton#BackButton',
          clientProps: {
            collections: 'enquiries',
          },
        }],
      },
    },
  },
  fields: [
    {
      type: 'ui',
      name: 'contactSection',
      label: 'Contact Information',
      admin: { components: { Field: SECTION } },
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
      name: 'productSection',
      label: 'Product Details',
      admin: { components: { Field: SECTION } },
    },
    {
      name: 'productName',
      label: 'Product Name',
      type: 'text',
      required: true,
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },
    {
      name: 'productCode',
      label: 'Product Code',
      type: 'text',
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },

    {
      type: 'ui',
      name: 'enquirySection',
      label: 'Enquiry Details',
      admin: { components: { Field: SECTION } },
    },
    {
      name: 'quantity',
      label: 'Estimated Quantity',
      type: 'text',
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },
    {
      name: 'message',
      label: 'Message / Additional Requirements',
      type: 'textarea',
      admin: { readOnly: true, components: { Field: RO_FIELD } },
    },

    {
      name: 'status',
      type: 'select',
      defaultValue: 'new',
      options: [
        { label: 'New',       value: 'new' },
        { label: 'In Review', value: 'in-review' },
        { label: 'Replied',   value: 'replied' },
        { label: 'Closed',    value: 'closed' },
      ],
      admin: { position: 'sidebar' },
    },
  ],
  timestamps: true,
}
