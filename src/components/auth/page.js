import { createAuthLayout } from "./authLayout.js";
import { createLoginForm } from "./loginForm.js";

export function createLoginPage() {
  return createAuthLayout({
     

    title: "Sign In",


    form: createLoginForm(),
  });
}
