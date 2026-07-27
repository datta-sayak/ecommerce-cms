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

const filename = fileURLToPath(import.meta.url);
const dirname = path.dirname(filename);

export default buildConfig({
  serverURL: process.env.PAYLOAD_PUBLIC_SERVER_URL,
  cors: [process.env.PAYLOAD_PUBLIC_SERVER_URL!],
  csrf: [process.env.PAYLOAD_PUBLIC_SERVER_URL!],
  admin: {
    user: Users.slug,
    importMap: {
      baseDir: path.resolve(dirname),
    },
  },
  collections: [
    Users,
    Media,
    Categories,
    Products
  ],
  secret: process.env.PAYLOAD_SECRET || "",
  typescript: {
    outputFile: path.resolve(dirname, "payload-types.ts"),
  },
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL || "",
    },
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
