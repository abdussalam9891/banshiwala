export function createCraftsmanshipSection() {
  return `
<section
  class="
    reveal

    bg-white

    py-16
    lg:py-24
  "
>

  <div
    class="
      mx-auto

      max-w-7xl

      px-4
      lg:px-6
    "
  >

    <div
      class="
        grid

        items-center

        gap-10
        lg:gap-16

        lg:grid-cols-2
      "
    >

      <!-- Image -->

     <div
  class="
    group
    relative
    overflow-hidden
    rounded-3xl
    reveal
    reveal-left

    h-[350px]
    md:h-[450px]
    lg:h-[550px]
  "
>

      <img
  src="/src/assets/images/hero5.jpg"
  alt="Banshiwala Sterling Silver"

  class="
    w-full
    h-full

    object-cover

    transition-transform
    duration-700

    group-hover:scale-105
  "
/>

        <!-- Overlay -->

        <div
          class="
            absolute
            inset-0

            bg-gradient-to-t
            from-black/20
            via-transparent
            to-transparent
          "
        ></div>

      </div>

      <!-- Content -->

      <div class="reveal reveal-right">



        <h2
          class="
            mt-5

            font-serif

            text-4xl
            leading-tight

            text-[#181818]

            lg:text-6xl
          "
        >
          Sterling Silver,
          <br />
          Crafted To Last.
        </h2>

        <p
          class="
            mt-8

            max-w-xl

            text-lg

            leading-8

            text-[#666]
          "
        >
          Every Banshiwala piece is handcrafted from certified 925 sterling
          silver, combining timeless craftsmanship with modern design.
          Built for everyday confidence and made to stay with you for years.
        </p>

       <a
  href="/pages/about.html"
  class="
    inline-flex
    items-center
    gap-3

    font-medium

    tracking-[0.12em]

    uppercase

    text-[#181818]

    transition-all
    duration-300

    hover:gap-5
  "
>
    Discover More

    <span
      class="
        h-px
        w-10

        bg-[#A07936]

        transition-all
        duration-300

        group-hover:w-14
      "
    ></span>
</a>
      </div>

    </div>

  </div>

</section>
`;
}
