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

  <form id="newsletterForm" class="w-full max-w-lg">
  <div class="flex overflow-hidden border border-white/15">
    <input
      id="newsletterEmail"
      type="email"
      placeholder="Enter your email"
      class="h-14 flex-1 bg-[#252525] px-5 text-white placeholder:text-white/40 outline-none"
    />

    <button
      type="submit"
      class="bg-[#A07936] px-8 text-sm font-medium uppercase tracking-[0.12em] text-black transition hover:bg-[#B88B45]"
    >
      Subscribe
    </button>
  </div>
</form>

</div>
</section>
`;
}
