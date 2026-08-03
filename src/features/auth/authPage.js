import { initPasswordToggle } from "./passwordToggle.js";

import {
  initLoginValidation,
  initRegisterValidation,
  initForgotPasswordValidation,
} from "./validation.js";

export function initLogin() {
  initPasswordToggle();
  initLoginValidation();
}

export function initRegister() {
  initPasswordToggle();
  initRegisterValidation();
}

export function initForgotPassword() {
  initForgotPasswordValidation();
}
