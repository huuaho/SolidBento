import type { UpperFooter, LowerFooter } from './footer';

export interface RouteConfig {
  path: string;
  component: string; // Component name to render
  label: string; // For navigation
  inNav: boolean; // Show in main nav?
}

export interface ProjectConfig {
  name: string;
  displayName: string; // Full display name for header

  // Footer configuration
  footer: {
    upper: UpperFooter;
    lower: LowerFooter;
  };

  // Route configurations
  routes: RouteConfig[];
}
