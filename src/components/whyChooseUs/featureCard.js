const ICONS = {
  // Hallmark stamp — references the actual 925 purity mark used on real silver, not a generic checkmark-shield
  shield: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.3"
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
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 2.5l7.5 3v6.2c0 5-3.2 8.7-7.5 10.3-4.3-1.6-7.5-5.3-7.5-10.3V5.5l7.5-3z"/>
      <text x="12" y="13.5" text-anchor="middle" font-size="6.5" font-family="serif" fill="currentColor" stroke="none">925</text>
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 16.5h6"/>
    </svg>
  `,

  // Return — a folded gift-wrap corner easing back into a box, reads as "returns" without the generic recycle-arrow cliché
  return: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.3"
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
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 9l8-4 8 4-8 4-8-4z"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 9v7l8 4 8-4V9"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M12 13v7"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M8 14.5a2.4 2.4 0 002.4-2.4"/>
    </svg>
  `,

  // Gift — a jewelry box with a ring nested inside, not a generic wrapped-present
  gift: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.3"
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
      <rect x="4" y="9" width="16" height="11" rx="1.2"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M4 13h16"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M9 6.5a3 1.6 0 016 0"/>
      <circle cx="12" cy="16.3" r="2.1"/>
    </svg>
  `,

  // Support — a polishing cloth over a piece, ties to jewelry care/service rather than a call-center headset
  support: `
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="1.3"
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
      <circle cx="12" cy="9" r="4"/>
      <path stroke-linecap="round" stroke-linejoin="round" d="M6 20c0-3.3 2.7-5.5 6-5.5s6 2.2 6 5.5"/>
      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.6" d="M10 8.5l1.3 1.3L14 7"/>
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

          border
          border-[#EDEDED]

          transition-all
          duration-500

          group-hover:-translate-y-1
          group-hover:scale-110
          group-hover:border-[#A07936]
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
