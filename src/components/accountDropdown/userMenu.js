export function createUserMenu(user) {
  return `
<div class="p-7">

  <div class="flex items-center gap-4">

    <div
      class="
        flex
        h-14
        w-14
        items-center
        justify-center
        rounded-full
        bg-[#A07936]
        text-lg
        font-semibold
        text-white
      "
    >
      ${user.name.charAt(0).toUpperCase()}
    </div>

    <div>
      <p class="text-xs uppercase tracking-[0.25em] text-[#A07936]">
        Welcome Back
      </p>

      <h3 class="mt-1 font-serif text-2xl text-[#181818]">
        ${user.name}
      </h3>
    </div>

  </div>

  <div class="mt-8 border-t border-[#ECECEC] pt-6">

    <a href="/pages/profile.html" class="block py-3 hover:text-[#A07936]">
      My Profile
    </a>

    <a href="/pages/orders.html" class="block py-3 hover:text-[#A07936]">
      Orders
    </a>

    <a href="/pages/wishlist.html" class="block py-3 hover:text-[#A07936]">
      Wishlist
    </a>

    <a href="/pages/custom-requests.html" class="block py-3 hover:text-[#A07936]">
      Custom Jewellery Requests
    </a>

  </div>

  <button
    id="logoutBtn"

    class="
      mt-8
      w-full
      rounded-full
      border
      border-[#181818]
      py-3
      transition
      hover:bg-[#181818]
      hover:text-white
    "
  >
    Sign Out
  </button>

</div>
`;
}
