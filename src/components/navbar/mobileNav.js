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

  <!-- Social -->
<div class="mt-8">

  <p
    class="
      mb-4
      px-2
      text-xs
      font-medium
      uppercase
      tracking-[0.25em]
      text-white/40
    "
  >
    Follow Us
  </p>

  <div class="flex gap-3">

    <!-- Instagram -->

    <a
      href="#"
      aria-label="Instagram"
      class="
        group
        flex
        h-12
        flex-1
        items-center
        justify-center

        rounded-2xl

        border
        border-white/10

        text-white

        transition-all
        duration-300

        hover:border-[#A07936]
        hover:bg-[#A07936]/10
        hover:text-[#A07936]
      "
    >

      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="1.8"
        class="
          h-5
          w-5
          transition-transform
          duration-300
          group-hover:scale-110
        "
      >
        <rect
          x="3"
          y="3"
          width="18"
          height="18"
          rx="5"
        />

        <circle
          cx="12"
          cy="12"
          r="4"
        />

        <circle
          cx="17.5"
          cy="6.5"
          r="1"
          fill="currentColor"
          stroke="none"
        />
      </svg>

    </a>

    <!-- WhatsApp -->

    <a
      href="#"
      aria-label="WhatsApp"
      class="
        group
        flex
        h-12
        flex-1
        items-center
        justify-center

        rounded-2xl

        border
        border-white/10

        text-white

        transition-all
        duration-300

        hover:border-[#A07936]
        hover:bg-[#A07936]/10
        hover:text-[#A07936]
      "
    >

   <svg
  xmlns="http://www.w3.org/2000/svg"
  viewBox="0 0 32 32"
  fill="currentColor"
  class="
    h-5
    w-5
    transition-transform
    duration-300
    group-hover:scale-110
  "
>
  <path d="M19.11 17.2c-.29-.15-1.72-.85-1.98-.95-.27-.1-.46-.15-.66.15-.19.29-.75.95-.92 1.15-.17.2-.34.22-.63.07-.29-.15-1.23-.45-2.35-1.44-.87-.77-1.46-1.72-1.63-2.01-.17-.29-.02-.45.13-.6.13-.13.29-.34.44-.51.15-.17.2-.29.29-.49.1-.2.05-.37-.02-.51-.07-.15-.66-1.59-.9-2.18-.24-.57-.49-.49-.66-.5h-.56c-.2 0-.51.07-.78.37-.27.29-1.02 1-.99 2.44.02 1.44 1.04 2.83 1.18 3.02.15.2 2.04 3.12 4.95 4.38.69.29 1.22.46 1.64.59.69.22 1.31.19 1.8.12.55-.08 1.72-.7 1.97-1.38.24-.68.24-1.27.17-1.39-.07-.12-.27-.2-.56-.34z"/>
  <path d="M16 3C8.82 3 3 8.82 3 16c0 2.29.6 4.52 1.73 6.49L3 29l6.69-1.75A13 13 0 1016 3zm0 23.63c-2.02 0-4-.54-5.74-1.57l-.41-.24-3.97 1.04 1.06-3.87-.27-.4A10.62 10.62 0 115.38 16 10.63 10.63 0 0116 5.38c5.86 0 10.62 4.76 10.62 10.62S21.86 26.62 16 26.62z"/>
</svg>

    </a>

  </div>

</div>

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
