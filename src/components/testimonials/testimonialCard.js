export function createTestimonialCard(testimonial) {
  const stars = Array.from({ length: testimonial.rating })
    .map(
      () => `
        <svg
          class="h-4 w-4 fill-[#A07936]"
          viewBox="0 0 20 20"
        >
          <path d="M9.049.927c.3-.921 1.603-.921 1.902 0l1.24 3.818a1 1 0 0 0 .95.69h4.014c.969 0 1.371 1.24.588 1.81l-3.247 2.36a1 1 0 0 0-.364 1.118l1.24 3.817c.3.922-.755 1.688-1.54 1.118l-3.247-2.359a1 1 0 0 0-1.176 0L6.162 15.66c-.784.57-1.838-.196-1.539-1.118l1.24-3.817a1 1 0 0 0-.364-1.118L2.252 7.245c-.783-.57-.38-1.81.588-1.81h4.014a1 1 0 0 0 .951-.69L9.05.927Z"/>
        </svg>
      `
    )
    .join("");

  return `

<article
  class="
    group

    flex
    flex-col

    h-full

    rounded-2xl

    bg-[#F8F6F3]

    p-8

    transition-all
    duration-500

    hover:-translate-y-2
    hover:shadow-[0_20px_50px_rgba(0,0,0,.08)]
  "
>

  <!-- Stars -->

  <div
    class="
      flex
      items-center
      gap-1
    "
  >
    ${stars}
  </div>

  <!-- Quote -->

  





  <!-- Review -->

  <p
  class="
    mt-5

    min-h-[120px]
lg:min-h-[140px]

    leading-8

    text-[#666]
  "
>
  ${testimonial.review}
</p>

  <!-- Customer -->

  <div
  class="
    mt-auto

    pt-6

    flex
    items-center
    gap-4
  "
>

  <img
    src="${testimonial.image}"
    alt="${testimonial.name}"

    class="
      h-14
      w-14

      rounded-full

      object-cover

      bg-[#ECE8E2]
    "
  />

  <div>

    <h4
      class="
        text-lg

        font-medium

        text-[#181818]
      "
    >
      ${testimonial.name}
    </h4>

    <p
      class="
        mt-1

        text-sm

        uppercase

        tracking-[0.16em]

        text-[#A07936]
      "
    >
      ${testimonial.designation}
    </p>

  </div>

</div>

</article>

`;
}
