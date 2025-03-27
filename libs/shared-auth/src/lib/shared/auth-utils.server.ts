import { auth } from "./auth.server";

export async function assertUser(
  req: Request
): Promise<ReturnType<typeof auth.api.getSession>> {
  const session = await auth.api.getSession(req);
  if (!session || !session.user) {
    throw new Error("Unauthenticated");
  }
  return session;
}
