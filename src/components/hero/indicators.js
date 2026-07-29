import { HERO_SLIDES } from "../../constants/heroSlides.js";

export function createHeroIndicators() {
  return `
    <div
      class="
        absolute
        bottom-10
        left-1/2
        z-40

        flex
        -translate-x-1/2
        items-center
        gap-3

        md:bottom-12
      "
    >

      ${HERO_SLIDES.map(
        (_, index) => `
          <button
            type="button"

            class="
              hero-indicator

              group

              relative

              h-[3px]
              w-12

              overflow-hidden

              rounded-full

              bg-white/25

              transition-all
              duration-300

              hover:w-16
            "

            data-indicator="${index}"

            aria-label="Go to slide ${index + 1}"
          >

            <span
              class="
                hero-indicator-progress

                absolute
                left-0
                top-0

                h-full
                w-full

                origin-left

                scale-x-0

                bg-primary
              "
            ></span>

          </button>
        `
      ).join("")}

    </div>
  `;
}
