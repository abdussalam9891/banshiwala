import { createCraftsmanshipSection } from "../../components/craftsmanship/craftsmanshipSection.js";

export function initCraftsmanship() {
  const container = document.getElementById("craftsmanship");

  if (!container) return;

  container.innerHTML = createCraftsmanshipSection();
}
