import { z } from "zod";

const environmentSchema = z.object({
  BETTER_AUTH_SECRET: z.string(),
  BASE_URL: z.string().url(),
});

export const envs = environmentSchema.parse(process.env);
