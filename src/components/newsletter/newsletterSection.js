export function createNewsletterSection() {
  return `
<section class="bg-white py-8 lg:py-14">



    <div
      class="
        rounded-lg




        bg-white

        px-5


        sm:px-8


        lg:px-5



      "
    >

      <!-- Heading -->

      <div class="mx-auto max-w-xl text-center">



        <h2
          class="
            mt-2

            text-3xl
            sm:text-4xl
            lg:text-5xl

            font-semibold

            tracking-[-0.03em]

            leading-[1.1]

            text-[#181818]
          "
        >
          Join the Inner Circle
        </h2>

        <p
          class="
            mx-auto

            mt-6

            max-w-xl

            text-[15px]
            sm:text-base

            leading-7

            text-[#666666]
          "
        >
          Be the first to discover new collections, limited releases,
          exclusive offers, and the stories behind every handcrafted piece.
        </p>

      </div>

      <!-- Form -->

      <form
        id="newsletterForm"
        class="mx-auto mt-10 max-w-xl"
      >

        <div
          class="
            flex
            flex-col

            gap-3

            sm:flex-row
          "
        >

       <input
  id="newsletterEmail"
  type="email"
  placeholder="Enter your email address"
  required
  class="
    w-full

    px-6
    py-4

    rounded-md

    border
    border-[#D8D2C9]

    bg-white

    text-[16px]
    leading-none
    text-[#181818]

    placeholder:text-[#999]

    outline-none

    transition-all
    duration-300

    focus:border-[#A07936]
  "
/>
         <button
  type="submit"
  class="
    group

    relative

    flex
    items-center
    justify-center

    h-12
    sm:h-14

    w-full
    sm:w-auto

    overflow-hidden

    rounded-md

    bg-[#181818]

    px-8
    sm:px-10

    text-sm
    font-medium

    uppercase

    tracking-[0.18em]

    text-white
  "
>
  <span
    class="
      absolute
      inset-0

      origin-left
      scale-x-0

      bg-[#A07936]

      transition-transform
      duration-700
      ease-[cubic-bezier(0.22,1,0.36,1)]

      group-hover:scale-x-100
    "
  ></span>

  <span
    class="
      relative
      z-10

      flex
      items-center
      justify-center

      h-full
    "
  >
    Subscribe
  </span>
</button>

        </div>



        <p
          id="newsletterMessage"
          class="
            mt-4

            hidden

            text-center

            text-sm

            text-[#666666]
          "
        ></p>

      </form>

    </div>



</section>
`;
}
