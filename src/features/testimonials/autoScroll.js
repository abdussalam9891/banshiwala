export function initTestimonialAutoScroll() {
  const container = document.getElementById("testimonialGrid");

  if (!container) return;

  const card = container.firstElementChild;

  if (!card) return;

  let interval;

  function nextSlide() {
    const gap = 16; // Update to 24 if your lg gap is 6 (24px)
    const scrollAmount = card.offsetWidth + gap;

    const isAtEnd =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 5;

    if (isAtEnd) {
      container.scrollTo({
        left: 0,
        behavior: "smooth",
      });
    } else {
      container.scrollBy({
        left: scrollAmount,
        behavior: "smooth",
      });
    }
  }

  function start() {
    interval = setInterval(nextSlide, 4000);
  }

  function stop() {
    clearInterval(interval);
  }

  start();

  container.addEventListener("mouseenter", stop);
  container.addEventListener("mouseleave", start);

  container.addEventListener("touchstart", stop);
  container.addEventListener("touchend", start);
}
