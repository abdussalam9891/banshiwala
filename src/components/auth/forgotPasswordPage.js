import { createAuthLayout } from "./authLayout.js";
import { createForgotPasswordForm } from "./forgotPasswordForm.js";

export function createForgotPasswordPage() {
  return createAuthLayout({



    title: "Forgot Password",

     

    form: createForgotPasswordForm(),

  });
}
