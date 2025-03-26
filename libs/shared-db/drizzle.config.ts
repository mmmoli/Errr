import { defineConfig } from "drizzle-kit";
import process from "node:process";

const DATABASE_URL = process.env.DATABASE_URL;

if (!DATABASE_URL) {
  throw new Error("Missing required environment variables");
}

export default defineConfig({
  schema: "./src/lib/schema/index.ts",
  // Put this in a place that's picked-up by supabase
  out: "./supabase/migrations",
  dialect: "postgresql",
  dbCredentials: {
    url: DATABASE_URL,
  },
});
