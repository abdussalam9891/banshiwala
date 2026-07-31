import { TESTIMONIALS } from "../../constants/testimonials.js";

const SLIDE_DURATION = 4000;

export function initTestimonialAutoplay() {
  const stage = document.getElementById("testimonialStage");
  const switcher = document.getElementById("testimonialSwitcher");

  if (!stage || !switcher || !TESTIMONIALS.length) return;

  const slides = stage.querySelectorAll(".testimonial-slide");
  const dots = switcher.querySelectorAll(".testimonial-dot");

  let currentIndex = 0;
  let ringAnimation = null;
  let timer = null;

  function playRing(dot) {
    const circle = dot.querySelector(".progress-ring");
    const circumference = 2 * Math.PI * 28;

    if (ringAnimation) ringAnimation.cancel();

    circle.setAttribute("stroke-dashoffset", circumference);

    // Web Animations API instead of a CSS class-toggle: restarting a
    // CSS animation on the same element reliably requires a reflow
    // hack (void el.offsetWidth) that's easy to get wrong and easy
    // for someone to "clean up" later and quietly break. .animate()
    // just runs, every time, no hack required.
    ringAnimation = circle.animate(
      [
        { strokeDashoffset: circumference },
        { strokeDashoffset: 0 },
      ],
      { duration: SLIDE_DURATION, fill: "forwards" }
    );
  }

  function goTo(index) {
    if (index === currentIndex) return;

    slides[currentIndex].classList.remove("opacity-100", "translate-y-0", "pointer-events-auto");
    slides[currentIndex].classList.add("opacity-0", "translate-y-3", "pointer-events-none");

    dots[currentIndex].classList.remove("scale-110");
    dots[currentIndex].classList.add("scale-90", "opacity-50");
    dots[currentIndex].querySelector(".progress-ring").setAttribute("stroke-dashoffset", 2 * Math.PI * 28);

    currentIndex = index;

    slides[currentIndex].classList.remove("opacity-0", "translate-y-3", "pointer-events-none");
    slides[currentIndex].classList.add("opacity-100", "translate-y-0", "pointer-events-auto");

    dots[currentIndex].classList.remove("scale-90", "opacity-50");
    dots[currentIndex].classList.add("scale-110");

    playRing(dots[currentIndex]);
  }

  function next() {
    goTo((currentIndex + 1) % TESTIMONIALS.length);
  }

  function start() {
    playRing(dots[currentIndex]);
    timer = setInterval(next, SLIDE_DURATION);
  }

  function stop() {
    clearInterval(timer);
    if (ringAnimation) ringAnimation.pause();
  }

  function resume() {
    if (ringAnimation) ringAnimation.play();
    timer = setInterval(next, SLIDE_DURATION);
  }

  dots.forEach((dot, index) => {
    dot.addEventListener("click", () => {
      stop();
      goTo(index);
      start();
    });
  });

  const section = document.getElementById("testimonials");

  section.addEventListener("mouseenter", stop);
  section.addEventListener("mouseleave", resume);
  section.addEventListener("touchstart", stop, { passive: true });
  section.addEventListener("touchend", resume);

  start();
}
