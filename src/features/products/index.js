import { restoreProductsStateFromURL } from "./query.js";

import {
  renderProductsHero,
  updateHeroCount,
} from "./hero.js";

import {
  renderProductsToolbar,
} from "./toolbar.js";

import {
  renderProductsFilters,
  restoreFilterUI,
  initFilterEvents,
} from "./filters.js";

import { renderProductsGrid } from "./grid.js";

export function initProductsPage() {
  // Don't initialize if this page isn't present
  if (!document.getElementById("productsHero")) {
    return;
  }

  // Restore state from URL
  restoreProductsStateFromURL();

  // Static UI
  renderProductsHero();
  renderProductsToolbar();
  renderProductsFilters();

  // Restore checked filters
  restoreFilterUI();

  // Attach listeners (only once)
  initFilterEvents();

  // Render products
  renderProductsGrid();

  // Sync hero count
  updateHeroCount();
}
