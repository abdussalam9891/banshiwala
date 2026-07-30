import { SHOWCASE_TABS } from "../../constants/showcaseProducts.js";

export function createShowcaseSection() {
  return `
<section
  class="
    reveal

    py-20
    lg:py-28

    bg-white
  "
>

 <div
  class="
    max-w-[1600px]

    mx-auto

    px-4
    sm:px-6
    lg:px-8
    xl:px-10
  "
>

    <!-- Heading -->

    <div
      class="
        flex
        flex-col

        items-center

        text-center
      "
    >




      <h2
        class="
          mt-4

          font-serif

          text-4xl
          lg:text-5xl

          text-[#1A1A1A]

          leading-tight
        "
      >
        Our Showcase
      </h2>

      <p
        class="
          mt-5

          max-w-2xl

          text-[#6B6B6B]

          leading-8
        "
      >
        Handpicked sterling silver pieces crafted for everyday wear,
        timeless style and effortless confidence.
      </p>

    </div>

    <!-- Tabs -->

    <div
      id="showcaseTabs"

      class="
        mt-14

        flex
        justify-center

        gap-3
        lg:gap-5

        flex-wrap
      "
    >

      ${SHOWCASE_TABS.map(
        (tab, index) => `
<button

data-tab="${tab.id}"

class="
showcase-tab

px-6
lg:px-7

py-3

rounded-full

border

transition-all
duration-300

${
  index === 0
    ? "bg-[#111111] text-white border-[#111111]"
    : "bg-white text-[#444] border-[#E5E5E5] hover:border-[#A07936] hover:text-[#111]"
}

"

>

${tab.label}

</button>
`
      ).join("")}

    </div>

    <!-- Products -->

 <div class="relative mt-14">

  <!-- Left Arrow -->

  <button
    id="showcasePrev"

    class="
      hidden
      lg:flex

      absolute

      left-0
      top-1/2

      -translate-x-1/2
      -translate-y-1/2

      z-20

      h-12
      w-12

      items-center
      justify-center

      rounded-full

      bg-white

      shadow-xl

      border
      border-gray-200

      transition-all
      duration-300

      hover:bg-[#111]
      hover:text-white

      disabled:opacity-40
      disabled:pointer-events-none
    "
  >

    ←

  </button>

  <!-- Right Arrow -->

  <button
    id="showcaseNext"

    class="
      hidden
      lg:flex

      absolute

      right-0
      top-1/2

      translate-x-1/2
      -translate-y-1/2

      z-20

      h-12
      w-12

      items-center
      justify-center

      rounded-full

      bg-white

      shadow-xl

      border
      border-gray-200

      transition-all
      duration-300

      hover:bg-[#111]
      hover:text-white

      disabled:opacity-40
      disabled:pointer-events-none
    "
  >

    →

  </button>

  <!-- Products -->

<div
  id="showcaseProducts"

  class="
    flex

    gap-5
    lg:gap-7
    xl:gap-8

    overflow-x-auto

    scroll-smooth

    snap-x
    snap-mandatory

    pt-5
pb-4

    no-scrollbar

    transition-opacity
    duration-200

    cursor-grab

    active:cursor-grabbing
  "
>
</div>

  </div>

</div>



  </div>

</section>
`;
}
