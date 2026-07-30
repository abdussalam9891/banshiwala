export function createFaqCard(faq) {
  return `
    <div
      class="reveal faq-item overflow-hidden rounded-3xl border border-[#E8E2DA] bg-white transition-all duration-300 hover:shadow-lg"
      data-category="${faq.category}"
    >

      <button
        class="faq-toggle flex w-full items-center justify-between px-8 py-7 text-left"
      >

        <div>



          <h3
            class="text-xl font-medium text-[#181818]"
          >
            ${faq.question}
          </h3>

        </div>

        <svg
          class="faq-icon h-6 w-6 text-[#A07936] transition-transform duration-300"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="1.8"
            d="M12 5v14m7-7H5"
          />
        </svg>

      </button>

      <div
        class="faq-content hidden border-t border-[#ECE7E1] px-8 py-6"
      >

        <p class="leading-8 text-[#666]">
          ${faq.answer}
        </p>

      </div>

    </div>
  `;
}
