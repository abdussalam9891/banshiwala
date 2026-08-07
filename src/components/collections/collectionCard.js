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
      reveal

      overflow-hidden

      rounded-xl
      lg:rounded-2xl

      border
      border-[#ECE5D8]

      transition-all
      duration-500

      hover:-translate-y-2
      hover:border-[#C8A35A]
      hover:shadow-[0_22px_55px_rgba(0,0,0,0.08)]
    "
  >

    <!-- Image -->

    <div
      class="
        flex

        aspect-square
        lg:aspect-[1/1.02]

        items-center
        justify-center

        p-3
        sm:p-4
        lg:p-8
      "
    >

      <img
        src="${collection.image}"
        alt="${collection.title}"

        loading="lazy"
        decoding="async"

        class="
          max-h-[78%]
          max-w-[78%]

          lg:max-h-full
          lg:max-w-full

          object-contain
          object-center

          -translate-y-1
          lg:translate-y-0

          transition-all
          duration-700

          group-hover:scale-105
          lg:group-hover:scale-110

          group-hover:-translate-y-2
        "
      />

    </div>

  </div>

  <!-- Content -->

  <div
    class="
      pt-4
      lg:pt-8

      text-center
    "
  >

    <div
      class="
        mx-auto

        mb-3
        lg:mb-5

        h-px

        w-10
        lg:w-12

        bg-[#C8A35A]

        transition-all
        duration-300

        group-hover:w-20
      "
    ></div>

    <h3
      class="
        font-serif

        text-[22px]
        sm:text-[26px]
        lg:text-[36px]

        italic

        leading-tight

        text-[#181818]

        transition-colors
        duration-300

        group-hover:text-[#A07936]
      "
    >
      ${collection.title}
    </h3>

    <div
      class="
        mt-3
        lg:mt-5

        inline-flex

        items-center

        gap-1.5
        lg:gap-2

        text-[11px]
        sm:text-[12px]

        font-medium

        uppercase

        tracking-[0.16em]
        lg:tracking-[0.28em]

        text-[#A07936]

        transition-colors
        duration-300

        group-hover:text-[#181818]
      "
    >

      ${collection.subtitle}

      <i
        data-lucide="arrow-up-right"
        class="
          h-3
          w-3

          lg:h-4
          lg:w-4

          transition-transform
          duration-300

          group-hover:translate-x-1
          group-hover:-translate-y-1
        "
      ></i>

    </div>

  </div>

</a>
`;
}
