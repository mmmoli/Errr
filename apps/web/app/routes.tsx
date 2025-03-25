import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/about.tsx"),
  route("api/auth/*", "routes/api-auth.tsx"),
  route("/protected", "routes/protected.tsx"),
  route("/anonymous", "routes/anonymous.tsx"),
] satisfies RouteConfig;
