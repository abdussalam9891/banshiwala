import { getProductsQuery } from "./query.js";
import { productsState } from "./state.js";

const HERO_CONTENT = {
  rings: {
    label: "Banshiwala Collection",
    title: "Sterling Silver Rings",
    description:
      "Discover handcrafted sterling silver rings designed for timeless elegance and everyday confidence.",
  },

  chains: {
    label: "Banshiwala Collection",
    title: "Sterling Silver Chains",
    description:
      "Premium silver chains crafted with precision for modern men who appreciate understated luxury.",
  },

  bracelets: {
    label: "Banshiwala Collection",
    title: "Sterling Silver Bracelets",
    description:
      "Bold, refined and handcrafted bracelets that complete every look with effortless sophistication.",
  },

  pendants: {
    label: "Banshiwala Collection",
    title: "Sterling Silver Pendants",
    description:
      "Meaningful pendants inspired by craftsmanship, heritage and modern elegance.",
  },

  earrings: {
    label: "Banshiwala Collection",
    title: "Sterling Silver Earrings",
    description:
      "Minimal sterling silver earrings designed to elevate your everyday style.",
  },

  new: {
    label: "Latest Collection",
    title: "New Arrivals",
    description:
      "Explore the newest handcrafted jewellery pieces added to the Banshiwala collection.",
  },

  bestseller: {
    label: "Customer Favorites",
    title: "Best Sellers",
    description:
      "Discover our most loved sterling silver jewellery chosen by thousands of customers.",
  },

  collection: {
    label: "Banshiwala",
    title: "Our Collection",
    description:
      "Explore handcrafted sterling silver jewellery created with timeless craftsmanship and contemporary design.",
  },
};

function getHeroData() {
  const query = getProductsQuery();

  if (query.category.length) {
    return (
      HERO_CONTENT[query.category[0].toLowerCase()] ||
      HERO_CONTENT.collection
    );
  }

  if (query.badge.length) {
    const badge = query.badge[0].toLowerCase();

    if (badge === "new") {
      return HERO_CONTENT.new;
    }

    if (badge === "bestseller") {
      return HERO_CONTENT.bestseller;
    }
  }

  return HERO_CONTENT.collection;
}

export function createProductsHero() {
  const hero = getHeroData();

  return `
<section
class="
relative
overflow-hidden

border-b
border-[#ECE6DF]

bg-[#FCFAF7]
"
>

<div
class="
absolute

right-[-120px]
top-[-120px]

h-[420px]
w-[420px]

rounded-full

bg-[#A07936]/[0.05]

blur-3xl
"
></div>

<div
class="
relative

mx-auto
max-w-[1600px]

px-4
sm:px-6
lg:px-8
xl:px-10

py-20
lg:py-28
"
>

<nav
class="
flex
items-center

gap-2
mt-8

text-xs

uppercase

tracking-[0.25em]

text-[#8A8A8A]
"
>

<a
href="/index.html"

class="
transition

hover:text-[#181818]
"
>

Home

</a>

<span>/</span>

<span class="text-[#181818]">

${hero.title}

</span>

</nav>

<div class="mt-10 max-w-3xl">



<h1
class="
mt-5

font-serif

text-5xl
sm:text-6xl
lg:text-7xl

leading-none

tracking-[-0.04em]

text-[#181818]
"
>

${hero.title}

</h1>



<p
class="
mt-8

max-w-2xl

text-[17px]

leading-9

text-[#666666]
"
>

${hero.description}

</p>

 

</div>

</div>

</section>
`;
}

export function renderProductsHero() {
  const container =
    document.getElementById("productsHero");

  if (!container) return;

  container.innerHTML = createProductsHero();
}

export function updateHeroCount() {
  const count = document.getElementById("productsCount");

  if (!count) return;

  count.textContent = productsState.filteredProducts.length;
}
