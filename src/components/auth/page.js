import { createAuthLayout } from "./authLayout.js";
import { createLoginForm } from "./loginForm.js";

export function createLoginPage() {
  return createAuthLayout({
    title: "Sign In",

    description:
      "Welcome back. Sign in to access your account, wishlist and orders.",

    form: createLoginForm(),
  });
}
