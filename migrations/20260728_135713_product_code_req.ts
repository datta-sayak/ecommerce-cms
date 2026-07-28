import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "products_specifications_specifications_code_idx";
  ALTER TABLE "products" ALTER COLUMN "specifications_code" SET NOT NULL;
  CREATE UNIQUE INDEX "products_specifications_specifications_code_idx" ON "products" USING btree ("specifications_code");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   DROP INDEX "products_specifications_specifications_code_idx";
  ALTER TABLE "products" ALTER COLUMN "specifications_code" DROP NOT NULL;
  CREATE INDEX "products_specifications_specifications_code_idx" ON "products" USING btree ("specifications_code");`)
}
