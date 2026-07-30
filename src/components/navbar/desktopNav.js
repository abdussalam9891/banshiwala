import { NAVIGATION } from "../../constants/navigation.js";





export function createDesktopNav(theme = "light") {



    const textColor =
    theme === "dark"
      ? "text-[#181818]"
      : "text-white";

  const navTextColor =
    theme === "dark"
      ? "text-[#181818]/90"
      : "text-white/90";

  const hoverBg =
    theme === "dark"
      ? "hover:bg-black/5"
      : "hover:bg-white/5";




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
  navbar-text
  ${navTextColor}
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
        navbar-text
        ${textColor}
        transition
        hover:text-[#A07936]
        lg:hidden
      "
    >
     <svg
  xmlns="http://www.w3.org/2000/svg"
  class="h-7 w-7"
  viewBox="0 0 24 24"
  fill="none"
  stroke="currentColor"
  stroke-width="1.8"
  stroke-linecap="round"
>
  <line x1="4" y1="6" x2="20" y2="6" />
  <line x1="4" y1="12" x2="20" y2="12" />
  <line x1="4" y1="18" x2="15" y2="18" />
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
        navbar-text
       ${textColor}
        transition
        hover:text-[#A07936]
      "
    >
      <svg
  width="50"
  height="50"
  viewBox="0 0 128 128"
  fill="none"
  xmlns="http://www.w3.org/2000/svg"
>

  <!-- Outer Ring -->
  <circle
    cx="64"
    cy="64"
    r="54"
    stroke="#A07936"
    stroke-width="2"
  />

  <!-- Top Petal -->
  <path
    d="M64 28
       C74 40 74 53 64 61
       C54 53 54 40 64 28Z"
    fill="#A07936"
  />

  <!-- Left Petal -->
  <path
    d="M42 49
       C53 49 59 57 60 67
       C49 67 41 60 42 49Z"
    fill="#A07936"
    opacity=".95"
  />

  <!-- Right Petal -->
  <path
    d="M86 49
       C75 49 69 57 68 67
       C79 67 87 60 86 49Z"
    fill="#A07936"
    opacity=".95"
  />

  <!-- Bottom Petal -->
  <path
    d="M64 92
       C54 82 54 70 64 63
       C74 70 74 82 64 92Z"
    fill="#A07936"
  />

  <!-- Center Gem -->
  <circle
    cx="64"
    cy="64"
    r="8"
    fill="#181818"
  />

</svg>
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
          navbar-text
          ${textColor}
${hoverBg}
          transition-all
          duration-300

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
          navbar-text
          ${textColor}
${hoverBg}
          transition-all
          duration-300

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
          navbar-text
          ${textColor}
${hoverBg}
          transition-all
          duration-300

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
