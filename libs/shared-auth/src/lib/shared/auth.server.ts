import { anonymous } from "better-auth/plugins";
import { betterAuth } from "better-auth";
import { envs } from "./envs";
import { drizzleAdapter } from "better-auth/adapters/drizzle";
import { db } from "@htch/shared-db";

export const auth = betterAuth({
  secret: envs.BETTER_AUTH_SECRET,
  baseURL: envs.BASE_URL,
  plugins: [anonymous()],
  database: drizzleAdapter(db, {
    provider: "pg",
    usePlural: true,
  }),
});
