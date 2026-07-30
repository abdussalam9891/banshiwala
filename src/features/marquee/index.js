import { createMarqueeSection } from "../../components/marquee/marqueeSection.js";

export function initMarquee() {
  const container = document.getElementById("marquee");

  if (!container) return;

  container.innerHTML = createMarqueeSection();
}
