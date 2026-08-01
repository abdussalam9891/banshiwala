import { createHomeFaq } from "../components/home/homeFaq.js";

import { initCollections } from "../features/collections/index.js";
import { initCraftsmanship } from "../features/craftsmanship/index.js";
import { initHero } from "../features/hero/index.js";
import { initMarquee } from "../features/marquee/index.js";
import { initNewsletterSection } from "../features/newsletter/index.js";
import { initShowcase } from "../features/showcase/index.js";
import { initTestimonials } from "../features/testimonials/index.js";
import { renderWhyChooseUs } from "../features/whyChooseUs/index.js";

import { initHomeAccordion } from "../features/homeFaq/accordion.js";

export function initHomePage() {

  const container = document.getElementById("homeFaq");

  if (!container) return;

  initHero();

  container.innerHTML = createHomeFaq();

  // Initialize Home FAQ accordion
  initHomeAccordion();

  const modules = [
    ["initCollections", initCollections],
    ["initShowcase", initShowcase],
    ["initMarquee", initMarquee],
    ["renderWhyChooseUs", renderWhyChooseUs],
    ["initCraftsmanship", initCraftsmanship],
    ["initTestimonials", initTestimonials],
    ["initNewsletterSection", initNewsletterSection],
  ];

  modules.forEach(([name, fn]) => {
    try {
      fn();
    } catch (err) {
      console.error(`[initHomePage] ${name} failed:`, err);
    }
  });

}
