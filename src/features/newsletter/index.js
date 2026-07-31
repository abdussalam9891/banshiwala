import { createNewsletterSection } from "../../components/newsletter/newsletterSection.js";

export function initNewsletterSection() {
  const container = document.getElementById("newsletter-container");

  if (!container) return;

  container.innerHTML = createNewsletterSection();

  const form = document.getElementById("newsletterForm");
  const emailInput = document.getElementById("newsletterEmail");
  const message = document.getElementById("newsletterMessage");

  if (!form || !emailInput || !message) return;

  form.addEventListener("submit", (event) => {
    event.preventDefault();

    // Placeholder: wire this to your actual email provider
    // (Mailchimp, Klaviyo, a backend endpoint, etc.) before launch.
    // Right now this only validates and shows a confirmation —
    // no email is actually captured or sent anywhere yet.
    message.textContent = `Thanks — we'll send updates to ${emailInput.value}.`;
    message.classList.remove("hidden", "text-red-600");
    message.classList.add("text-[#6B6B6B]");

    form.reset();
  });
}
