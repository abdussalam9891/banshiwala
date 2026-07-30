export const SHOWCASE_TABS = [
  {
    id: "trending",
    label: "Trending",
    filter: (product) => product.isTrending,
  },

  {
    id: "recommended",
    label: "Recommended",
    filter: (product) => product.isRecommended,
  },

  {
    id: "new",
    label: "New Arrivals",
    filter: (product) => product.isNewArrival,
  },

  {
    id: "bestseller",
    label: "Best Sellers",
    filter: (product) => product.isBestSeller,
  },
];
