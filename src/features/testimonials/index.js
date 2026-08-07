import { createTestimonialsSection } from "../../components/testimonials/testimonialSection.js";

import { renderTestimonials } from "./renderTestimonials.js";

import { initTestimonialCarousel } from "./carousel.js";

export function initTestimonials() {
  const container =
    document.getElementById("testimonials-container");

  if (!container) return;

  container.innerHTML =
    createTestimonialsSection();

 renderTestimonials();

initTestimonialCarousel();
}
