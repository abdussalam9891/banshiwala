import { createRegisterPage } from "../components/auth/index.js";

import { initRegister } from "../features/auth/authPage.js";

export function loadRegisterPage() {
  const container =
    document.getElementById("registerContainer");

  if (!container) return;

  container.innerHTML =
    createRegisterPage();

    window.lucide?.createIcons();

  initRegister();
}
