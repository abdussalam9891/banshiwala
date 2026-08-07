import { createEnquiryButton } from "./enquiryButton.js";

function createStars(rating = 5) {

  return `
<div
  class="
    flex
    items-center

    gap-2
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
h-[16px]
w-[16px]

${index < Math.round(rating)
  ? "fill-current"
  : "fill-none stroke-current"}
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
      text-sm

      text-[#777]
    "
  >
    ${rating.toFixed(1)}
  </span>

</div>
`;

}

function createDiscount(product){

  if(!product.originalPrice) return "";

  const percentage =
    Math.round(
      (
        (product.originalPrice-product.price) /
        product.originalPrice
      ) * 100
    );

  if(percentage<=0) return "";

  return `
<span
class="
rounded-full

bg-[#181818]

px-3
py-1

text-[11px]

font-medium

tracking-[0.18em]

uppercase

text-white
"
>

${percentage}% OFF

</span>
`;

}

export function createProductInfo(product){

return `

<div
class="
space-y-8
"
>

  <!-- Title -->

  <div>

    <h1
      class="
        font-serif

        text-[42px]
        lg:text-[56px]

        italic

        leading-none

        text-[#181818]
      "
    >
      ${product.name}
    </h1>

    <div class="mt-5">

      ${createStars(product.rating)}

    </div>

  </div>

  <!-- Price -->

  <div
    class="
      flex

      flex-wrap

      items-center

      gap-4
    "
  >

    <span
      class="
        text-[38px]

        font-semibold

        text-[#181818]
      "
    >
      ₹${product.price.toLocaleString("en-IN")}
    </span>

    ${
      product.originalPrice
      ?`
<span
class="
text-2xl

text-[#9A9A9A]

line-through
"
>

₹${product.originalPrice.toLocaleString("en-IN")}

</span>
`
:""
}

    ${createDiscount(product)}

  </div>

  <!-- Description -->

  <p
    class="
      max-w-xl

      text-[16px]

      leading-8

      text-[#666]
    "
  >
    ${product.shortDescription || "Handcrafted sterling silver jewellery designed for timeless elegance and everyday wear."}
  </p>

  <!-- Features -->

  <div
    class="
      grid

      gap-4
    "
  >

    ${[
      "925 Sterling Silver",
      "Hallmarked Jewellery",
      "Handcrafted by Artisans",
      "Hypoallergenic",
      "Free Shipping",
      "Lifetime Polish"
    ].map(item=>`

<div
class="
flex

items-center

gap-3
"
>

<div
class="
h-2
w-2

rounded-full

bg-[#A07936]
"
></div>

<p
class="
text-[15px]

text-[#555]
"
>

${item}

</p>

</div>

`).join("")}

  </div>

  <!-- CTA -->

${createEnquiryButton(product)}

</div>

`;

}
