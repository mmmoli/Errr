import { Route } from "./+types/api-auth";
import { auth } from "@htch/shared-auth/server";

export function loader({ request }: Route.LoaderArgs) {
  return auth.handler(request);
}

export function action({ request }: Route.ActionArgs) {
  return auth.handler(request);
}
