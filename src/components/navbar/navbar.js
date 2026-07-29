import { createDesktopNav } from "./desktopNav.js";
import { createMobileNav } from "./mobileNav.js";
import { createSearchOverlay } from "./searchOverlay.js";

export function createNavbar() {
  return `
    <header id="siteHeader"  class="
    fixed
    inset-x-0
    top-0
    z-[100]

    bg-transparent

    transition-all
    duration-500
  ">

      <!-- Announcement -->
      <div
        class="
          bg-[#111111]
          border-b
          border-white/10
          py-2
          text-center
          text-xs
          tracking-[0.2em]
          uppercase
          text-[#A07936]
        "
      >
        Free Shipping on Orders ₹999+
      </div>

      ${createDesktopNav()}

      ${createMobileNav()}

      ${createSearchOverlay()}

    </header>
  `;
}
