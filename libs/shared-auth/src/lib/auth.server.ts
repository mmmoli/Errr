import { betterAuth } from "better-auth";
import { envs } from "./envs";

export const auth = betterAuth({
  secret: envs.BETTER_AUTH_SECRET,
  baseURL: envs.BASE_URL,
  plugins: [],
});
