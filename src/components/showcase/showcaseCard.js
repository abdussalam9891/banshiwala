
import { getProductImages } from "../../utils/getProductImages.js";

function createStars(rating) {
  return `
    <div class="flex items-center gap-0.5 text-[#C8963E]">

      ${Array.from({ length: 5 })
        .map(
          (_, index) => `
            <svg
              class="w-3 h-3 ${
                index < Math.round(rating)
                  ? "fill-current"
                  : "fill-none stroke-current"
              }"
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
  `;
}

function createBadge(badge) {
  if (!badge) return "";

  const styles = {
    BESTSELLER: "bg-[#111111] text-white",
    NEW: "bg-primary text-white",
    LIMITED: "bg-[#C8963E] text-white",
  };

  return `
    <span
      class="
        absolute

        top-4
        left-4

        z-20

        inline-flex

        items-center
        justify-center

        rounded-md

        px-3
        py-1.5

        text-[10px]

        font-semibold

        uppercase

        tracking-[0.22em]

        shadow-[0_4px_12px_rgba(0,0,0,.12)]

        ${styles[badge] || styles.BESTSELLER}
      "
    >
      ${badge}
    </span>
  `;
}

function createIcon(type, delay = 0) {
  const icons = {
    heart: `
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M12 21s-7-4.4-9.5-8.3C.4 9.4 2.2 5.5 6.2 5.5c2 0 3.2 1 3.8 2 .6-1 1.8-2 3.8-2 4 0 5.8 3.9 3.7 7.2C19 16.6 12 21 12 21z"
      />
    `,

    eye: `
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M2 12s3.5-6 10-6 10 6 10 6-3.5 6-10 6S2 12 2 12zm10 3a3 3 0 100-6 3 3 0 000 6z"
      />
    `,

    compare: `
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="1.8"
        d="M7 7h12M7 7l3-3M7 7l3 3M17 17H5m12 0-3-3m3 3-3 3"
      />
    `,
  };

  return `
<button
style="transition-delay:${delay}ms"

class="
translate-x-5
opacity-0

transition-all
duration-500
ease-[cubic-bezier(0.22,1,0.36,1)]

group-hover:translate-x-0
group-hover:opacity-100

flex

h-8
w-8

sm:h-9
sm:w-9

items-center
justify-center

rounded-full

bg-white

text-[#181818]

shadow-[0_8px_20px_rgba(0,0,0,.10)]

hover:bg-primary
hover:text-white
"
>

<svg
class="
h-4
w-4

sm:h-5
sm:w-5
"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>

${icons[type]}

</svg>

</button>
`;
}

export function createShowcaseCard(product) {
  const images = getProductImages(product);

  return `
<article
  class="
    group
    reveal

    flex-shrink-0

    w-[72%]
    sm:w-[48%]
    md:w-[34%]
    lg:w-[24%]
    xl:w-[21%]

    snap-start
  "
>

  <!-- IMAGE CARD -->

  <div
    class="
      relative

      overflow-hidden

      rounded-[18px]
      sm:rounded-[20px]

      bg-[#FAF8F8]

      aspect-[1/1.18]
      sm:aspect-[4/5]

      transition-all
      duration-500
      ease-[cubic-bezier(0.22,1,0.36,1)]

      group-hover:shadow-[0_20px_50px_rgba(0,0,0,.08)]
    "
  >

    ${createBadge(product.badge)}

    <!-- ACTIONS -->

    <div
      class="
        absolute

        top-3
        right-3

        sm:top-4
        sm:right-4

        z-20

        flex

        flex-col

        gap-1.5
        sm:gap-2
      "
    >

      ${createIcon("heart", 0)}

      ${createIcon("eye", 80)}

      ${createIcon("compare", 160)}

    </div>

    <!-- FRONT IMAGE -->

    <img
      src="${images.front}"
      alt="${product.name}"

      class="
        absolute

        inset-0

        w-full
        h-full

        object-contain

        p-0


        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        group-hover:opacity-0
        group-hover:scale-[1.04]
      "
    />

    <!-- BACK IMAGE -->

    <img
      src="${images.back}"
      alt="${product.name}"
      onerror="this.onerror=null;this.src='${images.front}'"

      class="
        absolute

        inset-0

        w-full
        h-full

        object-contain

        p-0

        opacity-0

        transition-all
        duration-500
        ease-[cubic-bezier(0.22,1,0.36,1)]

        group-hover:opacity-100
        group-hover:scale-[1.04]
      "
    />

    <!-- SOFT GLOW -->

    <div
      class="
        pointer-events-none

        absolute
        inset-0

        opacity-0

        transition-opacity
        duration-500

        group-hover:opacity-100
      "
    >

      <div
        class="
          absolute

          inset-x-8

          bottom-2

          h-20

          rounded-full

          bg-white/50

          blur-3xl
        "
      ></div>

    </div>

  </div>

    <!-- PRODUCT INFO -->

  <!-- PRODUCT INFO -->

  <div
    class="
      mt-4
      sm:mt-5
      lg:mt-6

      px-1
    "
  >

    <!-- TITLE -->

    <h3
      class="
        text-[15px]
        sm:text-[16px]
        lg:text-[18px]

        font-medium

        leading-[1.45]

        tracking-[-0.01em]

        text-[#181818]

        line-clamp-2

        transition-colors
        duration-300

        group-hover:text-primary
      "
    >
      ${product.name}
    </h3>

    <!-- PRICE -->

    <div
      class="
        mt-3
        sm:mt-3.5
        lg:mt-4

        flex
        items-end

        gap-2
      "
    >

      <span
        class="
          text-[18px]
          sm:text-[20px]
          lg:text-[22px]

          font-semibold

          tracking-tight

          text-[#181818]
        "
      >
        ₹${product.price.toLocaleString("en-IN")}
      </span>

      <span
        class="
          mb-0.5

          text-[12px]
          sm:text-[13px]
          lg:text-[15px]

          text-[#9A9A9A]

          line-through
        "
      >
        ₹${product.originalPrice.toLocaleString("en-IN")}
      </span>

    </div>

    <!-- REVIEWS -->

    <div
      class="
        mt-2.5
        sm:mt-3

        flex

        items-center

        gap-1.5
      "
    >

      ${createStars(product.rating)}

      <span
        class="
          text-[11px]
          sm:text-[12px]
          lg:text-[13px]

          text-[#777777]
        "
      >
        (${product.reviewCount})
      </span>

    </div>

  </div>

</article>

`;

}

