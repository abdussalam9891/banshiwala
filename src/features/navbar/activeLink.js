/**
 * ==========================================
 * Active Navigation
 * ==========================================
 */

export function initActiveLink() {
  const navLinks = document.querySelectorAll("[data-nav]");

  if (!navLinks.length) return;

  const pathname = window.location.pathname.toLowerCase();
  const params = new URLSearchParams(window.location.search);

  const category = params.get("category");
  const tag = params.get("tag");

  // Remove existing active state
  navLinks.forEach((link) => {
    link.classList.remove("text-[#A07936]");
  });

  // Home page
  if (
    pathname.endsWith("/") ||
    pathname.endsWith("/index.html")
  ) {
    return;
  }

  // Category pages
  if (category) {
    navLinks.forEach((link) => {
      if (link.dataset.nav === category) {
        link.classList.add("text-[#A07936]");
      }
    });

    return;
  }

  // New arrivals
  if (tag === "new") {
    navLinks.forEach((link) => {
      if (link.dataset.nav === "new-arrivals") {
        link.classList.add("text-[#A07936]");
      }
    });
  }
}
