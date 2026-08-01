import { NAVIGATION } from "../../constants/navigation.js";

export function createMobileNav() {
  const navigation = NAVIGATION.map(
    (item) => `
      <li>
        <a
          href="${item.href}"
          data-nav="${item.slug}"
          class="
            group
            flex
            items-center
            justify-between
            rounded-2xl
            px-5
            py-4
            text-sm
            font-medium
            uppercase
            tracking-[0.15em]
            text-white
            transition-all
            duration-300
            hover:bg-white/5
            hover:text-[#A07936]
          "
        >
          <span>${item.label}</span>

          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="
              h-5
              w-5
              transition-transform
              duration-300
              group-hover:translate-x-1
            "
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="1.8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="M9 6l6 6-6 6"
            />
          </svg>

        </a>
      </li>
    `
  ).join("");

  return `
<div
  id="mobileDrawer"
  class="
    fixed
    inset-0
    z-[999]
    hidden
  "
>

  <!-- Backdrop -->

  <div
    id="mobileBackdrop"
    class="
      absolute
      inset-0
      bg-black/60
      backdrop-blur-sm
      opacity-0
      transition-opacity
      duration-300
    "
  ></div>

  <!-- Drawer -->

  <aside
    id="mobilePanel"
    class="
      absolute
      left-4
      top-4
      bottom-4

      w-[340px]
      max-w-[calc(100vw-2rem)]

      overflow-y-auto

      rounded-3xl

      border
      border-white/10

      bg-[#181818]

      shadow-2xl

      -translate-x-[120%]

      transition-transform
      duration-300
      no-scrollbar
    "
  >

    <!-- Header -->

    <div
      class="
        flex
        items-center
        justify-between

        border-b
        border-white/10

        px-6
        py-6
      "
    >

      <h2
        class="
          text-lg
          font-semibold
          uppercase
          tracking-[0.18em]
          text-white
        "
      >
        Menu
      </h2>

      <button
        id="closeDrawerBtn"
        type="button"
        aria-label="Close Menu"
        class="
          flex
          h-10
          w-10
          items-center
          justify-center

          rounded-full

          text-white

          transition

          hover:bg-white/5
          hover:text-[#A07936]
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>

      </button>

    </div>

    <!-- Navigation -->

    <nav class="px-4 py-6">

      <ul class="space-y-2">

        ${navigation}

      </ul>

    </nav>

    <!-- Part 2 Starts Here -->

   <!-- Footer -->
<div
  class="
    border-t
    border-white/10
    px-4
    py-6
  "
>

  <!-- Quick Links -->
  <ul class="space-y-2">

    <li>
      <a
        href="/pages/wishlist.html"
        class="
          flex
          items-center
          justify-between
          rounded-2xl
          px-5
          py-4
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-white/5
          hover:text-[#A07936]
        "
      >
        Wishlist

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 6l6 6-6 6"
          />
        </svg>

      </a>
    </li>

    <li>
      <a
        href="/pages/cart.html"
        class="
          flex
          items-center
          justify-between
          rounded-2xl
          px-5
          py-4
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-white/5
          hover:text-[#A07936]
        "
      >
        Cart

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 6l6 6-6 6"
          />
        </svg>

      </a>
    </li>

    <li>
      <a
        href="/pages/about.html"
        class="
          flex
          items-center
          justify-between
          rounded-2xl
          px-5
          py-4
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-white/5
          hover:text-[#A07936]
        "
      >
        About Us

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 6l6 6-6 6"
          />
        </svg>

      </a>
    </li>

    <li>
      <a
        href="/pages/contact.html"
        class="
          flex
          items-center
          justify-between
          rounded-2xl
          px-5
          py-4
          text-sm
          font-medium
          text-white
          transition-all
          duration-300
          hover:bg-white/5
          hover:text-[#A07936]
        "
      >
        Contact

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M9 6l6 6-6 6"
          />
        </svg>

      </a>
    </li>

  </ul>

 

  <!-- Footer -->
  <div
    class="
      mt-8
      border-t
      border-white/10
      pt-6
      text-center
    "
  >

    <p class="text-xs text-white/40">
      © 2026 Banshiwala
    </p>

    <p class="mt-2 text-[11px] text-white/25">
      Premium Sterling Silver Jewellery for Men
    </p>

  </div>

</div>

  </aside>

</div>
`;
}
