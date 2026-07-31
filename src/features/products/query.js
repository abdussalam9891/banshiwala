import { productsState } from "./state.js";

export function getProductsQuery() {
  const params = new URLSearchParams(window.location.search);

  return {
    category: params.get("category")
      ? params.get("category").split(",")
      : [],

    badge: params.get("badge")
      ? params.get("badge").split(",")
      : [],

    sort: params.get("sort") || "featured",

    page: Number(params.get("page")) || 1,

    search: params.get("search") || "",

    price: (() => {
      const min = params.get("min");
      const max = params.get("max");

      if (!min && !max) return null;

      return {
        min: Number(min),
        max: Number(max),
      };
    })(),
  };
}

export function restoreProductsStateFromURL() {
  const query = getProductsQuery();

  productsState.filters.categories = query.category.map((category) =>
    category.toLowerCase()
  );

  productsState.filters.badges = query.badge.map((badge) =>
    badge.toUpperCase()
  );

  productsState.filters.price = query.price;

  productsState.sort = query.sort;

  productsState.page = query.page;
}

export function updateProductsURL() {
  const params = new URLSearchParams();

  // Categories
  if (productsState.filters.categories.length) {
    params.set(
      "category",
      productsState.filters.categories.join(",")
    );
  }

  // Badges
  if (productsState.filters.badges.length) {
    params.set(
      "badge",
      productsState.filters.badges.join(",")
    );
  }

  // Price
  if (productsState.filters.price) {
    params.set("min", productsState.filters.price.min);
    params.set("max", productsState.filters.price.max);
  }

  // Sort
  if (productsState.sort !== "featured") {
    params.set("sort", productsState.sort);
  }

  // Pagination
  if (productsState.page > 1) {
    params.set("page", productsState.page);
  }

  const url =
    params.toString().length > 0
      ? `${window.location.pathname}?${params.toString()}`
      : window.location.pathname;

  window.history.replaceState({}, "", url);
}

export function resetProductsURL() {
  window.history.replaceState(
    {},
    "",
    window.location.pathname
  );
}
