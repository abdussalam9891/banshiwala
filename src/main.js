import { initNavbar } from "./features/navbar/index.js";
import { initRevealAnimations } from "./features/animations/reveal.js";

import { initCustomizeJewellery } from "./features/customizeJewellery/index.js";

import { initHomePage } from "./pages/homePage.js";
import { loadProductsPage } from "./pages/productsPage.js";
import { loadFAQPage } from "./pages/faqPage.js";

import { loadLoginPage } from "./pages/loginPage.js";
import { loadRegisterPage } from "./pages/registerPage.js";
import { loadForgotPasswordPage } from "./pages/forgotPasswordPage.js";

import {
  createFooter,
  initFooterAccordion,
} from "./components/footer/index.js";

import { initToast }
from "./features/toast/index.js";

import { initAuthModal } from "./features/auth/index.js";
import {
    initGuestEngagement
} from "./features/auth/index.js";

document.addEventListener("DOMContentLoaded", () => {
  // Navbar
  initNavbar();

initToast();

initAuthModal();
initGuestEngagement();

  // Pages
  initHomePage();
  loadProductsPage();
  loadFAQPage();

  loadLoginPage();
  loadRegisterPage();
  loadForgotPasswordPage();

  // Homepage only
  initCustomizeJewellery();

  // Global
  initRevealAnimations();

  // Footer
  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();
    initFooterAccordion();
  }
});
