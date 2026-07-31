import { initNavbar } from "./features/navbar/index.js";
import { initRevealAnimations } from "./features/animations/reveal.js";
import { loadFAQPage } from "./pages/faqPage.js";

import {
  createFooter,
  initFooterAccordion,
} from "./components/footer/index.js";

import { initHomePage } from "./pages/homePage.js";
import { loadProductsPage } from "./pages/productsPage.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();

  // Pages
  initHomePage();
  loadProductsPage();
  loadFAQPage();

  // Global animations
  initRevealAnimations();

  // Footer
  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();
    initFooterAccordion();
  }
});
