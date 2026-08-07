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

    p-0
    sm:p-5
    lg:p-8
  "
>

  <!-- Overlay -->

  <div
    id="customizeOverlay"

    class="
      absolute
      inset-0

      bg-black/70
      backdrop-blur-[5px]

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

      flex
      flex-col

      w-full
      max-w-5xl

      max-h-[100dvh]
      sm:max-h-[92vh]

      overflow-hidden

      rounded-none
      sm:rounded-[28px]

      border
      border-[#ECE3D6]

      bg-[#FCFAF7]

      shadow-[0_40px_120px_rgba(0,0,0,.28)]

      opacity-0
      scale-[0.96]

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

        right-5
        top-5

        z-30

        flex

        h-10
        w-10

        items-center
        justify-center

        rounded-full

        border
        border-[#E6DDD0]

        bg-white

        text-[#555555]

        shadow-sm

        transition-all
        duration-300

        hover:border-[#A07936]
        hover:bg-[#181818]
        hover:text-white
      "
    >

      <i
        data-lucide="x"
        class="h-5 w-5"
      ></i>

    </button>

    <!-- Header -->

    <div
      class="
        relative

        overflow-hidden

        border-b
        border-[#ECE3D6]

        bg-gradient-to-b
        from-[#FDFBF8]
        to-[#FCFAF7]

        px-6
        py-8

        sm:px-10
        sm:py-10

        lg:px-16
        lg:py-12
      "
    >


      <!-- Heading -->

      <h2
        class="
          mt-2
          mb-2

          text-center

          font-serif
          italic

          text-[34px]
          sm:text-[46px]
          lg:text-[60px]

          leading-tight

          tracking-[-0.03em]

          text-[#181818]
        "
      >
        Design Your Piece
      </h2>



    </div>

    <!-- Form Area -->

    <div
      class="
        flex-1

        overflow-y-auto

        px-6
        py-8

        sm:px-10

        lg:px-16
      "
    >

      ${createCustomizeJewelleryForm()}

    </div>

  </div>

</div>
`;
}
