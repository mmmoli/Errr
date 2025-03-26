import { z } from "zod";
import process from "node:process";

const environmentSchema = z.object({
  DATABASE_URL: z.string().url(),
});

export const envs = environmentSchema.parse(process.env);
