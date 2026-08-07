import { PRODUCTS } from "../../constants/products.js";
import { SHOWCASE_TABS } from "../../constants/showcaseProducts.js";
import { createShowcaseCard } from "../../components/showcase/showcaseCard.js";

export function renderShowcase(activeTab = "trending") {
  const container = document.getElementById("showcaseProducts");

  if (!container) return;

  const selectedTab = SHOWCASE_TABS.find(
    (tab) => tab.id === activeTab
  );

  if (!selectedTab) return;

  const filteredProducts = PRODUCTS.filter(selectedTab.filter);

  // Empty-state guard: if a filter ever returns zero products,
  // don't silently render an empty container that breaks the
  // carousel's prev/next button logic downstream.
  container.innerHTML = filteredProducts.length
    ? filteredProducts.map((product) => createShowcaseCard(product)).join("")
    : `<p class="text-center text-[#777777] py-10 w-full">No products in this collection yet.</p>`;

    window.lucide?.createIcons();

  // Cards are injected fresh on every tab switch. The scroll-reveal
  // IntersectionObserver only observes elements present at initial
  // page load — it never sees these new nodes, so anything still
  // carrying "reveal"/"reveal-up" stays permanently opacity:0.
  // Strip it on inject instead of relying on the observer to catch up.
  container.querySelectorAll(".reveal, .reveal-up").forEach((el) => {
    el.classList.remove("reveal", "reveal-up");
  });
}
