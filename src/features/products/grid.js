import { PRODUCTS } from "../../constants/products.js";
import { createShowcaseCard } from "../../components/showcase/showcaseCard.js";

import { productsState } from "./state.js";
import { filterProducts } from "./filters.js";
import { renderProductsToolbar } from "./toolbar.js";

import { updateHeroCount } from "./hero.js";

export function getProducts() {
  return [...PRODUCTS];
}

function sortProducts(products) {
  switch (productsState.sort) {
    case "price-low":
      return [...products].sort((a, b) => a.price - b.price);

    case "price-high":
      return [...products].sort((a, b) => b.price - a.price);

    case "rating":
      return [...products].sort((a, b) => b.rating - a.rating);

    case "newest":
      return [...products].sort((a, b) => b.id - a.id);

    case "featured":
    default:
      return products;
  }
}

function paginateProducts(products) {
  const start =
    (productsState.page - 1) * productsState.limit;

  const end = start + productsState.limit;

  return products.slice(start, end);
}

function createEmptyState() {
  return `
<section
class="
py-24

flex
flex-col
items-center
justify-center

text-center
"
>

<div
class="
h-20
w-20

rounded-full

bg-[#FAF8F5]

flex
items-center
justify-center
"
>

<svg
class="h-10 w-10 text-[#A07936]"
fill="none"
stroke="currentColor"
viewBox="0 0 24 24"
>

<path
stroke-linecap="round"
stroke-linejoin="round"
stroke-width="1.5"
d="M20 13V7a2 2 0 00-2-2H6a2 2 0 00-2 2v6m16 0v4a2 2 0 01-2 2H6a2 2 0 01-2-2v-4m16 0H4"
/>

</svg>

</div>

<h2
class="
mt-8

font-serif

text-4xl

text-[#181818]
"
>

No Products Found

</h2>

<p
class="
mt-4

max-w-md

text-[#666]
leading-7
"
>

Try adjusting your filters or browse another collection.

</p>

</section>
`;
}

export function renderProductsGrid() {
  const container =
    document.getElementById("productsGrid");

  if (!container) return;

  // 1. Start with all products
  let products = getProducts();

  // 2. Apply filters
  products = filterProducts(products);

  // 3. Apply sorting
  products = sortProducts(products);

  // 4. Save filtered products
  productsState.filteredProducts = [...products];

  // 5. Update toolbar
  renderProductsToolbar();

  // 6. Empty State
  if (!products.length) {
    container.innerHTML = createEmptyState();
    return;
  }

  // 7. Pagination
  const visibleProducts =
    paginateProducts(products);

  // 8. Render Cards
  container.innerHTML = `
<div

class="
grid

grid-cols-2

gap-x-5
gap-y-10

md:grid-cols-3

xl:grid-cols-4

2xl:grid-cols-4
"

>

${visibleProducts
  .map((product) =>
    createShowcaseCard(product, false)
  )
  .join("")}

</div>
`;

  // 9. Update Hero Count
 updateHeroCount();
}
