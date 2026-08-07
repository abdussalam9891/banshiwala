import { createRelatedProductsSection } from "./relatedProductsSection.js";
import { createStickyEnquiryBar } from "./stickyEnquiryBar.js";
import { createProductLightbox } from "./productLightbox.js";
import { createRecentlyViewedSection } from "./recentlyViewedSection.js";



export function createProductDetailsLayout(product) {
  return `

<section
  class="
    pt-10
    pb-20

    lg:pt-14
    lg:pb-24
  "
>

  <div
    class="
      mx-auto

      max-w-[1600px]

      px-4
      sm:px-6
      lg:px-8
      xl:px-10
    "
  >

    <!-- Breadcrumb -->

    <div id="productBreadcrumb"></div>

    <!-- Main -->

    <div
      class="
        mt-8

        grid

        grid-cols-1

        gap-14

        lg:grid-cols-[1.05fr_0.95fr]
        lg:gap-20

        xl:gap-24
      "
    >

      <!-- Gallery -->

      <div id="productGallery"></div>

      <!-- Product Info -->

      <div
        id="productInfo"

        class="
          lg:sticky
          lg:top-32

          self-start
        "
      ></div>

    </div>

    <!-- Tabs -->

    <div
      id="productTabs"

      class="
        mt-20
        lg:mt-24
      "
    ></div>

  </div>

</section>

${createRelatedProductsSection()}

${createRecentlyViewedSection()}

${createStickyEnquiryBar(product)}

${createProductLightbox(product)}

`;
}
