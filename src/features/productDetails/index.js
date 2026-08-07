import { PRODUCTS } from "../../constants/products.js";

import { getProductId } from "./query.js";
import { setProduct } from "./state.js";
import { initGallery } from "./gallery.js";

import { createProductDetailsLayout } from "../../components/productDetails/productDetailsLayout.js";
import { createBreadcrumb } from "../../components/productDetails/breadcrumb.js";
import { createProductGallery } from "../../components/productDetails/productGallery.js";
import { createProductInfo } from "../../components/productDetails/productInfo.js";
import { createProductTabs } from "../../components/productDetails/productTabs.js";
import { initProductTabs } from "./tabs.js";
import { initRelatedProducts } from "./relatedProducts.js";
import { initLightbox } from "./lightbox.js";
import {
  saveRecentlyViewed,
  initRecentlyViewed,
} from "./recentlyViewed.js";

export function initProductDetailsPage() {

  const container =
    document.getElementById("productDetails");

  if (!container) return;

  const productId =
    getProductId();

  const product =
    PRODUCTS.find(
      (item) =>
        String(item.id) === String(productId)
    );

  if (!product) {

    container.innerHTML = `
      <div
        class="
          mx-auto

          px-6
          py-32

          text-center
        "
      >

        <h2
          class="
            font-serif

            text-5xl

            text-[#181818]
          "
        >
          Product Not Found
        </h2>

        <p
          class="
            mt-4

            text-[#777]
          "
        >
          The product you're looking for doesn't exist.
        </p>

      </div>
    `;

    return;

  }

  setProduct(product);

 container.innerHTML =
createProductDetailsLayout(product);


  const breadcrumb =
    document.getElementById("productBreadcrumb");

  const gallery =
    document.getElementById("productGallery");

  const info =
    document.getElementById("productInfo");

  const tabs =
    document.getElementById("productTabs");

  breadcrumb.innerHTML =
    createBreadcrumb(product);

  gallery.innerHTML =
    createProductGallery(product);

  info.innerHTML =
    createProductInfo(product);

  tabs.innerHTML =
    createProductTabs(product);

 initGallery();

initLightbox();

initProductTabs();

initRelatedProducts();

initRecentlyViewed();

window.lucide?.createIcons();

 
}
