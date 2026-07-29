const SCROLL_THRESHOLD = 60;

export function initScroll() {
  const navbar = document.getElementById("navbar");

  if (!navbar) return;

  let ticking = false;

  function updateNavbar() {
    const scrolled = window.scrollY > SCROLL_THRESHOLD;

    navbar.classList.toggle("h-16", scrolled);
    navbar.classList.toggle("h-20", !scrolled);

 if (scrolled) {
  navbar.classList.remove(
    "bg-transparent",
    "border-transparent"
  );

  navbar.classList.add(
    "bg-[#181818]/95",
    "backdrop-blur-xl",
    "shadow-lg",
    "border-white/10"
  );
} else {
  navbar.classList.remove(
    "bg-[#181818]/95",
    "backdrop-blur-xl",
    "shadow-lg",
    "border-white/10"
  );

  navbar.classList.add(
    "bg-transparent",
    "border-transparent"
  );
}
    ticking = false;
  }

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  window.addEventListener("scroll", handleScroll, {
    passive: true,
  });

  updateNavbar();
}
