import { SHOWCASE_TABS } from "../../constants/showcaseProducts.js";

export function createShowcaseSection() {
  return `
<section
  class="
    reveal
    reveal-up

    py-14
    lg:py-18

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



    </div>

    <!-- Tabs -->

    <div
      id="showcaseTabs"

      class="
        mt-8

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

rounded-2xl

border

transition-all
duration-300

${
  index === 0
    ? "bg-[#111111] text-white border-[#111111] hover:border-[#A07936]"
    : "bg-white text-[#444] border-[#E5E5E5] hover:border-[#A07936]  "
}

"

>

${tab.label}

</button>
`
      ).join("")}

    </div>

    <!-- Products -->

 <div class="relative mt-6">





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


  "
>
</div>

  </div>

</div>




</section>
`;
}
