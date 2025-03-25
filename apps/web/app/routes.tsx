import { index, route, type RouteConfig } from "@react-router/dev/routes";

export default [
  index("routes/about.tsx"),
  route("api/auth/*", "routes/api-auth.tsx"),
] satisfies RouteConfig;
