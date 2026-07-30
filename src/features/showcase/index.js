import { createShowcaseSection } from "../../components/showcase/showcaseSection.js";
import { renderShowcase } from "./renderShowcase.js";
import { initShowcaseTabs } from "./tabs.js";
import { initShowcaseCarousel } from "./carousel.js";

export function initShowcase() {
  const container = document.getElementById("showcase");

  if (!container) return;

  container.innerHTML = createShowcaseSection();

  // Initial render
  renderShowcase();

  // Initialize interactions
  initShowcaseTabs();
  initShowcaseCarousel();
}
