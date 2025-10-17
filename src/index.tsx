import { render } from "solid-js/web";
import { HashRouter } from "@solidjs/router";
import "./index.css";
import Layout from "./Layout";
import { currentConfig } from "./configs/current";

render(
  () => (
    <HashRouter root={Layout}>
      {currentConfig.routeElements}
    </HashRouter>
  ),
  document.getElementById("root")!
);
