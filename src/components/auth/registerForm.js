import { createSocialLogin } from "./socialLogin.js";

export function createRegisterForm() {
  return `
<form
  id="registerForm"

  class="
    space-y-7
  "
>

  <!-- Name -->

  <div>

    <label
      for="name"

      class="
        mb-3
        block

        text-sm
        font-medium

        text-[#181818]
      "
    >
      Full Name
    </label>

    <input
      id="name"
      name="name"

      type="text"

      placeholder="Aryan"

      autocomplete="name"

      class="
        w-full

        rounded-2xl

        border
        border-[#E7E7E7]

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

    <label
      for="password"

      class="
        mb-3
        block

        text-sm
        font-medium

        text-[#181818]
      "
    >
      Password
    </label>

    <div class="relative">

      <input
        id="password"
        name="password"

        type="password"

        autocomplete="new-password"

        placeholder="Create a password"

        class="
          w-full

          rounded-2xl

          border
          border-[#E7E7E7]

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

  <!-- Confirm Password -->

  <div>

    <label
      for="confirmPassword"

      class="
        mb-3
        block

        text-sm
        font-medium

        text-[#181818]
      "
    >
      Confirm Password
    </label>

    <input

      id="confirmPassword"
      name="confirmPassword"

      type="password"

      autocomplete="new-password"

      placeholder="Confirm your password"

      class="
        w-full

        rounded-2xl

        border
        border-[#E7E7E7]

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

  <!-- Terms -->

  <label
    class="
      flex
      items-start
      gap-3

      text-sm

      text-[#666]
    "
  >

    <input

      type="checkbox"

      class="
        mt-1

        h-4
        w-4

        accent-[#A07936]
      "
    >

    I agree to the
    <a
      href="/pages/terms.html"

      class="
        text-[#A07936]
        hover:underline
      "
    >
      Terms
    </a>

    &
    <a
      href="/pages/privacy.html"

      class="
        text-[#A07936]
        hover:underline
      "
    >
      Privacy Policy
    </a>

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
      Create Account
    </span>

  </button>

  ${createSocialLogin()}

  <p
    class="
      pt-2

      text-center

      text-[15px]

      text-[#666]
    "
  >

    Already have an account?

    <a
      href="/pages/login.html"

      class="
        font-medium

        text-[#A07936]

        hover:underline
      "
    >
      Sign In
    </a>

  </p>

</form>
`;
}
