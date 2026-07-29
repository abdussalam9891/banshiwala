import { NAVIGATION } from "../../constants/navigation.js";

export function createSearchOverlay() {
  const popularSearches = NAVIGATION.map(
    (item) => `
      <button
        type="button"
        class="
          popular-search-btn
          rounded-full
          border
          border-white/10
          px-4
          py-2
          text-sm
          text-white
          transition-all
          duration-300
          hover:border-[#A07936]
          hover:text-[#A07936]
          hover:bg-white/5
        "
        data-category="${item.slug}"
        data-href="${item.href}"
      >
        ${item.label}
      </button>
    `
  ).join("");

  return `
<div
  id="searchOverlay"
  class="fixed inset-0 z-[1000] hidden"
>

  <!-- Backdrop -->

  <div
    id="searchBackdrop"
    class="
      absolute
      inset-0
      bg-black/70
      backdrop-blur-md
      opacity-0
      transition-opacity
      duration-300
    "
  ></div>

  <!-- Modal -->

  <div
    id="searchModal"
    class="
      absolute
      left-1/2
      top-24

      w-[92%]
      max-w-2xl

      -translate-x-1/2
      -translate-y-4

      rounded-3xl

      border
      border-white/10

      bg-[#181818]

      shadow-2xl

      opacity-0
      scale-95

      transition-all
      duration-300
    "
  >

    <!-- Header -->

    <div
      class="
        flex
        items-center
        justify-between

        border-b
        border-white/10

        px-6
        py-5
      "
    >

      <h2
        class="
          text-lg
          font-semibold
          uppercase
          tracking-[0.15em]
          text-white
        "
      >
        Search Jewellery
      </h2>

      <button
        id="closeSearchBtn"
        type="button"
        aria-label="Close Search"
        class="
          flex
          h-10
          w-10
          items-center
          justify-center
          rounded-full
          transition
          hover:bg-white/5
          hover:text-[#A07936]
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M6 6l12 12M18 6L6 18"
          />
        </svg>

      </button>

    </div>

    <!-- Search Box -->

    <div class="p-6">

      <div
        class="
          flex
          items-center
          gap-4

          rounded-2xl
          border
          border-white/10

          px-5
          py-4

          transition
          focus-within:border-[#A07936]
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-5 w-5 text-white/50"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.8"
        >
          <circle cx="11" cy="11" r="7" />
          <path
            d="M20 20L16.65 16.65"
            stroke-linecap="round"
          />
        </svg>

        <input
          id="searchInput"
          type="search"
          placeholder="Search chains, rings, bracelets..."
          autocomplete="off"
          class="
            w-full
            bg-transparent
            text-white
            placeholder:text-white/40
            outline-none
          "
        />

      </div>

    </div>

    <!-- Popular Searches -->

    <div class="px-6">

      <h3
        class="
          mb-4
          text-xs
          uppercase
          tracking-[0.2em]
          text-white/40
        "
      >
        Popular Searches
      </h3>

      <div
        class="
          flex
          flex-wrap
          gap-3
        "
      >
        ${popularSearches}
      </div>

    </div>

    <!-- Search Results -->

    <div
      id="searchResults"
      class="
        mt-8
        border-t
        border-white/10
        p-6
      "
    >

      <div
        id="searchEmptyState"
        class="
          py-10
          text-center
        "
      >

        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="mx-auto mb-4 h-10 w-10 text-white/30"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="1.6"
        >
          <circle cx="11" cy="11" r="7"/>
          <path
            d="M20 20L16.65 16.65"
            stroke-linecap="round"
          />
        </svg>

        <h4
          class="
            mb-2
            text-lg
            font-medium
            text-white
          "
        >
          Start typing to search
        </h4>

        <p class="text-sm text-white/50">
          Search by product name, category or collection.
        </p>

      </div>

    </div>

  </div>

</div>
`;
}
