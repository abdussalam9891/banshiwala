import { renderShowcase } from "./renderShowcase.js";

let activeTab = "trending";

export function initShowcaseTabs() {
  const tabsContainer = document.getElementById("showcaseTabs");
  const productsContainer = document.getElementById("showcaseProducts");

  if (!tabsContainer || !productsContainer) return;

  tabsContainer.addEventListener("click", (event) => {
    const button = event.target.closest("[data-tab]");

    if (!button) return;

    const selectedTab = button.dataset.tab;

    if (selectedTab === activeTab) return;

    activeTab = selectedTab;

    // Active Button
    tabsContainer.querySelectorAll(".showcase-tab").forEach((tab) => {
      tab.classList.remove(
        "bg-[#111111]",
        "text-white",
        "border-[#111111]"
      );

      tab.classList.add(
        "bg-white",
        "text-[#444]",
        "border-[#E5E5E5]"
      );
    });

    button.classList.remove(
      "bg-white",
      "text-[#444]",
      "border-[#E5E5E5]"
    );

    button.classList.add(
      "bg-[#111111]",
      "text-white",
      "border-[#111111]"
    );

    // Fade Out
    productsContainer.classList.add("opacity-0");

    setTimeout(() => {
      renderShowcase(activeTab);

      requestAnimationFrame(() => {
        // Reset scroll position
        productsContainer.scrollLeft = 0;

        // Notify carousel that content changed
        productsContainer.dispatchEvent(new Event("scroll"));

        productsContainer.classList.remove("opacity-0");
      });
    }, 180);
  });
}
