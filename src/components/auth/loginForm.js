import { createSocialLogin } from "./socialLogin.js";

export function createLoginForm() {
  return `
<form
  id="loginForm"

  class="
    space-y-7
  "
>

  <!-- Email -->

  <div>

    <label
      for="email"

      class="
        mb-3
        block

        text-sm
        font-medium

        text-[#181818]
      "
    >
      Email Address
    </label>

    <input
      id="email"
      name="email"

      type="email"

      placeholder="abc@example.com"

      autocomplete="email"

      class="
        w-full

        rounded-2xl

        border
        border-[#E7E7E7]

        bg-white

        px-5
        py-4

        text-[15px]

        outline-none

        transition-all
        duration-300

        focus:border-[#A07936]
        focus:ring-4
        focus:ring-[#A07936]/10
      "
    >

  </div>

  <!-- Password -->

  <div>

    <div
      class="
        mb-3

        flex
        items-center
        justify-between
      "
    >

      <label
        for="password"

        class="
          text-sm
          font-medium

          text-[#181818]
        "
      >
        Password
      </label>

      <a
        href="/pages/forgotPassword.html"

        class="
          text-sm

          text-[#A07936]

          transition

          hover:underline
        "
      >
        Forgot Password?
      </a>

    </div>

    <div class="relative">

      <input

        id="password"
        name="password"

        type="password"

        placeholder="Enter your password"

        autocomplete="current-password"

        class="
          w-full

          rounded-2xl

          border
          border-[#E7E7E7]

          bg-white

          px-5
          py-4
          pr-14

          text-[15px]

          outline-none

          transition-all
          duration-300

          focus:border-[#A07936]
          focus:ring-4
          focus:ring-[#A07936]/10
        "
      >

      <!-- Password Toggle -->

      <button

        id="togglePassword"

        type="button"

        class="
          absolute
          right-5
          top-1/2

          -translate-y-1/2

          text-[#888]

          transition

          hover:text-[#A07936]
        "
      >

        <i
          data-lucide="eye"
          class="h-5 w-5"
        ></i>

      </button>

    </div>

  </div>

  <!-- Remember -->

  <label
    class="
      flex
      items-center
      gap-3

      text-sm

      text-[#666]
    "
  >

    <input
      type="checkbox"

      class="
        h-4
        w-4

        accent-[#A07936]
      "
    >

    Remember Me

  </label>

  <!-- Button -->

  <button

    type="submit"

    class="
      group

      relative

      flex
      w-full
      items-center
      justify-center

      overflow-hidden

      rounded-2xl

      bg-[#181818]

      py-4

      text-sm
      font-medium

      uppercase

      tracking-[0.28em]

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
        duration-500

        group-hover:scale-x-100
      "
    ></span>

    <span
      class="
        relative
        z-10
      "
    >
      Sign In
    </span>

  </button>

  ${createSocialLogin()}

  <!-- Register -->

  <p
    class="
      pt-2

      text-center

      text-[15px]

      text-[#666]
    "
  >

    New to Banshiwala?

    <a

      href="/pages/register.html"

      class="
        font-medium

        text-[#A07936]

        transition

        hover:underline
      "
    >
      Create an Account
    </a>

  </p>

</form>
`;
}
