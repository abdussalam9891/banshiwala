export function createGuestMenu() {
  return `
<div
  class="
    p-7
  "
>

  <!-- Icon -->

  <div
    class="
      flex
      h-14
      w-14

      items-center
      justify-center

      rounded-full

      bg-[#F7F7F7]

      text-[#A07936]
    "
  >

    <i
      data-lucide="user"
      class="h-6 w-6"
    ></i>

  </div>

  <!-- Heading -->

  <h3
    class="
      mt-6

      font-serif

      text-[30px]

      text-[#181818]
    "
  >
    Welcome
  </h3>

  <p
    class="
      mt-3

      text-[15px]
      leading-7

      text-[#6B6B6B]
    "
  >
    Sign in to access your wishlist,
    orders and custom jewellery requests.
  </p>

  <!-- Buttons -->

  <div
    class="
      mt-8

      space-y-3
    "
  >

    <a
      href="/pages/login.html"

      class="
        flex
        items-center
        justify-center

        rounded-full

        bg-[#181818]

        py-3

        text-sm
        font-medium
        uppercase
        tracking-[0.25em]

        text-white

        transition

        hover:bg-[#A07936]
      "
    >
      Sign In
    </a>

    <a
      href="/pages/register.html"

      class="
        flex
        items-center
        justify-center

        py-3

        text-sm
        font-medium

        text-[#181818]

        transition

        hover:text-[#A07936]
      "
    >
      Create Account →
    </a>

  </div>

</div>
`;
}
