import { drizzle } from "drizzle-orm/libsql/web";
import { envs } from "./envs.js";
import * as schema from "./schema/index.js";

export const db = drizzle(
  {
    connection: {
      url: envs.DATABASE_URL,
      authToken: envs.DATABASE_AUTH_TOKEN,
    },
  },
  {
    schema,
  }
);

export type Db = typeof db;
export { schema };
