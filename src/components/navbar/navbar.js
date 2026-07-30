import { createDesktopNav } from "./desktopNav.js";
import { createMobileNav } from "./mobileNav.js";
import { createSearchOverlay } from "./searchOverlay.js";
import { createAnnouncementBar } from "../announcement/announcementBar.js";

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

     ${createAnnouncementBar()}

      <!-- Desktop Navigation -->

      ${createDesktopNav(theme)}

      <!-- Mobile Navigation -->

      ${createMobileNav(theme)}

      <!-- Search Overlay -->

      ${createSearchOverlay()}

    </header>
  `;
}
