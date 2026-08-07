export function initPasswordToggle() {
  const buttons =
    document.querySelectorAll(".password-toggle");

  if (!buttons.length) return;

  buttons.forEach((button) => {
    button.addEventListener("click", () => {

      const wrapper =
        button.closest(".relative");

      if (!wrapper) return;

      const input =
        wrapper.querySelector(".password-input");

      if (!input) return;

      const icon =
        button.querySelector("i");

      const isHidden =
        input.type === "password";

      input.type =
        isHidden ? "text" : "password";

      if (icon) {
        icon.setAttribute(
          "data-lucide",
          isHidden ? "eye-off" : "eye"
        );

        window.lucide?.createIcons();
      }

    });
  });
}
