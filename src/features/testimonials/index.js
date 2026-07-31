import { createTestimonialSpotlight } from "../../components/testimonials/testimonialSpotlight.js";
import { renderTestimonials } from "./renderTestimonials.js";
import { initTestimonialAutoplay } from "./autoplay.js";

export function initTestimonials() {
  const container = document.getElementById("testimonials-container"); // wrap your old <section> id with this

  if (!container) return;

  container.innerHTML = createTestimonialSpotlight();

  renderTestimonials();
  initTestimonialAutoplay();
}
