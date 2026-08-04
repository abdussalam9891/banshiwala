// import { initNavbar } from "./features/navbar/index.js";
// import { initRevealAnimations } from "./features/animations/reveal.js";

// import { initCustomizeJewellery } from "./features/customizeJewellery/index.js";

// import { initHomePage } from "./pages/homePage.js";
// import { loadProductsPage } from "./pages/productsPage.js";
// import { loadFAQPage } from "./pages/faqPage.js";

// import { loadLoginPage } from "./pages/loginPage.js";
// import { loadRegisterPage } from "./pages/registerPage.js";
// import { loadForgotPasswordPage } from "./pages/forgotPasswordPage.js";

// import {
//   createFooter,
//   initFooterAccordion,
// } from "./components/footer/index.js";

// import { initToast }
// from "./features/toast/index.js";

// import { initAuthModal } from "./features/auth/index.js";
// import {
//     initGuestEngagement
// } from "./features/auth/index.js";

// document.addEventListener("DOMContentLoaded", () => {
//   // Navbar
//   initNavbar();

// initToast();

// initAuthModal();
// initGuestEngagement();

//   // Pages
//   initHomePage();
//   loadProductsPage();
//   loadFAQPage();

//   loadLoginPage();
//   loadRegisterPage();
//   loadForgotPasswordPage();

//   // Homepage only
//   initCustomizeJewellery();

//   // Global
//   initRevealAnimations();

//   // Footer
//   const footer = document.getElementById("footer");

//   if (footer) {
//     footer.innerHTML = createFooter();
//     initFooterAccordion();
//   }
// });












import { initNavbar } from "./features/navbar/index.js";
import { initRevealAnimations } from "./features/animations/reveal.js";

import {
  createFooter,
  initFooterAccordion,
} from "./components/footer/index.js";

import { initToast } from "./features/toast/index.js";
import { initAuthModal, initGuestEngagement } from "./features/auth/index.js";

document.addEventListener("DOMContentLoaded", async () => {
  // Global — needed on every page, keep these static
  initNavbar();
  initToast();
  initAuthModal();
  initGuestEngagement();

  // Page-specific — only fetch the code the current page actually needs
  if (document.getElementById("homeFaq")) {
    const { initHomePage } = await import("./pages/homePage.js");
    initHomePage();

    const { initCustomizeJewellery } = await import(
      "./features/customizeJewellery/index.js"
    );
    initCustomizeJewellery();
  }

  if (document.getElementById("productsHero")) {
    const { loadProductsPage } = await import("./pages/productsPage.js");
    loadProductsPage();
  }

  if (document.getElementById("faqContainer")) {
    const { loadFAQPage } = await import("./pages/faqPage.js");
    loadFAQPage();
  }

  if (document.getElementById("loginContainer")) {
    const { loadLoginPage } = await import("./pages/loginPage.js");
    loadLoginPage();
  }

  if (document.getElementById("registerContainer")) {
    const { loadRegisterPage } = await import("./pages/registerPage.js");
    loadRegisterPage();
  }

  if (document.getElementById("forgotPasswordContainer")) {
    const { loadForgotPasswordPage } = await import(
      "./pages/forgotPasswordPage.js"
    );
    loadForgotPasswordPage();
  }

  // Global — runs after page content is injected, so it can find .reveal elements
  initRevealAnimations();

  // Footer
  const footer = document.getElementById("footer");

  if (footer) {
    footer.innerHTML = createFooter();
    initFooterAccordion();
  }
});
