import { NAVIGATION } from "../../constants/navigation.js";
import { icon } from "../../utils/icon.js";

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

          <span>
            ${item.label}
          </span>

          <span
            class="
              transition-transform
              duration-300

              group-hover:translate-x-1
            "
          >
            ${icon("chevron-right")}
          </span>

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

  left-1/2
  top-1/2

  w-[92vw]
  max-w-[380px]
  max-h-[90vh]

  -translate-x-1/2
  -translate-y-1/2
  scale-95

  overflow-y-auto
  no-scrollbar

  rounded-[28px]

  border
  border-white/10

  bg-[#181818]

  shadow-[0_35px_90px_rgba(0,0,0,.45)]

  opacity-0

  transition-all
  duration-300
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

      <div>

        <p
          class="
            text-[11px]

            uppercase

            tracking-[0.35em]

            text-[#A07936]
          "
        >
          Banshiwala
        </p>

        <h2
          class="
            mt-2

            text-lg
            font-medium

            text-white
          "
        >
          Navigation
        </h2>

      </div>

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

          transition-all
          duration-300

          hover:bg-white/5
          hover:text-[#A07936]
        "

      >

        ${icon("x", "h-6 w-6")}

      </button>

    </div>

    <!-- Account -->

    <div
      class="
        border-b
        border-white/10

        px-4
        py-5
      "
    >

      <a

        href="/pages/login.html"

        class="
          flex
          items-center

          gap-4

          rounded-2xl

          px-5
          py-4

          transition-all
          duration-300

          text-white

          hover:bg-white/5
          hover:text-[#A07936]
        "

      >

        <div
          class="
            flex
            h-12
            w-12

            items-center
            justify-center

            rounded-full

            bg-white/5
          "
        >

          ${icon("user")}

        </div>

        <div>

          <p
            class="
              text-sm
              font-medium
            "
          >
            My Account
          </p>

          <p
            class="
              mt-1

              text-xs

              text-white/50
            "
          >
            Sign In / Register
          </p>

        </div>

      </a>

    </div>

    <!-- Navigation -->

    <nav
      class="
        px-4
        py-6
      "
    >

      <ul
        class="
          space-y-2
        "
      >

        ${navigation}

      </ul>

    </nav>

    <!-- Quick Links -->

<div
  class="
    border-t
    border-white/10

    px-4
    py-6
  "
>

  <ul class="space-y-2">

    <!-- Wishlist -->

    <li>

      <a
        href="/pages/wishlist.html"

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

          text-white

          transition-all
          duration-300

          hover:bg-white/5
          hover:text-[#A07936]
        "
      >

        <div class="flex items-center gap-3">

          ${icon("heart")}

          <span>Wishlist</span>

        </div>

        <span
          class="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        >
          ${icon("chevron-right")}
        </span>

      </a>

    </li>

    <!-- Cart -->

    <li>

      <a
        href="/pages/cart.html"

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

          text-white

          transition-all
          duration-300

          hover:bg-white/5
          hover:text-[#A07936]
        "
      >

        <div class="flex items-center gap-3">

          ${icon("shopping-bag")}

          <span>Cart</span>

        </div>

        <span
          class="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        >
          ${icon("chevron-right")}
        </span>

      </a>

    </li>

    <!-- About -->

    <li>

      <a
        href="/pages/about.html"

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

          text-white

          transition-all
          duration-300

          hover:bg-white/5
          hover:text-[#A07936]
        "
      >

        <div class="flex items-center gap-3">

          ${icon("info")}

          <span>About Us</span>

        </div>

        <span
          class="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        >
          ${icon("chevron-right")}
        </span>

      </a>

    </li>

    <!-- Contact -->

    <li>

      <a
        href="/pages/contact.html"

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

          text-white

          transition-all
          duration-300

          hover:bg-white/5
          hover:text-[#A07936]
        "
      >

        <div class="flex items-center gap-3">

          ${icon("mail")}

          <span>Contact</span>

        </div>

        <span
          class="
            transition-transform
            duration-300

            group-hover:translate-x-1
          "
        >
          ${icon("chevron-right")}
        </span>

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

    <p
      class="
        text-xs

        tracking-[0.2em]

        text-white/40
      "
    >
      © 2026 Banshiwala
    </p>

    <p
      class="
        mt-2

        text-[11px]

        tracking-[0.08em]

        text-white/25
      "
    >
      Premium Sterling Silver Jewellery for Men
    </p>

  </div>

</div>

  </aside>

</div>
`;
}
