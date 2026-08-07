import { TESTIMONIALS } from "../../constants/testimonials.js";
import { createTestimonialCard } from "../../components/testimonials/testimonialCard.js";

export function renderTestimonials() {
  const track = document.getElementById("testimonialTrack");
  const dots = document.getElementById("testimonialDots");

  if (!track) return;

  track.innerHTML = TESTIMONIALS
    .map(createTestimonialCard)
    .join("");

  if (dots) {
    dots.innerHTML = TESTIMONIALS
      .map(
        (_, index) => `
          <button
            type="button"
            data-index="${index}"
            aria-label="Go to testimonial ${index + 1}"
            class="
              testimonial-dot
              h-2
              rounded-full
              transition-all
              duration-300
              ${
                index === 0
                  ? "w-6 bg-[#A07936]"
                  : "w-2 bg-[#D8D2C8]"
              }
            "
          ></button>
        `
      )
      .join("");
  }
}
