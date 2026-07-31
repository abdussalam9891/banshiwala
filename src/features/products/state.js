export const productsState = {
  // Master product list (optional for future API support)
  products: [],

  // Products after filters + sorting
  filteredProducts: [],

  // Pagination
  page: 1,
  limit: 12,

  // Sorting
  sort: "featured",

  // Active filters
  filters: {
    categories: [],
    badges: [],
    price: null,
  },
};
