import { createNavbar } from "../../components/navbar/navbar.js";
import { initScroll } from "./scroll.js";
import { initActiveLink } from "./activeLink.js";
import { initMobileDrawer } from "./mobileDrawer.js";
import { initSearchOverlay } from "./searchOverlay.js";

export function initNavbar() {
  const container = document.getElementById("navbar-container");

  if (!container) {
    console.warn("[Navbar] #navbar-container not found.");
    return;
  }

  container.innerHTML = createNavbar();

  initScroll();
  initActiveLink();
  initMobileDrawer();
  initSearchOverlay();
}
