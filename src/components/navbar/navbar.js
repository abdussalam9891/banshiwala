import { createDesktopNav } from "./desktopNav.js";
import { createMobileNav } from "./mobileNav.js";
import { createSearchOverlay } from "./searchOverlay.js";

export function createNavbar(theme = "light") {
  return `
    <header
      id="siteHeader"
      data-theme="${theme}"
      class="
        fixed
        inset-x-0
        top-0
        z-[100]
        bg-transparent
        transition-all
        duration-500
      "
    >

      <!-- Announcement -->

      <div
        class="
          bg-[#111111]
          border-b
          border-white/10
          py-2
          text-center
          text-xs
          uppercase
          tracking-[0.2em]
          text-[#A07936]
        "
      >
        Free Shipping on Orders ₹999+
      </div>

      <!-- Desktop Navigation -->

      ${createDesktopNav(theme)}

      <!-- Mobile Navigation -->

      ${createMobileNav(theme)}

      <!-- Search Overlay -->

      ${createSearchOverlay()}

    </header>
  `;
}
