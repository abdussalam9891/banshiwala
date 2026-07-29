 export function createNewsletter() {
  return `
<section class="border-b border-white/10 bg-[#1C1C1C]">

  <div
    class="
      mx-auto
      max-w-7xl

      px-4
      py-8

      sm:px-6
      sm:py-10

      lg:flex
      lg:items-center
      lg:justify-between
      lg:gap-12
      lg:px-8
      lg:py-14
    "
  >

    <!-- Left -->

    <div
      class="
        mb-6

        text-center

        lg:mb-0
        lg:max-w-lg
        lg:text-left
      "
    >

      <h2
        class="
          font-serif

          text-[1.9rem]
          text-white

          sm:text-[2.2rem]
          lg:text-4xl
        "
      >
        Stay Updated
      </h2>

      <p
        class="
          mx-auto
          mt-3

          max-w-sm

          text-sm
          leading-7

          text-white/60

          lg:mx-0
          lg:max-w-none
        "
      >
        New collections, exclusive drops & member-only offers.
      </p>

    </div>

    <!-- Right -->

    <form
      id="newsletterForm"
      class="
        mx-auto
        w-full
        max-w-xl

        lg:mx-0
      "
    >

      <div
        class="
          flex

          overflow-hidden

          rounded-sm

          border
          border-white/15
        "
      >

        <input
          id="newsletterEmail"
          type="email"
          placeholder="Enter your email"

          class="
            h-12

            flex-1

            bg-[#252525]

            px-4

            text-[15px]
            text-white

            placeholder:text-white/40

            outline-none

            lg:h-14
            lg:px-5
          "
        />

        <button
          type="submit"

          class="
            flex-shrink-0

            h-12

            bg-[#A07936]

            px-5

            text-[11px]
            font-medium

            uppercase

            tracking-[0.16em]

            text-black

            transition-colors
            duration-300

            hover:bg-[#B88B45]

            lg:h-14
            lg:px-8
            lg:text-sm
          "
        >
          Subscribe
        </button>

      </div>

    </form>

  </div>

</section>
`;
}
