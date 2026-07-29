import { initNavbar } from "./features/navbar/index.js";
import { initHero } from "./features/hero/index.js";
import { initRevealAnimations } from "./features/animations/reveal.js";
import { initProducts } from "./features/products/index.js";

import { createFooter } from "./components/footer/index.js";
import { initFAQ } from "./features/faq/index.js";



document.addEventListener("DOMContentLoaded", () => {
  initNavbar();

  initHero();

  initRevealAnimations();

  initProducts();

  initFAQ();

  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();
  }
});
