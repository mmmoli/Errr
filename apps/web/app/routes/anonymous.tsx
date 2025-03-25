import { auth } from "@err/shared-auth/server";
import { Route } from "./+types/anonymous";
import { data, Link } from "react-router";

export async function loader({ request: { headers } }: Route.LoaderArgs) {
  const authResult = await auth.api.signInAnonymous({
    returnHeaders: true,
    headers,
  });
  if (!authResult.response) throw new Error("Failed to sign in anonymously");
  return data(
    {
      session: authResult.response,
    },
    {
      headers: authResult.headers,
    }
  );
}

export default function AnonymousRoute({
  loaderData: { session },
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Anonymous Route</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
      <Link to="/protected">Go to protected route</Link>
    </div>
  );
}
