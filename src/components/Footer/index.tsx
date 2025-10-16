import { For, type Component } from "solid-js";
import { A } from "@solidjs/router";
import { upperfooter, lowerfooter } from "../../configs/C3DC/footer";
import { isExternalLink } from "../utils";

const Footer: Component = () => {
	return (
		<footer>
			<div class="bg-[#004971] text-white w-full sm:py-10">
				<div class="max-w-7xl mx-auto flex flex-col md:flex-row gap-4 md:gap-0">
					{/* LEFT: 3-column link section (≈66%) */}
					<div class="w-full md:w-2/3">
						<div class="sm:hidden">
							<For each={upperfooter.links}>
								{(column) => (
									<details class="border-b border-black">
										<summary class="text-sm font-semibold px-4 py-3 cursor-pointer">
											{column.title}
										</summary>
										<ul class="space-y-2 px-10 pb-4">
											<For each={column.items}>
												{(item) => {
													const isExternal = isExternalLink(item.href);

													return (
														<li>
															{isExternal ? (
																<a
																	href={item.href}
																	target="_blank"
																	rel="noopener noreferrer"
																	class="hover:underline text-sm"
																>
																	{item.text}
																</a>
															) : (
																<A
																	href={item.href}
																	class="hover:underline text-sm"
																>
																	{item.text}
																</A>
															)}
														</li>
													);
												}}
											</For>
										</ul>
									</details>
								)}
							</For>
						</div>
						<div class="hidden sm:grid sm:grid-cols-2 lg:grid-cols-3 sm:pb-12 md:pb-0 sm:gap-8 px-4 md:pl-8 md:pr-4 sm:border-b md:border-0 border-black">
							<For each={upperfooter.links}>
								{(column) => (
									<div>
										<p class="font-semibold mb-3 text-sm">{column.title}</p>
										<ul class="space-y-2">
											<For each={column.items}>
												{(item) => {
													const isExternal = isExternalLink(item.href);

													return (
														<li>
															{isExternal ? (
																<a
																	href={item.href}
																	target="_blank"
																	rel="noopener noreferrer"
																	class="hover:underline text-sm"
																>
																	{item.text}
																</a>
															) : (
																<A
																	href={item.href}
																	class="hover:underline text-sm"
																>
																	{item.text}
																</A>
															)}
														</li>
													);
												}}
											</For>
										</ul>
									</div>
								)}
							</For>
						</div>
					</div>

					{/* RIGHT: newsletter form (≈34%) */}
					<div class="w-full md:w-1/3 px-4 md:pl-4 md:pr-8 pb-8 sm:pb-0">
						<h3 class="font-semibold text-xl mb-3">{upperfooter.form.title}</h3>
						<p class="mb-4 text-sm text-gray-200">
							{upperfooter.form.description}
						</p>
						<form class="flex flex-col gap-3">
							<input
								type="email"
								class="bg-white px-3 py-2 text-gray-800 w-full sm:w-auto flex-1"
							/>
							<button
								type="submit"
								class=" text-sm bg-[#face00] w-full md:w-fit text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-[#ddaa01] cursor-pointer"
							>
								{upperfooter.form.buttonText}
							</button>
						</form>
					</div>
				</div>
			</div>
			<div class="bg-[#00314b] text-white w-full py-4">
				<div class="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between">
					<div class="px-4 md:px-8">
						<div>
							<span class="text-2xl font-bold">National Cancer Institute</span>
						</div>
						<div>
							<span class="text-lg">at the National Institutes of Health</span>
						</div>
					</div>
					<div class="px-4 md:px-8 lg:text-right pt-4 lg:pt-0">
						<div>
							<span class="text-xl font-bold">Contact Us</span>
						</div>
						<div class="flex flex-col md:flex-row md:gap-4 lg:justify-end mt-1 sm:space-y-0">
							<For each={lowerfooter.contactUsLinks}>
								{(item) => {
									const isExternal = isExternalLink(item.href);
									return (
										<>
											{isExternal ? (
												<a
													href={item.href}
													target="_blank"
													rel="noopener noreferrer"
													class="hover:underline text-sm"
												>
													{item.text}
												</a>
											) : (
												<A href={item.href} class="hover:underline text-sm">
													{item.text}
												</A>
											)}
										</>
									);
								}}
							</For>
						</div>
					</div>
				</div>
				<div class="max-w-7xl mx-auto flex flex-col lg:flex-row lg:justify-between pt-6">
					<div class="px-4 md:px-8">
						<div>
							<span class="text-xl font-bold">Follow Us</span>
						</div>
						<div>
							<For each={lowerfooter.socialMediaLinks}>
								{(item) => (
									<a href={item.href} target="_blank">
										<img
											src={item.icon}
											alt={item.alt}
											class="inline-block mr-3 pt-3"
										/>
									</a>
								)}
							</For>
						</div>
					</div>
					<div class="pt-6 lg:pt-0">
						<For each={lowerfooter.governmentLinks}>
							{(item) => (
								<div class="px-4 md:px-8 pt-0 lg:pt-0 lg:text-right">
									{item.href ? (
										<a
											href={item.href}
											target="_blank"
											rel="noopener noreferrer"
											class="hover:underline text-xs"
										>
											{item.text}
										</a>
									) : (
										<span>{item.text}</span>
									)}
								</div>
							)}
						</For>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
