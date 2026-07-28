import { MigrateUpArgs, MigrateDownArgs, sql } from '@payloadcms/db-postgres'

export async function up({ db, payload, req }: MigrateUpArgs): Promise<void> {
  await db.execute(sql`
   CREATE TYPE "public"."enum_quote_requests_product_type" AS ENUM('jute', 'cotton', 'canvas', 'non-woven', 'pouches', 'custom');
  CREATE TYPE "public"."enum_quote_requests_status" AS ENUM('new', 'in-review', 'quoted', 'closed');
  CREATE TABLE "quote_requests" (
  	"id" serial PRIMARY KEY NOT NULL,
  	"full_name" varchar NOT NULL,
  	"email" varchar NOT NULL,
  	"phone" varchar,
  	"company" varchar,
  	"country" varchar,
  	"product_type" "enum_quote_requests_product_type" NOT NULL,
  	"quantity" varchar NOT NULL,
  	"message" varchar,
  	"status" "enum_quote_requests_status" DEFAULT 'new',
  	"updated_at" timestamp(3) with time zone DEFAULT now() NOT NULL,
  	"created_at" timestamp(3) with time zone DEFAULT now() NOT NULL
  );
  
  ALTER TABLE "products" ADD COLUMN "product_highlights" jsonb;
  ALTER TABLE "products" ADD COLUMN "specifications_weight" numeric;
  ALTER TABLE "payload_locked_documents_rels" ADD COLUMN "quote_requests_id" integer;
  CREATE INDEX "quote_requests_updated_at_idx" ON "quote_requests" USING btree ("updated_at");
  CREATE INDEX "quote_requests_created_at_idx" ON "quote_requests" USING btree ("created_at");
  ALTER TABLE "payload_locked_documents_rels" ADD CONSTRAINT "payload_locked_documents_rels_quote_requests_fk" FOREIGN KEY ("quote_requests_id") REFERENCES "public"."quote_requests"("id") ON DELETE cascade ON UPDATE no action;
  CREATE INDEX "payload_locked_documents_rels_quote_requests_id_idx" ON "payload_locked_documents_rels" USING btree ("quote_requests_id");`)
}

export async function down({ db, payload, req }: MigrateDownArgs): Promise<void> {
  await db.execute(sql`
   ALTER TABLE "quote_requests" DISABLE ROW LEVEL SECURITY;
  DROP TABLE "quote_requests" CASCADE;
  ALTER TABLE "payload_locked_documents_rels" DROP CONSTRAINT "payload_locked_documents_rels_quote_requests_fk";
  
  DROP INDEX "payload_locked_documents_rels_quote_requests_id_idx";
  ALTER TABLE "products" DROP COLUMN "product_highlights";
  ALTER TABLE "products" DROP COLUMN "specifications_weight";
  ALTER TABLE "payload_locked_documents_rels" DROP COLUMN "quote_requests_id";
  DROP TYPE "public"."enum_quote_requests_product_type";
  DROP TYPE "public"."enum_quote_requests_status";`)
}
