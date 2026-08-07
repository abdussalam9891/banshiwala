import { showToast } from "../../utils/toast.js";

export function initCustomizeJewelleryValidation() {
  const form = document.getElementById("customJewelleryForm");

  if (!form) return;

  if (form.dataset.initialized) return;

  form.dataset.initialized = "true";

  /* ----------------------------------------
     Live Input Validation
  ---------------------------------------- */

  // Name → Only letters & spaces

  form.name.addEventListener("input", () => {
    form.name.value = form.name.value.replace(
      /[^a-zA-Z\s]/g,
      ""
    );
  });

  // Phone → Only numbers (10 digits)

  form.phone.addEventListener("input", () => {
    form.phone.value = form.phone.value
      .replace(/\D/g, "")
      .slice(0, 10);
  });

  /* ----------------------------------------
     Submit Validation
  ---------------------------------------- */

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    const name = form.name.value.trim();
    const phone = form.phone.value.trim();
    const email = form.email.value.trim();
    const type = form.type.value;
    const budget = form.budget.value;
    const occasion = form.occasion.value;
    const description =
      form.description.value.trim();
    const agreeTerms =
      form.agreeTerms.checked;

    // Required Fields

    if (!name || !phone || !email || !type) {
      showToast({
        type: "error",
        title: "Missing Information",
        message:
          "Please fill all required fields.",
      });
      return;
    }

    // Name

    if (name.length < 2) {
      showToast({
        type: "error",
        title: "Invalid Name",
        message:
          "Please enter your full name.",
      });
      return;
    }

    // Phone

    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
      showToast({
        type: "error",
        title: "Invalid Phone Number",
        message:
          "Please enter a valid 10-digit Indian mobile number.",
      });
      return;
    }

    // Email

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(email)) {
      showToast({
        type: "error",
        title: "Invalid Email",
        message:
          "Please enter a valid email address.",
      });
      return;
    }

    // Description

    if (
      description &&
      description.length < 20
    ) {
      showToast({
        type: "warning",
        title: "More Details Needed",
        message:
          "Please describe your design in at least 20 characters.",
      });
      return;
    }

    // Terms

    if (!agreeTerms) {
      showToast({
        type: "warning",
        title: "Terms Required",
        message:
          "Please accept the Terms & Conditions.",
      });
      return;
    }

    console.log({
      name,
      phone,
      email,
      type,
      budget,
      occasion,
      description,
      referenceImages:
        form.referenceImages.files,
    });

    showToast({
      type: "success",
      title: "Request Submitted",
      message:
        "Our jewellery consultant will contact you shortly.",
    });

    form.reset();
  });
}
