export function createRelatedProductsSection() {

  return `

<section
  class="
    bg-white

    py-14
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

    <!-- Heading -->

    <div class="text-center">



      <h2
        class="
          mt-2

          font-serif

          text-[42px]
          lg:text-[56px]

          italic

          text-[#181818]
        "
      >
        You May Also Like
      </h2>

      <p
        class="
          mx-auto

          mt-2

          max-w-2xl

          text-[#666]

          leading-8
        "
      >
        Discover more handcrafted sterling silver jewellery
        selected to complement your style.
      </p>

    </div>

    <!-- Products -->

    <div

      id="relatedProducts"

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
    >

    </div>

  </div>

</section>

`;

}
