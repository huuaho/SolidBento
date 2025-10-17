import type { UpperFooter, LowerFooter } from './footer';
import type { JSX } from 'solid-js';

export interface NavItem {
  path: string;
  label: string;
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

  // Route elements (JSX from routes.tsx)
  routeElements: JSX.Element[];

  // Navigation metadata for header
  navigation: NavItem[];
}
