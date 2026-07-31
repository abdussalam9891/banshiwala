// main.js
import { initNavbar } from "./features/navbar/index.js";
import { initRevealAnimations } from "./features/animations/reveal.js";
import {
  createFooter,
  initFooterAccordion,
} from "./components/footer/index.js";
import { initHomePage } from "./pages/homePage.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();

  // Homepage-only sections live and die inside initHomePage,
  // which no-ops safely if this isn't the homepage.
  initHomePage();

  // AFTER everything is rendered
  initRevealAnimations();

  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();
    initFooterAccordion();
  }
});
