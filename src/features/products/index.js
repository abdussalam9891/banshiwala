import { PRODUCTS } from "../../constants/products.js";
import { createProductCard } from "../../components/productCard/productCard.js";

function renderProducts(containerId, products, options = {}) {
  const container = document.getElementById(containerId);

  if (!container) return;

  container.innerHTML = products
    .map(product => createProductCard(product, options))
    .join("");
}

export function initProducts() {
  renderBestSellers();
}

export function renderBestSellers() {
  const bestSellers = PRODUCTS.filter(
    product => product.isBestSeller
  );

  renderProducts(
    "bestSellerProducts",
    bestSellers,
    {
      showWishlistButton: true,
    }
  );
}

export function renderNewArrivals(limit = 8) {
  renderProducts(
    "newArrivalProducts",
    PRODUCTS.slice(0, limit),
    {
      showWishlistButton: true,
    }
  );
}

export function renderCategory(folder) {
  const products = PRODUCTS.filter(
    product => product.folder === folder
  );

  renderProducts(
    "productsGrid",
    products,
    {
      showWishlistButton: true,
    }
  );
}

export function renderWishlist(products) {
  renderProducts(
    "wishlistGrid",
    products,
    {
      showWishlistButton: false,
      showRemoveButton: true,
      showMoveToCart: true,
    }
  );
}

export function renderAllProducts() {
  renderProducts(
    "productsGrid",
    PRODUCTS,
    {
      showWishlistButton: true,
    }
  );
}
