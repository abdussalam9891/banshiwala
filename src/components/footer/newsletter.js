export function createNewsletter() {
  return `
<section class="border-b border-white/10 bg-[#1C1C1C]">
  <div
    class="
      mx-auto
      flex
      max-w-7xl
      flex-col
      items-center
      justify-between
      gap-8
      px-6
      py-14
      lg:flex-row
      lg:px-8
    "
  >

    <!-- Left -->

    <div class="max-w-lg text-center lg:text-left">

      <h2
        class="
          text-3xl
          font-serif
          text-white
          lg:text-4xl
        "
      >
        Stay Updated
      </h2>

      <p
        class="
          mt-3
          text-sm
          text-white/60
        "
      >
        New collections, exclusive drops & member-only offers.
      </p>

    </div>

    <!-- Right -->

    <form
      id="newsletterForm"
      class="
        flex
        w-full
        max-w-xl
        flex-col
        gap-3
        sm:flex-row
      "
    >

      <input
        id="newsletterEmail"
        type="email"
        required
        autocomplete="email"
        placeholder="Enter your email"
        class="
          h-14
          flex-1
          rounded-full
          border
          border-white/15
          bg-transparent
          px-6
          text-white
          placeholder:text-white/40
          outline-none
          transition-all
          duration-300
          focus:border-[#A07936]
        "
      />

      <button
        type="submit"
        class="
          h-14
          rounded-full
          border
          border-[#A07936]
          bg-transparent
          px-8
          text-sm
          font-medium
          uppercase
          tracking-[0.18em]
          text-[#A07936]
          transition-all
          duration-300
          hover:bg-[#A07936]
          hover:text-black
        "
      >
        Subscribe
      </button>

    </form>

  </div>
</section>
`;
}
