import { PRODUCTS } from "../../constants/products.js";

import { productState } from "./state.js";

import { createShowcaseCard } from "../../components/showcase/showcaseCard.js";

export function initRelatedProducts() {

  const container =
    document.getElementById("relatedProducts");

  if (!container) return;

  const current =
    productState.product;

  const related =
    PRODUCTS
      .filter((product) => {

        return (
          product.id !== current.id &&
          product.category === current.category
        );

      })
      .slice(0, 8);

  container.innerHTML =
    related
      .map((product) =>
        createShowcaseCard(product, true)
      )
      .join("");

}
