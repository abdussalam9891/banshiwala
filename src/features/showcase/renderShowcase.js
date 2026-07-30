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

  container.innerHTML = filteredProducts
    .map((product) => createShowcaseCard(product))
    .join("");
}
