import { TESTIMONIALS } from "../../constants/testimonials.js";

function createStars(rating) {
  return Array.from({ length: rating })
    .map(
      () => `
        <svg class="h-3.5 w-3.5 fill-[#A07936]" viewBox="0 0 20 20">
          <path d="M9.049.927c.3-.921 1.603-.921 1.902 0l1.24 3.818a1 1 0 0 0 .95.69h4.014c.969 0 1.371 1.24.588 1.81l-3.247 2.36a1 1 0 0 0-.364 1.118l1.24 3.817c.3.922-.755 1.688-1.54 1.118l-3.247-2.359a1 1 0 0 0-1.176 0L6.162 15.66c-.784.57-1.838-.196-1.539-1.118l1.24-3.817a1 1 0 0 0-.364-1.118L2.252 7.245c-.783-.57-.38-1.81.588-1.81h4.014a1 1 0 0 0 .951-.69L9.05.927Z"/>
        </svg>
      `
    )
    .join("");
}

function createSlide(testimonial, index) {
  return `
    <div
      class="
        testimonial-slide

        absolute
        inset-0

        flex
        flex-col
        items-center

        transition-all
        duration-700
        ease-[cubic-bezier(0.22,1,0.36,1)]

        ${index === 0 ? "opacity-100 translate-y-0 pointer-events-auto" : "opacity-0 translate-y-3 pointer-events-none"}
      "
      data-index="${index}"
    >
      <div class="flex items-center gap-1">
        ${createStars(testimonial.rating)}
      </div>

      <p
        class="
          mt-6
          mb-6

          font-serif

          text-xl
          lg:text-2xl

          leading-relaxed

          text-white/90
        "
      >
        &ldquo;${testimonial.review}&rdquo;
      </p>

      <h4 class="mt-7 text-lg font-medium text-white">
        ${testimonial.name}
      </h4>

      <p
        class="
          mt-1

          text-xs

          uppercase

          tracking-[0.2em]

          text-[#A07936]
        "
      >
        ${testimonial.designation}
      </p>
    </div>
  `;
}

function createDot(testimonial, index) {
  const circumference = 2 * Math.PI * 28; // r=28

  return `
    <button
      type="button"
      data-index="${index}"
      aria-label="Show testimonial from ${testimonial.name}"
      class="
        testimonial-dot

        relative

        h-14
        w-14

        shrink-0

        rounded-full

        transition-all
        duration-500

        ${index === 0 ? "scale-110" : "scale-90 opacity-50"}
      "
    >
      <svg
        class="
          pointer-events-none
          absolute
          -inset-1

          h-16
          w-16

          -rotate-90
        "
        viewBox="0 0 64 64"
      >
        <circle cx="32" cy="32" r="28" fill="none" stroke="#333333" stroke-width="2" />
        <circle
          class="progress-ring"
          cx="32" cy="32" r="28"
          fill="none"
          stroke="#A07936"
          stroke-width="2"
          stroke-dasharray="${circumference}"
          stroke-dashoffset="${circumference}"
        />
      </svg>

      <img
        src="${testimonial.image}"
        alt=""
        loading="lazy"
        class="h-14 w-14 rounded-full object-cover"
      />
    </button>
  `;
}

export function renderTestimonials() {
  const stage = document.getElementById("testimonialStage");
  const switcher = document.getElementById("testimonialSwitcher");

  if (!stage || !switcher) return;

  if (!TESTIMONIALS.length) {
    stage.innerHTML = `<p class="text-white/60">No testimonials yet.</p>`;
    return;
  }

  stage.innerHTML = TESTIMONIALS.map(createSlide).join("");
  switcher.innerHTML = TESTIMONIALS.map(createDot).join("");

  measureStageHeight(stage);
}

function measureStageHeight(stage) {
  function measure() {
    let maxHeight = 0;

    stage.querySelectorAll(".testimonial-slide").forEach((slide) => {
      slide.style.position = "relative";
      slide.style.opacity = "1";
      slide.style.visibility = "hidden";

      maxHeight = Math.max(maxHeight, slide.offsetHeight);

      slide.style.position = "";
      slide.style.opacity = "";
      slide.style.visibility = "";
    });

    // Small buffer — real-world text rendering (subpixel rounding,
    // OS font hinting differences) can push actual height a hair
    // past what offsetHeight reports. Cheap insurance against a
    // 1-2px overlap on some browsers.
    stage.style.minHeight = `${maxHeight + 10}px`;
  }

  // document.fonts.ready resolves once all @font-face fonts the
  // page requested have actually finished loading — this is the
  // one signal that tells you "measuring now will match how it
  // actually looks," instead of measuring against a fallback font.
  if (document.fonts && document.fonts.ready) {
    document.fonts.ready.then(measure);
  } else {
    // Very old browser without the Font Loading API — no reliable
    // "fonts are ready" signal exists, so fall back to measuring
    // immediately. Rare enough not to engineer further for.
    measure();
  }

  // Re-measure on resize: the quote wraps differently at different
  // widths, so a height locked at desktop width will be wrong
  // once the user resizes to mobile or rotates their phone.
  let resizeTimer;
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(measure, 150);
  });
}
