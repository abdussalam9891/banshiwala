export function createNewsletter() {
  return `
<form id="newsletterForm">

  <div
    class="
      flex
      overflow-hidden
      rounded-sm
      border
      border-white/15
    "
  >

    <input
      id="newsletterEmail"
      type="email"
      placeholder="Enter your email"
      class="
        h-12
        flex-1
        bg-[#252525]
        px-4
        text-sm
        text-white
        placeholder:text-white/40
        outline-none
      "
    />

    <button
      type="submit"
      class="
        bg-[#A07936]
        px-5
        text-[11px]
        font-medium
        uppercase
        tracking-[0.15em]
        text-black
        transition
        hover:bg-[#B88B45]
      "
    >
      Subscribe
    </button>

  </div>

</form>
`;
}
