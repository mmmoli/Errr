import { auth } from "@htch/shared-auth/server";
import { Route } from "./+types/protected";
import { redirect } from "react-router";
import { AboutRoute } from "~shared/route-config";

const aboutRoute = AboutRoute();

export async function loader({ request: { headers } }: Route.LoaderArgs) {
  const session = await auth.api.getSession({
    headers,
  });
  if (!session) return redirect(aboutRoute.url);
  return { session };
}

export default function ProtectedRoute({
  loaderData: { session },
}: Route.ComponentProps) {
  return (
    <div>
      <h1>Protected Route</h1>
      <pre>{JSON.stringify(session, null, 2)}</pre>
    </div>
  );
}
