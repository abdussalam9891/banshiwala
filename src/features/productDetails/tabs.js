export function initProductTabs() {

  const buttons =
    document.querySelectorAll(".product-tab");

  buttons.forEach((button) => {

    button.addEventListener("click", () => {

      const wrapper =
        button.parentElement;

      const content =
        wrapper.querySelector(".tab-content");

      const icon =
        wrapper.querySelector(".tab-icon");

      const isOpen =
        content.classList.contains("max-h-[600px]");

      document
        .querySelectorAll(".tab-content")
        .forEach((item) => {

          item.classList.remove("max-h-[600px]", "pb-8");

          item.classList.add("max-h-0");

        });

      document
        .querySelectorAll(".tab-icon")
        .forEach((item) => {

          item.setAttribute(
            "data-lucide",
            "plus"
          );

        });

      if (!isOpen) {

        content.classList.remove("max-h-0");

        content.classList.add(
          "max-h-[600px]",
          "pb-8"
        );

        icon.setAttribute(
          "data-lucide",
          "minus"
        );

      }

      window.lucide?.createIcons();

    });

  });

}
