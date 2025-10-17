import { lazy } from "solid-js";
import { Route } from "@solidjs/router";
import type { NavItem } from "../typings/project";

const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));

export const gcRoutes = [
  <Route path="/" component={Home} />,
  <Route path="/about" component={About} />,
];

export const gcNavigation: NavItem[] = [
  { path: "/", label: "Home", inNav: true },
  { path: "/about", label: "About", inNav: true },
];
