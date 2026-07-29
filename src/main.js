import { initNavbar } from "./features/navbar/index.js";
import { initHero } from "./features/hero/index.js";
import { initRevealAnimations } from "./features/animations/reveal.js";
import { initProducts } from "./features/products/index.js";
import {
  createFooter,
  initFooterAccordion,
} from "./components/footer/index.js";
import { initFAQ } from "./features/faq/index.js";
import { initHomePage } from "./pages/homePage.js";

document.addEventListener("DOMContentLoaded", () => {
  initNavbar();

  initHero();

  initRevealAnimations();

  initProducts();

  initFAQ();

  initHomePage();

  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();

    initFooterAccordion();
  }
});
