import { Component, ParentProps, lazy } from "solid-js";
import { render } from "solid-js/web";
import { HashRouter, Route, A } from "@solidjs/router";
import "./index.css";
import Layout from "./Layout";

const About: Component = lazy(() => import("./pages/About"));
const Home: Component = lazy(() => import("./pages/Home"));

render(
  () => (
    <HashRouter root={Layout}>
      <Route path="/about" component={About} />
      <Route path="/" component={Home} />
    </HashRouter>
  ),
  document.getElementById("root")!
);
