export function initPasswordToggle() {
  const button =
    document.getElementById("togglePassword");

  const password =
    document.getElementById("password");

  if (!button || !password) return;

  button.addEventListener("click", () => {
    const isHidden =
      password.type === "password";

    password.type =
      isHidden ? "text" : "password";

    const icon =
      button.querySelector("i");

    if (!icon) return;

    icon.setAttribute(
      "data-lucide",
      isHidden ? "eye-off" : "eye"
    );

    window.lucide?.createIcons();
  });
}
