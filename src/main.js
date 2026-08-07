import { initNavbar } from "./features/navbar/index.js";
import { initRevealAnimations } from "./features/animations/reveal.js";

import {
  createFooter,
  initFooterAccordion,
} from "./components/footer/index.js";

import { initToast } from "./features/toast/index.js";
import {
  initAuthModal,
  initGuestEngagement,
} from "./features/auth/index.js";

document.addEventListener("DOMContentLoaded", async () => {
  /* =========================================
     Global
  ========================================= */

  initNavbar();
  initToast();
  initAuthModal();
  initGuestEngagement();

  /* =========================================
     Home
  ========================================= */

  if (document.getElementById("homeFaq")) {
    const { initHomePage } = await import(
      "./pages/homePage.js"
    );

    initHomePage();

    const { initCustomizeJewellery } = await import(
      "./features/customizeJewellery/index.js"
    );

    initCustomizeJewellery();
  }

  /* =========================================
     Products
  ========================================= */

  if (document.getElementById("productsHero")) {
    const { loadProductsPage } = await import(
      "./pages/productsPage.js"
    );

    loadProductsPage();
  }

  /* =========================================
     Product Details
  ========================================= */

  if (document.getElementById("productDetails")) {
    const { loadProductDetailsPage } = await import(
      "./pages/productDetailsPage.js"
    );

    loadProductDetailsPage();
  }

  /* =========================================
     FAQ
  ========================================= */

  if (document.getElementById("faqContainer")) {
    const { loadFAQPage } = await import(
      "./pages/faqPage.js"
    );

    loadFAQPage();
  }

  /* =========================================
     Login
  ========================================= */

  if (document.getElementById("loginContainer")) {
    const { loadLoginPage } = await import(
      "./pages/loginPage.js"
    );

    loadLoginPage();
  }

  /* =========================================
     Register
  ========================================= */

  if (document.getElementById("registerContainer")) {
    const { loadRegisterPage } = await import(
      "./pages/registerPage.js"
    );

    loadRegisterPage();
  }

  /* =========================================
     Forgot Password
  ========================================= */

  if (document.getElementById("forgotPasswordContainer")) {
    const { loadForgotPasswordPage } = await import(
      "./pages/forgotPasswordPage.js"
    );

    loadForgotPasswordPage();
  }

  /* =========================================
     Global UI
  ========================================= */

  initRevealAnimations();

  /* =========================================
     Footer
  ========================================= */

  const footer =
    document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();

    initFooterAccordion();
  }
});
