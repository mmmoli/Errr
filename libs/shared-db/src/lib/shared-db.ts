import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import { envs } from "./envs.ts";
import * as schema from "./schema/index.ts";

const client = postgres(envs.DATABASE_URL);
export const db = drizzle({ client, schema });

export type Db = typeof db;
export { schema };
