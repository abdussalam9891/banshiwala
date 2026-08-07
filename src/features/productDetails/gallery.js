import { getProductImages } from "../../utils/getProductImages.js";

import {
  productState,
  setActiveImage,
} from "./state.js";

export function initGallery() {

  const buttons =
    document.querySelectorAll(".product-thumbnail");

  const image =
    document.getElementById("productMainImage");

  if (!buttons.length || !image) return;

  const images = Object.values(
    getProductImages(productState.product)
  ).filter(Boolean);

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const index =
        Number(button.dataset.index);

      setActiveImage(index);

      image.src = images[index];

      buttons.forEach((btn) => {
        btn.classList.remove("border-[#A07936]");
        btn.classList.add("border-[#ECE5D8]");
      });

      button.classList.remove("border-[#ECE5D8]");
      button.classList.add("border-[#A07936]");

    });

  });

}
