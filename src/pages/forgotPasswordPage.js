import {
  createForgotPasswordPage,
} from "../components/auth/index.js";

import {
  initForgotPassword,
} from "../features/auth/authPage.js";

export function loadForgotPasswordPage() {
  const container = document.getElementById(
    "forgotPasswordContainer"
  );

  if (!container) return;

  container.innerHTML =
    createForgotPasswordPage();

  window.lucide?.createIcons();

  initForgotPassword();
}
