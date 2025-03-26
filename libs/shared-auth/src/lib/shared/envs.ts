import { z } from "zod";
import process from "node:process";

const environmentSchema = z.object({
  BETTER_AUTH_SECRET: z.string(),
  BASE_URL: z.string().url(),
});

export const envs = environmentSchema.parse(process.env);
