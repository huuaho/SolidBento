import { For, type Component } from "solid-js";
import { A } from "@solidjs/router";
import { upperfooter } from "../../configs/C3DC/footer";

const Footer: Component = () => {
  return (
    <footer
      class=" text-white w-full py-10 px-8"
      style={{ "background-color": "#004971" }}
    >
      <div class="max-w-7xl mx-auto flex flex-col lg:flex-row gap-8">
        {/* LEFT: 3-column link section (≈66%) */}
        <div class="w-full lg:w-2/3 grid grid-cols-1 sm:grid-cols-3 gap-8">
          <For each={upperfooter.links}>
            {(column) => (
              <div>
                <p class="font-semibold mb-3">{column.title}</p>
                <ul class="space-y-2">
                  <For each={column.items}>
                    {(item) => {
                      const isExternal =
                        item.href.startsWith("http") ||
                        item.href.startsWith("mailto:") ||
                        item.href.startsWith("tel:");

                      return (
                        <li>
                          {isExternal ? (
                            <a
                              href={item.href}
                              target="_blank"
                              rel="noopener noreferrer"
                              class="hover:underline"
                            >
                              {item.text}
                            </a>
                          ) : (
                            <A href={item.href} class="hover:underline">
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

        {/* RIGHT: newsletter form (≈34%) */}
        <div class="w-full lg:w-1/3">
          <h3 class="font-semibold mb-3">Newsletter</h3>
          <p class="mb-4 text-sm text-gray-200">
            Subscribe to our newsletter for updates and news.
          </p>
          <form class="flex flex-col sm:flex-row gap-3">
            <input
              type="email"
              placeholder="Your email"
              class="px-3 py-2 rounded-md text-gray-800 w-full sm:w-auto flex-1"
            />
            <button
              type="submit"
              class="bg-white text-blue-900 font-semibold px-4 py-2 rounded-md hover:bg-gray-200"
            >
              Subscribe
            </button>
          </form>
        </div>
      </div>

      {/* Bottom line */}
      <div class="mt-10 border-t border-blue-700 pt-4 text-sm text-gray-300 text-center">
        © 2024 My Company. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
