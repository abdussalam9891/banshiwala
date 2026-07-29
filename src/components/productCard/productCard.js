export function createProductCard(product, options = {}) {
  const {
    showWishlistButton = true,
    showRemoveButton = false,
    showMoveToCart = false,
  } = options;

  const productId = product.id ?? product._id;

  const primaryImage = `/src/assets/${product.folder}/${product.imageId}-1.webp`;
  const hoverImage = `/src/assets/${product.folder}/${product.imageId}-2.webp`;

  return `

    <article
      data-product-id="${productId}"
      class="
        group
        relative
        w-full
        overflow-hidden
      "
    >

      ${
        showRemoveButton
          ? `
          <button
            data-id="${productId}"
            class="
              absolute
              right-4
              top-4
              z-30

              flex
              h-10
              w-10
              items-center
              justify-center

              rounded-full

              bg-white

              shadow-md

              transition

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
              right-4
              top-4
              z-30

              flex
              h-11
              w-11
              items-center
              justify-center

              rounded-full

              bg-white/95
              backdrop-blur

              shadow-md

              opacity-0
              translate-y-3

              transition-all
              duration-500

              group-hover:opacity-100
              group-hover:translate-y-0
            "
          >

            <svg
              class="
                h-5
                w-5

                stroke-[#181818]
                fill-none

                transition
                duration-300

                hover:stroke-[#A07936]
              "
              viewBox="0 0 24 24"
              stroke-width="1.8"
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
            relative
            overflow-hidden

            rounded-2xl

            bg-[#F8F5F2]
          "
        >

          ${
            product.isBestSeller
              ? `
             <span
class="
product-badge

absolute
left-4
top-4

rounded-full

bg-[#181818]

px-4
py-1.5

text-[10px]
font-medium
uppercase

tracking-[0.22em]

text-white
"
>
                BEST SELLER
              </span>
            `
              : ""
          }

          <div
            class="
              relative
              aspect-[4/5]
              overflow-hidden
            "
          >

            <!-- Primary Image -->

            <img
              src="${primaryImage}"

              loading="lazy"

              alt="${product.name}"

              class="
                product-primary

                absolute
                inset-0

                h-full
                w-full

                object-cover

                transition-all
                duration-700
                ease-out

                group-hover:scale-110
              "

              onerror="this.onerror=null;this.src='/src/assets/images/placeholder.webp';"
            />

            <!-- Hover Image -->

            <img
              src="${hoverImage}"

              loading="lazy"

              alt="${product.name}"

              class="
                product-hover

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
                group-hover:scale-110
              "

              onerror="this.remove();"
            />

          </div>

                  <!-- Product Info -->

        <div class="px-2 pt-5 pb-2">

         <h3
class="
product-title

font-serif
text-[1.05rem]
leading-snug
tracking-wide

text-[#181818]

line-clamp-2
"
>
            ${product.name}
          </h3>

          <div
            class="
              mt-3
              flex
              items-center
              gap-2
            "
          >

            <span
class="
product-price

text-lg
font-medium
tracking-wide
text-[#181818]
"
>
              ₹${product.price.toLocaleString("en-IN")}
            </span>

            ${
              product.originalPrice &&
              product.originalPrice > product.price
                ? `
                  <span
                    class="
                      text-sm
                      text-[#8A8A8A]
                      line-through
                    "
                  >
                    ₹${product.originalPrice.toLocaleString("en-IN")}
                  </span>
                `
                : ""
            }

          </div>

        </div>

      </a>

      ${
        showMoveToCart
          ? `
            <button
              data-id="${productId}"
              class="
                mt-4

                w-full

                rounded-xl

                border
                border-[#181818]

                py-3

                text-sm
                font-medium
                tracking-wide

                transition-all
                duration-300

                hover:bg-[#181818]
                hover:text-white
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
