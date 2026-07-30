const ICONS = {



  shield: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.7"
      class="
h-9
w-9
text-[#181818]
transition-all
duration-500
group-hover:scale-110
group-hover:text-[#A07936]

lg:h-10
lg:w-10
"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 3l8 4v6c0 5-3.5 9-8 11-4.5-2-8-6-8-11V7l8-4z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M9.5 12l2 2 3.5-4"/>
    </svg>
  `,

  return: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.7"
      class="
h-9
w-9
text-[#181818]
transition-all
duration-500
group-hover:scale-110
group-hover:text-[#A07936]

lg:h-10
lg:w-10
"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 7H5v4"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M5 11a7 7 0 101.8-4.7"/>
    </svg>
  `,

  gift: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.7"
      class="
h-9
w-9
text-[#181818]
transition-all
duration-500
group-hover:scale-110
group-hover:text-[#A07936]

lg:h-10
lg:w-10
"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M20 12v8H4v-8"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M2 7h20v5H2z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 7v13"/>
    </svg>
  `,

  support: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.7"
      class="
h-9
w-9
text-[#181818]
transition-all
duration-500
group-hover:scale-110
group-hover:text-[#A07936]

lg:h-10
lg:w-10
"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 1116 0v5"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 17h3v3H4zm13 0h3v3h-3z"/>
    </svg>
  `,
};

export function createFeatureCard(feature) {
  return `
    <div
      class="
        group
        flex
        flex-col
        items-center
        justify-center
        text-center

        py-6
        px-2



        transition-all
        duration-700
        ease-out

        reveal
        reveal-left
      "
    >

      <div
        class="
          flex
          h-16
w-16

lg:h-20
lg:w-20
          items-center
          justify-center

          rounded-full

          transition-all
          duration-500

          group-hover:-translate-y-1
          group-hover:scale-110
        "
      >
        ${ICONS[feature.icon]}
      </div>

      <h3
        class="
          mt-5
          font-serif
          text-lg
          tracking-wide
          text-[#181818]

          lg:text-xl
        "
      >
        ${feature.title}
      </h3>

    </div>
  `;
}
