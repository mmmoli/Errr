import type { ComponentType } from "react";

export type RouteDefinition = {
  url: string;
  label: string;
  icon: ComponentType<{ className?: string }>;
};

export type Route<T = undefined> = T extends undefined
  ? () => RouteDefinition
  : (params: T) => RouteDefinition;
