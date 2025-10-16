// Layout.tsx
import type { ParentProps } from "solid-js";
import { A } from "@solidjs/router";
import Header from "./components/Header";
import Footer from "./components/Footer";

export default function Layout(props: ParentProps) {
	console.log("hello", import.meta.env.VITE_CONFIG);
	return (
		<>
			<Header />
			<nav>
				<A href="/">Home</A>
				<A href="/about">About</A>
			</nav>
			{props.children}
			<Footer />
		</>
	);
}
