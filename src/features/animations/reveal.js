export function initRevealAnimations() {
  const elements = document.querySelectorAll(".feature-reveal");

  if (!elements.length) return;

  const observer = new IntersectionObserver(
    entries => {
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;

        entry.target.classList.add("show");

        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.2,
    }
  );

  elements.forEach(element => {
    observer.observe(element);
  });
}
