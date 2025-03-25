import { Folders, Home } from "lucide-react";

import type { Route } from "./route-types";

export const AboutRoute: Route = () => ({
  url: "/about",
  label: "About",
  icon: Home,
});

export const ProjectRoute: Route<{
  projectSlug: string;
  projectName?: string;
}> = ({ projectSlug, projectName }) => ({
  url: `/p/${projectSlug}`,
  label: projectName ?? `Project`,
  icon: Folders,
});
