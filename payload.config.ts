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

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL!],
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL!],
  admin: {
    user: Users.slug,
    components: {
      graphics: {
        Logo: "@/components/admin/Logo",
        Icon: '@/components/admin/Icon',
      },
      afterNavLinks: [
        '@/components/admin/QuoteCountWidget#QuoteCountWidget',
      ],
    },
    meta: {
      titleSuffix: "| Soujata Exim Admin",
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
  ],
  secret: process.env.PAYLOAD_SECRET || "",
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
