import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/_index.tsx"),
  route("code-of-conduct", "routes/code-of-conduct/route.tsx"),
  route("events", "routes/events/route.tsx"),
  route("projects", "routes/projects/route.tsx"),
] satisfies RouteConfig;
