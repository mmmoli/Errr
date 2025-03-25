import {
  index,
  layout,
  route,
  type RouteConfig,
} from "@react-router/dev/routes";

export default [
  layout("layouts/default.tsx", [
    index("routes/about.tsx"),
    route("/protected", "routes/protected.tsx"),
    route("/anonymous", "routes/anonymous.tsx"),
    route("/create", "routes/create-project.tsx"),
  ]),
  route("api/auth/*", "routes/api-auth.tsx"),
] satisfies RouteConfig;
