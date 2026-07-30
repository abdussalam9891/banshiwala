import { TESTIMONIALS } from "../../constants/testimonials.js";
import { createTestimonialCard } from "../../components/testimonials/testimonialCard.js";

export function renderTestimonials() {
  const container = document.getElementById("testimonialGrid");

  if (!container) return;

  container.innerHTML = TESTIMONIALS
    .map(
      (testimonial) => `
        <div
          class="
            reveal

            flex-shrink-0

           w-[290px]
xl:w-[320px]

            snap-start
          "
        >
          ${createTestimonialCard(testimonial)}
        </div>
      `
    )
    .join("");
}
