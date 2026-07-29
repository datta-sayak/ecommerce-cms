import { resetPasswordTemplate } from '@/templates/resetPasswordTemplate';
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
  auth: {
    forgotPassword: {
      generateEmailSubject: () => 'Reset Soujata Exim dashboard password',
      generateEmailHTML: ({ token, user } = {}) => {
        const URL = process.env.PAYLOAD_PUBLIC_SERVER_URL!;
        const resetURL = `${URL}/admin/reset/${token}`;
        return resetPasswordTemplate({
            user: user.email ?? 'there',
            resetURL,
            URL
          })
      }
    },
  },
  fields: [
    // Email added by default
    // Add more fields as needed
  ],
}
