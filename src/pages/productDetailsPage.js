import { initProductDetailsPage } from "../features/productDetails/index.js";

export function loadProductDetailsPage() {

  // If this page doesn't contain the product details layout,
  // do nothing.
  const container =
    document.getElementById("productDetails");

  if (!container) return;

  try {

    initProductDetailsPage();

  } catch (err) {

    console.error(
      "[loadProductDetailsPage] initProductDetailsPage failed:",
      err
    );

  }

}
