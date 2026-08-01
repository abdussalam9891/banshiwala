import { productsState } from "./state.js";
import { renderProductsGrid } from "./grid.js";
import { updateProductsURL } from "./query.js";

export function createProductsToolbar() {
  return `
<section class="border-b border-[#F1ECE6] bg-white">

<div
class="
mx-auto
max-w-[1600px]

px-4
sm:px-6
lg:px-8
xl:px-10

py-6
"
>

<div
class="
flex
flex-col

gap-5

lg:flex-row
lg:items-center
lg:justify-between
"
>

<!-- Left -->

<div
class="
inline-flex
items-center
gap-3

self-start

rounded-full



 

px-5
py-2.5
"
>



<p
class="
text-sm

text-[#666]
"
>

Showing

<strong
id="toolbarProductsCount"
class="
mx-1

font-semibold

text-[#181818]
"
>

${productsState.filteredProducts.length}

</strong>

Products

</p>

</div>

<!-- Right -->

<div
class="
flex
flex-col

gap-3

sm:flex-row
sm:items-center
"
>

<!-- Mobile Filter -->

<button

id="mobileFilterButton"

class="
inline-flex
lg:hidden

items-center
justify-center

gap-2

h-11

rounded-full

border
border-[#E7DDD3]

bg-white

px-5

text-sm

transition-all

hover:border-[#A07936]
hover:text-[#A07936]
"
>

<svg
class="h-4 w-4"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>

<path
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="1.8"
d="M4 6h16M7 12h10M10 18h4"
/>

</svg>

Filters

</button>

<div
class="
flex
items-center

gap-3
"
>

<span
class="
hidden
sm:block

text-sm

text-[#777]
"
>

Sort by

</span>

<select

id="productsSort"

class="
h-11

min-w-[220px]

rounded-full

border
border-[#E7DDD3]

bg-white

px-5

text-[15px]

text-[#181818]

outline-none

transition-all

focus:border-[#A07936]
"
>

<option value="featured">Featured</option>

<option value="price-low">Price: Low to High</option>

<option value="price-high">Price: High to Low</option>

<option value="rating">Highest Rated</option>

<option value="newest">Newest</option>

</select>

</div>

</div>

</div>

</div>

</section>
`;
}

export function renderProductsToolbar() {
  const container =
    document.getElementById("productsToolbar");

  if (!container) return;

  // Render only once
  if (!container.innerHTML.trim()) {
    container.innerHTML = createProductsToolbar();

    initToolbarEvents();
  }

  // Update product count
  const count = document.getElementById(
    "toolbarProductsCount"
  );

  if (count) {
    count.textContent =
      productsState.filteredProducts.length;
  }

  // Restore selected sort
  const sort =
    document.getElementById("productsSort");

  if (sort) {
    sort.value = productsState.sort;
  }
}

export function initToolbarEvents() {
  const sort =
    document.getElementById("productsSort");

  if (sort) {
    sort.addEventListener("change", (e) => {

      productsState.sort = e.target.value;

      productsState.page = 1;

      updateProductsURL();

      renderProductsGrid();

    });
  }

  document
    .getElementById("mobileFilterButton")
    ?.addEventListener("click", () => {

      document
        .getElementById("mobileFiltersDrawer")
        ?.classList.remove("translate-x-full");

      document
        .getElementById("mobileFiltersOverlay")
        ?.classList.remove("hidden");

    });
}
