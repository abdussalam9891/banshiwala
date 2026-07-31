export function createTestimonialSpotlight() {
  return `
<section
  id="testimonials"
  class="
    relative

    reveal

    overflow-hidden

    bg-[#111111]

    py-20
    lg:py-28
  "
>

  <!-- decorative oversized quote mark -->
  <span
    aria-hidden="true"
    class="
      pointer-events-none
      select-none

      absolute
      -top-6
      left-1/2

      -translate-x-1/2

      font-serif

      text-[220px]
      lg:text-[320px]

      leading-none

      text-white/[0.04]
    "
  >
    &ldquo;
  </span>

  <div class="relative mx-auto max-w-3xl px-5 text-center">

    <p
      class="
        text-xs

        font-medium

        uppercase

        tracking-[0.3em]

        text-[#A07936]
      "
    >
      Client Stories
    </p>

    <h2
      class="
        mt-4

        font-serif

        text-4xl
        lg:text-5xl

        text-white
      "
    >
      What Our Clients Say
    </h2>

    <!-- Stage: JS stacks one .testimonial-slide per testimonial here -->
    <div
      id="testimonialStage"
      class="
        relative

        mt-14
        lg:mt-16
      "
    ></div>

    <!-- Switcher: JS injects avatar buttons w/ progress rings -->
    <div
      id="testimonialSwitcher"
      class="
        mt-10
        lg:mt-12

        flex

        items-center
        justify-center

        gap-4
        sm:gap-5

        overflow-x-auto

        no-scrollbar
      "
    ></div>

  </div>

</section>
`;
}
