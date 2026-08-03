export function createForgotPasswordForm() {
  return `
<form
  id="forgotPasswordForm"

  class="
    space-y-8
  "
>

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

      placeholder="Abc@example.com"

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
      Send Reset Link
    </span>

  </button>

  <p
    class="
      text-center

      text-[15px]

      text-[#666]
    "
  >

    Remember your password?

    <a

      href="/pages/login.html"

      class="
        font-medium

        text-[#A07936]

        hover:underline
      "
    >
      Back to Sign In
    </a>

  </p>

</form>
`;
}
