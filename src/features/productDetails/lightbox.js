import { getProductImages } from "../../utils/getProductImages.js";

import {
  productState,
  setActiveImage,
} from "./state.js";

export function initLightbox() {

  const images = Object.values(
    getProductImages(productState.product)
  ).filter(Boolean);

  const modal =
    document.getElementById("productLightbox");

  const image =
    document.getElementById("lightboxImage");

  const mainImage =
    document.getElementById("productMainImage");

  const closeBtn =
    document.getElementById("closeLightbox");

  const prevBtn =
    document.getElementById("lightboxPrev");

  const nextBtn =
    document.getElementById("lightboxNext");

  if (!modal || !image || !mainImage) return;

  function render() {
    image.src = images[productState.activeImage];
  }

  function open() {
    render();
    modal.classList.remove("hidden");
    modal.classList.add("flex");
    document.body.classList.add("overflow-hidden");
  }

  function close() {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
    document.body.classList.remove("overflow-hidden");
  }

  function previous() {
    const index =
      productState.activeImage === 0
        ? images.length - 1
        : productState.activeImage - 1;

    setActiveImage(index);
    render();
  }

  function next() {
    const index =
      productState.activeImage === images.length - 1
        ? 0
        : productState.activeImage + 1;

    setActiveImage(index);
    render();
  }

  mainImage.addEventListener("click", open);
  closeBtn?.addEventListener("click", close);
  prevBtn?.addEventListener("click", previous);
  nextBtn?.addEventListener("click", next);

  modal.addEventListener("click", (event) => {
    if (event.target === modal) close();
  });

  document.addEventListener("keydown", (event) => {
    if (modal.classList.contains("hidden")) return;

    switch (event.key) {
      case "Escape":
        close();
        break;

      case "ArrowLeft":
        previous();
        break;

      case "ArrowRight":
        next();
        break;
    }
  });

}
