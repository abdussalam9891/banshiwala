import { getProductImages } from "../../utils/getProductImages.js";

function createStars(rating) {
  return `
<div
  class="
    mt-3

    flex
    items-center

    gap-1.5
lg:gap-2
  "
>

  <div
    class="
      flex
      items-center

      gap-0.5

      text-[#C89B3C]
    "
  >

    ${Array.from({ length: 5 })
      .map(
        (_, index) => `
<svg
  class="
   h-3
w-3

lg:h-[14px]
lg:w-[14px]

    ${
      index < Math.round(rating)
        ? "fill-current"
        : "fill-none stroke-current"
    }
  "

  viewBox="0 0 24 24"
>

<path
stroke-width="1.8"
d="M12 17.3L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"
/>

</svg>
`
      )
      .join("")}

  </div>

  <span
    class="
      text-[12px]
lg:text-[13px]

      text-[#888888]
    "
  >
    ${rating.toFixed(1)}
  </span>

</div>
`;
}

function createDiscount(product) {

  if (!product.originalPrice) return "";

  const discount = Math.round(
    (
      (product.originalPrice - product.price) /
      product.originalPrice
    ) * 100
  );

  if (discount <= 0) return "";

  return `
<span
class="
absolute

left-3
top-3
lg:left-5
lg:top-5

z-20

rounded-full

border
border-[#E9DFC8]

bg-[#181818]

px-2
py-1

lg:px-3.5
lg:py-1.5

backdrop-blur

text-[8px]
lg:text-[10px]

font-medium

uppercase

tracking-[0.16em]

text-white

shadow-[0_8px_20px_rgba(0,0,0,.08)]
"
>

${discount}% OFF

</span>
`;
}

function createWishlistButton() {

  return `
<button

type="button"

aria-label="Wishlist"

class="
absolute

right-3
top-3

lg:right-5
lg:top-5

z-20

flex

h-9
w-9

lg:h-10
lg:w-10

items-center
justify-center

rounded-full

border
border-[#EEE7DB]

bg-white/95

text-[#181818]

backdrop-blur

shadow-[0_8px_20px_rgba(0,0,0,.08)]

transition-all
duration-300

hover:-translate-y-1

hover:border-[#C9A45C]

hover:text-[#C9A45C]

hover:shadow-[0_16px_35px_rgba(0,0,0,.12)]
"
>

<i
data-lucide="heart"

class="
h-[15px]
w-[15px]

lg:h-[17px]
lg:w-[17px]
"
></i>

</button>
`;
}

function createCategory(product) {

  return `
<p
class="
text-[11px]

font-medium

uppercase

tracking-[0.28em]

text-[#A07936]
"
>

${(product.category || "Jewellery").toUpperCase()}

</p>
`;
}



export function createShowcaseCard(
  product,
  isSlider = true
) {

  const images =
    getProductImages(product);

  return `

<a

href="/pages/product-details.html?id=${product.id}"

class="
group

block

${

isSlider
?
`
flex-shrink-0

w-[72%]
sm:w-[48%]
md:w-[34%]
lg:w-[24%]
xl:w-[21%]

snap-start
`
:
`
w-full
`

}
"
>

  <!-- Image Card -->

  <div
    class="
      relative

      overflow-hidden

      rounded-2xl
lg:rounded-[26px]

aspect-square
lg:aspect-[1/1.02]

      border
      border-[#F2ECE3]

      bg-white

      aspect-[1/1.02]

      transition-all
      duration-500



      group-hover:border-[#D6B170]


    "
  >

    ${createDiscount(product)}

    ${createWishlistButton()}



    <!-- Product Image -->



<!-- Front Image -->

<img
  src="${images.front}"
  alt="${product.name}"
  loading="lazy"

  class="
    absolute
    inset-0

    m-auto

    max-h-[62%]
max-w-[62%]

lg:max-h-[50%]
lg:max-w-[50%]

    object-contain

    transition-all
    duration-700
    ease-out

    opacity-100

    group-hover:opacity-0
    group-hover:scale-110
  "
/>

<!-- Back Image -->

<img
  src="${images.back}"
  alt="${product.name}"
  loading="lazy"

  onerror="this.onerror=null;this.src='${images.front}'"

  class="
absolute
inset-0

h-full
w-full

object-cover

opacity-0

transition-all
duration-700

group-hover:opacity-100
group-hover:scale-105
"
/>



    <!-- Bottom Gradient -->

    <div
class="
absolute
inset-x-0
bottom-0

h-32

bg-gradient-to-t
from-white/80
via-white/20
to-transparent

transition-opacity
duration-500

opacity-100
group-hover:opacity-0
"
></div>

  </div>

  <!-- Product Info -->

  <div
    class="
      mt-4
lg:mt-7

px-0.5
lg:px-1
    "
  >



    <!-- Product Name -->

    <h3
      class="
        mt-3

        line-clamp-2

        font-serif

        text-[18px]
sm:text-[20px]
lg:text-[26px]

leading-tight

min-h-[48px]
lg:min-h-[68px]

        tracking-[-0.025em]

        text-[#181818]

        transition-colors
        duration-300

        group-hover:text-[#A07936]
      "
    >
      ${product.name}
    </h3>

    <!-- Price -->

    <div
      class="
        mt-5

        flex

        items-end

        gap-3
      "
    >

      <span
        class="
          text-[18px]
sm:text-[22px]
lg:text-[26px]

          font-semibold

          tracking-tight

          text-[#181818]
        "
      >
        ₹${product.price.toLocaleString("en-IN")}
      </span>

      ${
        product.originalPrice
          ? `
<span
class="
mb-[2px]

text-[12px]
sm:text-[13px]
lg:text-[15px]

text-[#9A9A9A]

line-through
"
>

₹${product.originalPrice.toLocaleString("en-IN")}

</span>
`
          : ""
      }

    </div>

    <!-- Reviews -->

    ${createStars(product.rating)}

    <!-- Divider -->

    <div
      class="
        mt-4
lg:mt-6

        h-px

        w-full

        bg-[#EFE8DE]
      "
    ></div>

    <!-- Footer -->

    <div
      class="
        mt-4
lg:mt-5

        flex

        items-center
        justify-between
      "
    >

      <span
        class="
          hidden
sm:block

text-[12px]
lg:text-[13px]

          text-[#888888]
        "
      >
        ${product.reviewCount} Reviews
      </span>

   <span
class="
inline-flex

items-center

gap-1

text-[11px]
sm:text-[12px]
lg:text-[13px]

font-medium

uppercase

tracking-[0.12em]
lg:tracking-[0.18em]

text-[#181818]

transition-all
duration-300

group-hover:text-[#A07936]
"
>
  View

  <svg
    xmlns="http://www.w3.org/2000/svg"

    fill="none"

    viewBox="0 0 24 24"

    stroke="currentColor"

    class="
      h-3
      w-3

      lg:h-4
      lg:w-4

      transition-transform
      duration-300

      group-hover:translate-x-1
    "
  >

    <path
      stroke-linecap="round"
      stroke-linejoin="round"
      stroke-width="2"
      d="M9 5l7 7-7 7"
    />

  </svg>

</span>
    </div>

  </div>


  </a>

`;

}
