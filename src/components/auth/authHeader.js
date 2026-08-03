export function createAuthHeader() {
  return `
<header
  id="authHeader"
  class="
    fixed
    inset-x-0
    top-0
    z-50

    border-b
    border-transparent

    bg-white/40

    backdrop-blur-xl

    transition-all
    duration-500
  "
>

  <div
    class="
      mx-auto

      flex
      h-[72px]

      max-w-[1650px]

      items-center
      justify-between

      px-6
      lg:px-12
    "
  >

    <!-- Logo -->

    <a
      href="/index.html"

      class="
        group

        flex
        items-center

        gap-4
      "
    >

      <div
        class="
          transition-transform
          duration-500

          group-hover:scale-105
        "
      >

        <svg
          width="44"
          height="44"
          viewBox="0 0 128 128"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >

          <circle
            cx="64"
            cy="64"
            r="54"
            stroke="#A07936"
            stroke-width="2"
          />

          <path
            d="M64 28
            C74 40 74 53 64 61
            C54 53 54 40 64 28Z"
            fill="#A07936"
          />

          <path
            d="M42 49
            C53 49 59 57 60 67
            C49 67 41 60 42 49Z"
            fill="#A07936"
          />

          <path
            d="M86 49
            C75 49 69 57 68 67
            C79 67 87 60 86 49Z"
            fill="#A07936"
          />

          <path
            d="M64 92
            C54 82 54 70 64 63
            C74 70 74 82 64 92Z"
            fill="#A07936"
          />

          <circle
            cx="64"
            cy="64"
            r="8"
            fill="#181818"
          />

        </svg>

      </div>

      <div>

        <h2
          class="
            font-serif

            text-[34px]

            leading-none

            tracking-[0.18em]

            text-[#181818]

            transition-colors
            duration-300

            group-hover:text-[#A07936]
          "
        >
          BANSHIWALA
        </h2>

        <p
          class="
            mt-1

            text-[10px]

            uppercase

            tracking-[0.42em]

            text-[#A07936]
          "
        >
          Sterling Silver
        </p>

      </div>

    </a>

    <!-- Back Button -->

    <a
      href="/index.html"

      class="
        group

        relative

        inline-flex
        items-center

        gap-3

        overflow-hidden

        rounded-full

        border
        border-[#DDD]

        bg-white/90

        px-6
        py-3

        text-[14px]
        font-medium

        tracking-[0.08em]

        text-[#181818]

        shadow-sm

        transition-all
        duration-500

        hover:-translate-y-0.5
        hover:border-[#A07936]
        hover:shadow-[0_12px_30px_rgba(160,121,54,.15)]
      "

    >

      <span
        class="
          absolute
          inset-0

          scale-x-0
          origin-left

          bg-[#A07936]

          transition-transform
          duration-500

          group-hover:scale-x-100
        "
      ></span>

      <svg
        xmlns="http://www.w3.org/2000/svg"

        class="
          relative
          z-10

          h-4
          w-4

          transition-all
          duration-300

          group-hover:-translate-x-1
          group-hover:text-white
        "

        fill="none"
        viewBox="0 0 24 24"

        stroke="currentColor"
        stroke-width="2"
      >

        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15 18l-6-6 6-6"
        />

      </svg>

      <span
        class="
          relative
          z-10

          transition-colors
          duration-300

          group-hover:text-white
        "
      >
        Continue Shopping
      </span>

    </a>

  </div>

</header>
`;
}
