import { showToast } from "../../utils/toast.js";


export function initLoginValidation() {
  const form =
    document.getElementById("loginForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email =
      form.email.value.trim();

    const password =
      form.password.value.trim();

    if (!email || !password) {
      showToast({
  type: "error",
  title: "Missing Information",
  message: "Please fill all fields.",
});
      return;
    }

    console.log({
      email,
      password,
    });

    // login api later
  });
}

export function initRegisterValidation() {
  const form =
    document.getElementById("registerForm");

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name =
      form.name.value.trim();

    const email =
      form.email.value.trim();

    const password =
      form.password.value.trim();

    const confirmPassword =
      form.confirmPassword.value.trim();

    if (
      !name ||
      !email ||
      !password ||
      !confirmPassword
    ) {
      showToast({
  type: "error",
  title: "Missing Information",
  message: "Please fill all fields.",
});
      return;
    }

    if (password !== confirmPassword) {
     showToast({
  type: "error",
  title: "Password Mismatch",
  message:
    "Passwords do not match.",
});
      return;
    }

    console.log({
      name,
      email,
      password,
    });

    // register api later
  });
}

export function initForgotPasswordValidation() {
  const form =
    document.getElementById(
      "forgotPasswordForm"
    );

  if (!form) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const email =
      form.email.value.trim();

    if (!email) {
     showToast({
  type: "warning",
  title: "Email Required",
  message:
    "Please enter your email address.",
});
      return;
    }

    console.log({
      email,
    });

    // forgot password api later
  });
}
