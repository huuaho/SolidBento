// Layout.tsx
import type { ParentProps } from "solid-js";
import { A } from "@solidjs/router";
import Footer from "./components/Footer";

export default function Layout(props: ParentProps) {
  return (
    <>
      <nav>
        <A href="/">Home</A>
        <A href="/about">About</A>
      </nav>
      {props.children}
      <Footer />
    </>
  );
}
