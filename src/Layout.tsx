// Layout.tsx
import type { ParentProps } from "solid-js";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { ProjectProvider } from "./contexts/ProjectContext";
import { currentConfig } from "./configs/current";

export default function Layout(props: ParentProps) {
	return (
		<ProjectProvider config={currentConfig}>
			<div class="min-h-screen flex flex-col">
				<Header />
				<main class="flex-1">
					{props.children}
				</main>
				<Footer />
			</div>
		</ProjectProvider>
	);
}
