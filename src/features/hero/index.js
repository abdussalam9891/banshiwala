import { createHero } from "../../components/hero/index.js";
import { initHeroSlider } from "./slider.js";

export function initHero() {
  const container = document.getElementById("heroContainer");

  if (!container) {
    console.warn("[Hero] #heroContainer not found.");
    return;
  }

  container.innerHTML = createHero();

  initHeroSlider();
}
