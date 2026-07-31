 
import { createHomeFaq } from "../components/home/homeFaq.js";
import { initAccordion } from "../features/faq/accordion.js";
import { initFAQ } from "../features/faq/index.js";
import { initHero } from "../features/hero/index.js";
import { renderWhyChooseUs } from "../features/whyChooseUs/index.js";
import { initCollections } from "../features/collections/index.js";
import { initTestimonials } from "../features/testimonials/index.js";
import { initCraftsmanship } from "../features/craftsmanship/index.js";
import { initMarquee } from "../features/marquee/index.js";
import { initShowcase } from "../features/showcase/index.js";
import { initNewsletterSection } from "../features/newsletter/index.js";

export function initHomePage() {
  const container = document.getElementById("homeFaq");

  // Bail entirely if this isn't the homepage — one check protects
  // every module below from running on pages that don't have them.
  if (!container) return;

  initHero();

  container.innerHTML = createHomeFaq();

  const modules = [
    ["initFAQ", initFAQ],
    ["initCollections", initCollections],
    ["initShowcase", initShowcase],
    ["initMarquee", initMarquee],
    ["renderWhyChooseUs", renderWhyChooseUs],
    ["initCraftsmanship", initCraftsmanship],
    ["initTestimonials", initTestimonials],
    ["initNewsletterSection", initNewsletterSection],
    ["initAccordion", initAccordion],
  ];

  modules.forEach(([name, fn]) => {
    try {
      fn();
    } catch (err) {
      console.error(`[initHomePage] ${name} failed:`, err);
    }
  });
}

























