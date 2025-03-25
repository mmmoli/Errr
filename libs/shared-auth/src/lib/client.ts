import { createAuthClient } from "better-auth/react";
import { envs } from "./envs";

export const { useSession } = createAuthClient({
  baseURL: envs.BASE_URL,
  plugins: [],
});
