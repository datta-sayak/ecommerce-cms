import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { cloudStoragePlugin } from "@payloadcms/plugin-cloud-storage";
import { cloudinaryAdapter, cloudinaryConfig } from "@/utils/cloudinaryAdapter";
import path from "path";
import { buildConfig } from "payload";
import { fileURLToPath } from "url";
import sharp from "sharp";

import { Users } from "./collections/Users";
import { Media } from "./collections/Media";
import { Categories } from "./collections/Categories";
import { Products } from "./collections/Products";
import { QuoteRequests } from "./collections/QuoteRequests";
import { Enquiries } from "./collections/Enquiries";
import { resendAdapter } from "@payloadcms/email-resend";

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL!],
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL!],
  email: resendAdapter({
    defaultFromAddress: 'no-reply@sayakdatta.tech',
    defaultFromName: 'Soujata Exim',
    apiKey: process.env.RESEND_API_KEY || '',
  }),
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo: "@/components/admin/Logo",
        Icon: '@/components/admin/Icon',
      },
      afterNavLinks: [
        '@/components/admin/QuoteCountWidget#QuoteCountWidget',
        '@/components/admin/EnquiryCountWidget#EnquiryCountWidget',
      ],
    },
    meta: {
      title: 'Dashboard',
      titleSuffix: " - Soujata Exim",
      icons: [{
        rel: 'icon',
        url: '/logo.png',
      },
    ],
    },
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Products,
    QuoteRequests,
    Enquiries,
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  editor: lexicalEditor(),
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
      max: 20,
      min: 2,
      idleTimeoutMillis: 10000,
      connectionTimeoutMillis: 5000,
    },
    // push: false,
  }),
  sharp,
  plugins: [
      cloudStoragePlugin({
        collections: {
          media: {
            adapter: cloudinaryAdapter,
            disableLocalStorage: true,
            generateFileURL: ({ filename }) => {
              return cloudinaryConfig.url(filename, { secure: true })
            },
          },
        },
      }),
    ],
});
