export function createProductCard(product, options = {}) {
  const {
    showWishlistButton = true,
    showRemoveButton = false,
    showMoveToCart = false,
  } = options;

  const productId = product.id ?? product._id;

  const primaryImage = `/src/assets/${product.folder}/${product.imageId}-1.webp`;
  const hoverImage = `/src/assets/${product.folder}/${product.imageId}-2.webp`;

  const hasDiscount =
    product.originalPrice &&
    product.originalPrice > product.price;

  const discountPercent = hasDiscount
    ? Math.round(
        ((product.originalPrice - product.price) /
          product.originalPrice) *
          100
      )
    : null;

  return `

<article
  data-product-id="${productId}"
  class="
    group
    relative
    w-full

    reveal
  "
>

  ${
    showRemoveButton
      ? `
      <button
        data-id="${productId}"
        class="
          absolute
          top-4
          right-4
          z-40

          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          bg-white

          shadow-lg

          transition-all
          duration-300

          hover:bg-red-50
        "
      >
        ✕
      </button>
    `
      : ""
  }

  ${
    showWishlistButton
      ? `
      <button
        data-id="${productId}"
        class="
          wishlist-btn

          absolute
          top-2
          right-2
          z-40

          flex
          h-6
          w-6
          items-center
          justify-center

          rounded-full






          opacity-70
          scale-90

          transition-all
          duration-500

          group-hover:opacity-100
          group-hover:scale-100
        "
      >

        <svg
          viewBox="0 0 24 24"
          stroke-width="1.8"
          class="
            h-9
            w-9

            fill-none
            stroke-[#181818]

            transition-colors
            duration-300

            group-hover:stroke-[#A07936]
          "
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M20.8 4.6a5.5 5.5 0 0 0-7.8 0L12 5.6l-1-1a5.5 5.5 0 0 0-7.8 7.8l1 1L12 21l7.8-7.6 1-1a5.5 5.5 0 0 0 0-7.8z"
          />
        </svg>

      </button>
    `
      : ""
  }

<a
  href="/pages/product.html?id=${productId}"
  class="block"
>

<div
  class="
    rounded-sm

    bg-gradient-to-b
    from-[#FCFBF8]
    to-[#F3EFE9]

    transition-all
    duration-500

    group-hover:shadow-[0_24px_55px_rgba(0,0,0,.08)]
"
>

  <div
    class="
      relative
      aspect-[5/6]
      overflow-hidden
    "
  >

        <img
          src="${primaryImage}"
          loading="lazy"
          alt="${product.name}"

          class="
            absolute
            inset-0

            h-full
            w-full

            object-cover

            transition-all
            duration-700
            ease-out

            group-hover:scale-[1.08]
            group-hover:brightness-[0.97]
          "

          onerror="this.onerror=null;this.src='/src/assets/images/placeholder.webp';"
        />

        <img
          src="${hoverImage}"
          loading="lazy"
          alt="${product.name}"

          class="
            absolute
            inset-0

            h-full
            w-full

            object-cover

            opacity-0

            transition-all
            duration-700
            ease-out

            group-hover:opacity-100
            group-hover:scale-[1.08]
            group-hover:brightness-[0.98]
          "

          onerror="this.remove();"
        />


 ${
  product.isBestSeller
    ? `
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

    bg-[#111111]
    text-white

    px-3
    py-1.5

    text-[10px]
    font-semibold
    uppercase
    tracking-[0.22em]

    shadow-[0_4px_12px_rgba(0,0,0,.12)]
  "
>
  BEST SELLER
</span>
    `
    : ""
}

${
  hasDiscount
    ? `
      <span
        class="
          absolute
          bottom-4
          left-4
          z-50

          inline-flex
          items-center
          justify-center



          bg-[#181818]

          px-3
          py-1.5

          text-[9px]
          font-medium
          uppercase
          tracking-[0.18em]

          text-white

          shadow-[0_8px_20px_rgba(0,0,0,.18)]
        "
      >
        - ${discountPercent}%
      </span>
    `
    : ""
}

    </div>

</div>

<div
  class="
    mt-5
    px-1
  "
>

        <h3
          class="
            font-medium

            text-[1.08rem]

            leading-7

            tracking-[0.02em]

            text-[#181818]

            line-clamp-2

            transition-colors
            duration-300

            group-hover:text-[#A07936]
          "
        >
          ${product.name}
        </h3>

        <div
          class="
            flex
            items-center
            gap-3
          "
        >

          <span
            class="
              text-lg

              font-semibold

              tracking-tight

              text-[#181818]
            "
          >
            ₹${product.price.toLocaleString("en-IN")}
          </span>

          ${
            hasDiscount
              ? `
              <span
                class="
                  text-sm

                  text-[#8C8C8C]

                  line-through

                  font-normal
                "
              >
                ₹${product.originalPrice.toLocaleString("en-IN")}
              </span>
            `
              : ""
          }

        </div>



      </div>

    </div>

  </a>

    ${
    showMoveToCart
      ? `
      <button
        data-id="${productId}"
        class="
          mt-5

          w-full

          rounded-xl

          border
          border-[#181818]

          bg-[#181818]

          py-3.5

          text-sm
          font-medium

          uppercase
          tracking-[0.14em]

          text-white

          transition-all
          duration-300

          hover:border-[#A07936]
          hover:bg-[#A07936]
        "
      >
        Move to Cart
      </button>
      `
      : ""
  }

</article>

`;
}
