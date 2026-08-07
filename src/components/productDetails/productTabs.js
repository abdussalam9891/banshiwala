const TABS = [
  {
    title: "Description",

    content: (product) => `
<p
  class="
    leading-8

    text-[#666]
  "
>
  ${
    product.description ||
    "Crafted from premium 925 sterling silver, this jewellery piece blends timeless elegance with everyday comfort. Every design is carefully handcrafted by skilled artisans, making each piece unique."
  }
</p>
`,
  },

  {
    title: "Specifications",

    content: (product) => `
<div class="space-y-4">

${[
  ["Material", product.material || "925 Sterling Silver"],
  ["Finish", product.finish || "High Polish"],
  ["Category", product.category || "Jewellery"],
  ["Weight", product.weight || "Approx. 8g"],
  ["Hallmark", "925 Certified"],
]
  .map(
    ([key, value]) => `

<div
class="
flex

justify-between

border-b
border-[#F2ECE3]

pb-3
"
>

<span
class="
text-[#777]
"
>

${key}

</span>

<span
class="
font-medium

text-[#181818]
"
>

${value}

</span>

</div>

`
  )
  .join("")}

</div>
`,
  },

  {
    title: "Jewellery Care",

    content: () => `
<ul
class="
space-y-3

text-[#666]
"
>

<li>• Store in a dry place after every use.</li>

<li>• Keep away from perfumes and harsh chemicals.</li>

<li>• Clean gently using a soft polishing cloth.</li>

<li>• Remove before swimming or showering.</li>

<li>• Store separately to avoid scratches.</li>

</ul>
`,
  },

  {
    title: "Shipping & Returns",

    content: () => `
<ul
class="
space-y-3

text-[#666]
"
>

<li>• Free shipping across India.</li>

<li>• Orders dispatched within 24–48 hours.</li>

<li>• Secure packaging for every order.</li>

<li>• Easy return on eligible products.</li>

<li>• Dedicated WhatsApp support.</li>

</ul>
`,
  },
];

export function createProductTabs(product) {
  return `

<div
class="
mt-20

border-t
border-[#ECE5D8]
"
>

${TABS.map(
  (tab, index) => `
<div
class="
border-b
border-[#ECE5D8]
"
>

<button

type="button"

class="
product-tab

flex

w-full

items-center
justify-between

py-6

text-left
"

data-index="${index}"

>

<span
class="
font-serif

text-[28px]

italic

text-[#181818]
"
>

${tab.title}

</span>

<i

data-lucide="${
    index === 0
      ? "minus"
      : "plus"
  }"

class="
tab-icon

h-5
w-5

text-[#A07936]

transition-transform
duration-300
"

></i>

</button>

<div

class="
tab-content

overflow-hidden

transition-all
duration-500

${
  index === 0
    ? "max-h-[600px] pb-8"
    : "max-h-0"
}
"

>

${tab.content(product)}

</div>

</div>

`
).join("")}

</div>

`;
}
