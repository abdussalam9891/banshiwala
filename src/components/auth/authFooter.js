import { icon } from "../../utils/icon.js";

export function createAuthFooter() {
  return `
<footer
  class="
    mt-10

    border-t
    border-[#E8E8E8]

    pt-8
  "
>

  <!-- Links -->

  <nav
    class="
      flex
      flex-wrap

      items-center
      justify-center

      gap-7
    "
  >

    <a
      href="/pages/privacy-policy.html"

      class="
        group

        text-[13px]

        tracking-[0.08em]

        text-[#777]

        transition-all
        duration-300

        hover:text-[#A07936]
      "
    >
      Privacy
    </a>

    <a
      href="/pages/terms-and-conditions.html"

      class="
        text-[13px]

        tracking-[0.08em]

        text-[#777]

        transition-all
        duration-300

        hover:text-[#A07936]
      "
    >
      Terms
    </a>

    <a
      href="/pages/contact.html"

      class="
        text-[13px]

        tracking-[0.08em]

        text-[#777]

        transition-all
        duration-300

        hover:text-[#A07936]
      "
    >
      Contact
    </a>

    <a
      href="/pages/faq.html"

      class="
        text-[13px]

        tracking-[0.08em]

        text-[#777]

        transition-all
        duration-300

        hover:text-[#A07936]
      "
    >
      FAQ
    </a>

  </nav>



  <!-- Bottom -->

  <div
    class="
      mt-7

      flex
      flex-col

      items-center

      gap-3
    "
  >



    <p
      class="
        text-[12px]

        tracking-[0.08em]

        text-[#888]
      "
    >
      © 2026 Banshiwala. All Rights Reserved.
    </p>

  </div>

</footer>
`;
}
