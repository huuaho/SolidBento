//generate simple header
import type { Component } from "solid-js";
import { A } from "@solidjs/router";
import { For } from "solid-js";
import { useProject } from "../../contexts/ProjectContext";

const Header: Component = () => {
	const config = useProject();
	const BASE_PATH = import.meta.env.BASE_URL || '/';

	// Get navigation items that should appear in nav
	const navItems = () => config.navigation.filter(n => n.inNav);

	return (
		<header class="bg-white shadow-sm">
			<div class="max-w-7xl mx-auto px-4 py-4">
				<div class="flex items-center justify-between">
					{/* Left: Back to all projects link */}
					<a
						href={BASE_PATH.replace(`/${config.name}/`, '/')}
						class="text-blue-600 hover:underline text-sm cursor-pointer"
						onClick={(e) => {
							e.preventDefault();
							window.location.href = BASE_PATH.replace(`/${config.name}/`, '/');
						}}
					>
						← All Projects
					</a>

					{/* Center: Project name */}
					<A href="/" class="text-xl font-bold text-gray-800 hover:text-blue-600">
						{config.displayName}
					</A>

					{/* Right: Navigation links */}
					<nav class="flex gap-4">
						<For each={navItems()}>
							{(nav) => (
								<A
									href={nav.path}
									class="text-gray-600 hover:text-blue-600"
								>
									{nav.label}
								</A>
							)}
						</For>
					</nav>
				</div>
			</div>
		</header>
	);
};

export default Header;
