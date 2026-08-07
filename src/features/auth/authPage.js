import { initPasswordToggle } from "./passwordToggle.js";
import { initAuthTextSlider } from "./authTextSlider.js";

import {
  initLoginValidation,
  initRegisterValidation,
  initForgotPasswordValidation,
} from "./validation.js";

export function initLogin() {
  initPasswordToggle();
  initLoginValidation();
  initAuthTextSlider();
}

export function initRegister() {
  initPasswordToggle();
  initRegisterValidation();
  initAuthTextSlider();
}

export function initForgotPassword() {
  initForgotPasswordValidation();
}
