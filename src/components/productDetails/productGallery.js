import { getProductImages } from "../../utils/getProductImages.js";

export function createProductGallery(product) {

const imageSet = getProductImages(product);

const images = Object.values(imageSet).filter(Boolean);

  return `

<div
class="
flex


flex-col-reverse
lg:flex-row

gap-5
"
>

  <!-- Thumbnails -->

  <div
    id="productThumbnails"

    class="
      flex

      lg:flex-col

      gap-3

      overflow-x-auto

      no-scrollbar
    "
  >

    ${images
      .map(
        (image, index) => `

<button

type="button"

data-index="${index}"

class="
product-thumbnail

group

relative

h-20
w-20

shrink-0

overflow-hidden

rounded-2xl

border

${
  index === 0
    ? "border-[#A07936]"
    : "border-[#ECE5D8]"
}

bg-white

transition-all
duration-300

hover:border-[#A07936]
"

>

<img

src="${image}"

alt="${product.name}"

loading="lazy"

class="
h-full
w-full

object-cover

transition-transform
duration-500

group-hover:scale-105
"
/>

</button>

`
      )
      .join("")}

  </div>

  <!-- Main Image -->

  <div
    class="
      flex-1
    "
  >

    <div
      class="
        overflow-hidden

        rounded-[30px]

        border
        border-[#ECE5D8]

        bg-white

        aspect-square
      "
    >

      <img

        id="productMainImage"

        src="${images[0]}"

        alt="${product.name}"

        loading="eager"

        class="
          h-full
          w-full

          object-cover



          transition-all
          duration-500
        "
      >

    </div>

  </div>

</div>

`;

}
