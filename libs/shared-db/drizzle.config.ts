import { defineConfig } from "drizzle-kit";

const DATABASE_URL = process.env.DATABASE_URL;
const AUTH_TOKEN = process.env.DATABASE_AUTH_TOKEN;

if (!DATABASE_URL || !AUTH_TOKEN) {
  throw new Error("Missing required environment variables");
}

export default defineConfig({
  out: "./drizzle",
  schema: "./src/lib/schema/index.ts",
  dialect: "turso",
  dbCredentials: {
    url: DATABASE_URL,
    authToken: AUTH_TOKEN,
  },
});
