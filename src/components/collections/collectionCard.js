export function createCollectionCard(collection) {
  return `
<a
  href="${collection.url}"
  class="
    group
    block
  "
>

  <div
    class="
      overflow-hidden
      rounded-sm

      reveal




      transition-all
      duration-500

      hover:shadow-[0_12px_28px_rgba(0,0,0,.06)]
    "
  >

    <div
      class="
        flex
        h-[260px]
        items-center
        justify-center

        p-2
        lg:h-[320px]
        lg:p-4
      "
    >

      <img
        src="${collection.image}"
        alt="${collection.title}"
        loading="lazy"

        class="
          h-full
          w-full

          object-contain
          object-center

          transition-transform
          duration-700

          group-hover:scale-105
        "
      />

    </div>

  </div>

  <div class="pt-6 text-center">

    <h3
      class="
        font-serif

        text-2xl
        lg:text-[2rem]

        tracking-wide

        text-[#181818]
      "
    >
      ${collection.title}
    </h3>

    <p
      class="
        mt-3

        text-[12px]

        uppercase

        tracking-[0.28em]

        text-[#A07936]

        transition-colors
        duration-300

        group-hover:text-[#181818]
      "
    >
      ${collection.subtitle}
    </p>

  </div>

</a>
`;
}
