let initialized = false;

export function initShowcaseCarousel() {
  const container = document.getElementById("showcaseProducts");
  const prevBtn = document.getElementById("showcasePrev");
  const nextBtn = document.getElementById("showcaseNext");

  if (!container || !prevBtn || !nextBtn) return;

  function getCardWidth() {
    const firstCard = container.firstElementChild;

    if (!firstCard) return 0;

    const styles = window.getComputedStyle(container);
    const gap = parseFloat(styles.columnGap || styles.gap || 0);

    return firstCard.getBoundingClientRect().width + gap;
  }

  function updateButtons() {
    prevBtn.disabled = container.scrollLeft <= 5;

    nextBtn.disabled =
      container.scrollLeft + container.clientWidth >=
      container.scrollWidth - 5;
  }

  if (!initialized) {
    prevBtn.addEventListener("click", () => {
      container.scrollBy({
        left: -getCardWidth(),
        behavior: "smooth",
      });
    });

    nextBtn.addEventListener("click", () => {
      container.scrollBy({
        left: getCardWidth(),
        behavior: "smooth",
      });
    });

    container.addEventListener("scroll", updateButtons);

    // ------------------------
    // Mouse Drag
    // ------------------------

    let isDragging = false;
    let startX = 0;
    let startScroll = 0;

    container.addEventListener("mousedown", (e) => {
      isDragging = true;

      startX = e.pageX;
      startScroll = container.scrollLeft;

      container.classList.add("cursor-grabbing");
    });

    container.addEventListener("mouseleave", () => {
      isDragging = false;
      container.classList.remove("cursor-grabbing");
    });

    container.addEventListener("mouseup", () => {
      isDragging = false;
      container.classList.remove("cursor-grabbing");
    });

    container.addEventListener("mousemove", (e) => {
      if (!isDragging) return;

      e.preventDefault();

      const walk = (e.pageX - startX) * 1.5;

      container.scrollLeft = startScroll - walk;
    });

    initialized = true;
  }

  updateButtons();

  window.addEventListener("resize", updateButtons);
}
