const ICONS = {
  diamond: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.7"
      class="h-7 w-7 text-[#181818] transition-all duration-500 group-hover:scale-110 group-hover:text-white"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M7 3h10l4 5-9 13L3 8l4-5z"
      />
    </svg>
  `,

  truck: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.7"
      class="h-7 w-7 text-[#181818] transition-all duration-500 group-hover:scale-110 group-hover:text-white"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M3 7h12v8H3z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M15 10h3l3 3v2h-6z"/>
      <circle cx="7" cy="18" r="1.5"/>
      <circle cx="18" cy="18" r="1.5"/>
    </svg>
  `,

  shield: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.7"
      class="h-7 w-7 text-[#181818] transition-all duration-500 group-hover:scale-110 group-hover:text-white"
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
      class="h-7 w-7 text-[#181818] transition-all duration-500 group-hover:scale-110 group-hover:text-white"
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
      class="h-7 w-7 text-[#181818] transition-all duration-500 group-hover:scale-110 group-hover:text-white"
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
      class="h-7 w-7 text-[#181818] transition-all duration-500 group-hover:scale-110 group-hover:text-white"
    >
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 12a8 8 0 1116 0v5"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 17h3v3H4zm13 0h3v3h-3z"/>
    </svg>
  `,
};

export function createFeatureCard(feature) {
  return `
    <div
      class="group rounded-3xl border border-[#E8E2DA] bg-white/70 p-8 backdrop-blur-sm transition-all duration-500 hover:-translate-y-2 hover:border-[#A07936] hover:shadow-[0_25px_60px_rgba(0,0,0,.08)]"
    >

      <div
        class="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#F8F5F2] transition-all duration-500 group-hover:bg-[#A07936]"
      >
        ${ICONS[feature.icon]}
      </div>

      <h3 class="font-serif text-2xl text-[#181818]">
        ${feature.title}
      </h3>

      <p class="mt-4 leading-7 text-[#6B6B6B]">
        ${feature.description}
      </p>

    </div>
  `;
}
