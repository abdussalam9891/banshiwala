import { createCustomizeJewelleryForm } from "./form.js";

export function createCustomizeJewelleryModal() {
  return `
<div
  id="customizeModal"

  class="
    fixed
    inset-0
    z-[200]

    hidden

    items-center
    justify-center

    p-5
    md:p-8
  "
>

  <!-- Overlay -->

  <div
    id="customizeOverlay"

    class="
      absolute
      inset-0

      bg-black/70
      backdrop-blur-[3px]

      opacity-0

      transition-opacity
      duration-500
    "
  ></div>

  <!-- Modal -->

  <div

    id="customizePanel"

    class="
      relative
      z-10

      w-full
      max-w-4xl

      overflow-hidden

      rounded-lg

      bg-white

      shadow-[0_40px_120px_rgba(0,0,0,0.35)]

      opacity-0
      scale-95

      transition-all
      duration-500
    "

  >

    <!-- Close -->

    <button

      id="closeCustomizeModal"

      type="button"

      aria-label="Close"

      class="
        absolute
        right-6
        top-6

        flex
        h-11
        w-11

        items-center
        justify-center

        rounded-full

        bg-[#F5F5F5]

        text-[28px]
        leading-none

        text-[#555]

        transition-all
        duration-300

        hover:bg-[#A07936]
        hover:text-white
      "

    >
      ×
    </button>

    <!-- Header -->

    <div
      class="
        border-b
        border-[#ECECEC]

        px-8
        py-2

        md:px-14
      "
    >



      <h2
        class="
          mt-1

          text-center

          font-serif

          text-4xl

          leading-tight

          text-[#181818]

          md:text-[58px]
        "
      >
        Design Your Dream Piece
      </h2>



      <p
        class="
          mx-auto
          mt-2.5

          max-w-2xl

          text-center

          text-[15px]
          leading-8

          text-[#666]
        "
      >
        Share your vision, and our master craftsmen will create a bespoke sterling silver piece made exclusively for you.
      </p>

    </div>

    <!-- Body -->

    <div
      class="
        max-h-[65vh]

        overflow-y-auto

        px-8
        py-4

        md:px-14
      "
    >

      ${createCustomizeJewelleryForm()}

    </div>

  </div>

</div>
`;
}
