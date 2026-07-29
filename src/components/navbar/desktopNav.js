import { NAVIGATION } from "../../constants/navigation.js";

export function createDesktopNav() {
  const navLinks = NAVIGATION.map(
    (item) => `
      <li>
        <a
          href="${item.href}"
          data-nav="${item.slug}"
          class="
            relative
            py-2
            text-[13px]
            font-medium
            uppercase
            tracking-[0.18em]
            text-white/90
            transition-colors
            duration-300
            hover:text-[#A07936]

            after:absolute
            after:left-0
            after:bottom-0
            after:h-[2px]
            after:w-0
            after:bg-[#A07936]
            after:transition-all
            after:duration-300

            hover:after:w-full
          "
        >
          ${item.label}
        </a>
      </li>
    `
  ).join("");

  return `
<nav
  id="navbar"
  class="
    h-20
    bg-transparent
    border-b
    border-transparent
    transition-all
    duration-500
  "
>
  <div
    class="
      mx-auto
      flex
      h-full
      max-w-7xl
      items-center
      justify-between
      px-5
      lg:px-8
    "
  >

    <!-- Mobile Menu Button -->

    <button
      id="menuBtn"
      type="button"
      aria-label="Open navigation menu"
      class="
        flex
        items-center
        justify-center
        text-white
        transition
        hover:text-[#A07936]
        lg:hidden
      "
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-7 w-7"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="1.8"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M4 6h16M4 12h16M4 18h16"
        />
      </svg>
    </button>

    <!-- Logo -->

    <a
      href="/index.html"
      class="
        select-none
        text-3xl
        font-serif
        uppercase
        tracking-[0.18em]
        text-white
        transition
        hover:text-[#A07936]
      "
    >
      BANSHIWALA
    </a>

    <!-- Desktop Navigation -->

    <ul
      class="
        hidden
        items-center
        gap-10
        lg:flex
      "
    >
      ${navLinks}
    </ul>

    <!-- Right Actions -->

    <div
      id="navbarActions"
      class="
        flex
        items-center
        gap-2
        lg:gap-3
      "
    >

          <!-- Search -->

      <button
        id="searchBtn"
        type="button"
        aria-label="Search"
        class="
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          text-white
          transition-all
          duration-300
          hover:bg-white/5
          hover:text-[#A07936]
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-5 w-5"
        >
          <circle
            cx="11"
            cy="11"
            r="7"
          />
          <path
            d="M20 20L16.65 16.65"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>

      <!-- Wishlist -->

      <a
        href="/pages/wishlist.html"
        aria-label="Wishlist"
        class="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          text-white
          transition-all
          duration-300
          hover:bg-white/5
          hover:text-[#A07936]
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-5 w-5"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M12 20.5l-1.45-1.32C5.4 14.36 2 11.28 2 7.5A4.5 4.5 0 016.5 3 5.1 5.1 0 0112 6.09 5.1 5.1 0 0117.5 3 4.5 4.5 0 0122 7.5c0 3.78-3.4 6.86-8.55 11.68L12 20.5z"
          />
        </svg>

        <span
          id="wishlistCount"
          class="
            hidden
            absolute
            -right-1
            -top-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-[#A07936]
            text-[10px]
            font-semibold
            text-black
          "
        >
          0
        </span>
      </a>

      <!-- Cart -->

      <a
        href="/pages/cart.html"
        aria-label="Shopping Cart"
        class="
          relative
          flex
          h-11
          w-11
          items-center
          justify-center
          rounded-full
          text-white
          transition-all
          duration-300
          hover:bg-white/5
          hover:text-[#A07936]
        "
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          stroke-width="1.8"
          class="h-5 w-5"
        >
          <circle
            cx="9"
            cy="20"
            r="1.25"
          />

          <circle
            cx="18"
            cy="20"
            r="1.25"
          />

          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M2 3h2l2.4 10.2a1 1 0 001 .8h9.8a1 1 0 001-.78L20 7H6"
          />
        </svg>

        <span
          id="cartCount"
          class="
            hidden
            absolute
            -right-1
            -top-1
            flex
            h-5
            w-5
            items-center
            justify-center
            rounded-full
            bg-[#A07936]
            text-[10px]
            font-semibold
            text-black
          "
        >
          0
        </span>

      </a>

    </div>

  </div>

</nav>
`;
}
