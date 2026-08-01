export function initHomeAccordion() {
  const items = document.querySelectorAll("#homeFaq .faq-item");

  items.forEach((item) => {
    const button = item.querySelector(".faq-toggle");
    const content = item.querySelector(".faq-content");
    const icon = item.querySelector(".faq-icon");

    button.addEventListener("click", () => {
      const isOpen = !content.classList.contains("hidden");

      items.forEach((faq) => {
        faq.querySelector(".faq-content").classList.add("hidden");
        faq.querySelector(".faq-icon").classList.remove("rotate-45");
        faq.classList.remove(
          "border-[#A07936]",
          "shadow-xl"
        );
      });

      if (isOpen) return;

      content.classList.remove("hidden");

      icon.classList.add("rotate-45");

      item.classList.add(
        "border-[#A07936]",
        "shadow-xl"
      );
    });
  });
}
