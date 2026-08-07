export function createRecentlyViewedSection() {

  return `

<section
  class="
    bg-[#FCFBF9]

    py-8
    lg:py-14
  "
>

  <div
    class="
      mx-auto

      max-w-[1600px]

      px-5
      lg:px-8
      xl:px-10
    "
  >

    <div class="text-center">

      <p
        class="
          text-[13px]

          uppercase

          tracking-[0.30em]

          text-[#A07936]
        "
      >
        Continue Exploring
      </p>

      <h2
        class="
          mt-4

          font-serif

          text-[42px]
          lg:text-[56px]

          italic

          text-[#181818]
        "
      >
        Recently Viewed
      </h2>

    </div>

    <div

      id="recentlyViewedProducts"

      class="
        mt-16

        flex

        gap-8

        overflow-x-auto

        scroll-smooth

        snap-x
        snap-mandatory

        no-scrollbar
      "
    ></div>

  </div>

</section>

`;

}
