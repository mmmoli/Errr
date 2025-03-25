import { createAuthClient } from "better-auth/react";
import { envs } from "./envs";

export const auth = createAuthClient({
  baseURL: envs.BASE_URL,
});
