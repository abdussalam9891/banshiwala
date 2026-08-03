import { createAuthHeader } from "./authHeader.js";
import { createAuthFooter } from "./authFooter.js";

export function createAuthLayout({
  title,
  form,
}) {
  return `

${createAuthHeader()}

<section
  class="
    relative

    min-h-screen

    overflow-hidden

    bg-[#FAF8F5]

    px-4

    pt-24
    pb-10

    sm:px-6
  "
>

  <!-- Background Glow -->

  <div
    class="
      pointer-events-none

      absolute
      inset-0

      bg-[radial-gradient(circle_at_top,#F8F2E8_0%,transparent_55%)]
    "
  ></div>

  <!-- Decorative Ring -->

  <div
    class="
      absolute

      left-1/2
      -top-44

      h-[320px]
      w-[320px]

      -translate-x-1/2

      rounded-full

      border

      border-[#E8DAC4]

      opacity-40

      md:h-[420px]
      md:w-[420px]
    "
  ></div>

  <div
    class="
      relative
      z-10

      mx-auto

      flex
      flex-col

      items-center

      max-w-[440px]
    "
  >

    <!-- Card -->

    <div
      class="
        w-full

        overflow-hidden

        rounded-[28px]

        border
        border-[#ECECEC]

        bg-white

        shadow-[0_18px_50px_rgba(0,0,0,.08)]
      "
    >

      <!-- Luxury Accent -->

      <div
        class="
          h-[3px]

          bg-gradient-to-r

          from-[#A07936]
          via-[#D9B770]
          to-[#A07936]
        "
      ></div>

      <div
        class="
          px-6
          py-7

          sm:px-8
          sm:py-8
        "
      >

        <!-- Heading -->

        <h1
          class="
            text-center

            font-serif

            text-[38px]

            leading-none

            text-[#181818]

            sm:text-[44px]
          "
        >
          ${title}
        </h1>

        <!-- Form -->

        <div class="mt-6">

          ${form}

        </div>

      </div>

    </div>

    <div class="mt-6 w-full">

      ${createAuthFooter()}

    </div>

  </div>

</section>

`;
}
