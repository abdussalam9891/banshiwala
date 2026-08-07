const SCROLL_THRESHOLD = 60;

export function initScroll() {
  const navbar = document.getElementById("navbar");
  const header = document.getElementById("siteHeader");

  if (!navbar || !header) return;

  const theme = header.dataset.theme || "light";

  const navbarItems =
    navbar.querySelectorAll(".navbar-text");

  let ticking = false;

  function updateNavbar() {
    const scrolled =
      window.scrollY > SCROLL_THRESHOLD;

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

      // Only pages that start with dark text
      if (theme === "dark") {
        navbarItems.forEach((item) => {
          item.classList.remove(
            "text-[#181818]",
            "text-[#181818]/90",
            "hover:bg-black/5",
            "hover:bg-white/20"
          );

          item.classList.add(
            "text-white"
          );
        });
      }
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

      if (theme === "dark") {
        navbarItems.forEach((item) => {
          item.classList.remove(
            "text-white",
            "hover:bg-white/20",
            "hover:bg-black/5"
          );

          item.classList.add(
            "text-[#181818]/90"
          );
        });
      }
    }

    ticking = false;
  }

  function handleScroll() {
    if (!ticking) {
      requestAnimationFrame(updateNavbar);
      ticking = true;
    }
  }

  window.addEventListener(
    "scroll",
    handleScroll,
    {
      passive: true,
    }
  );

  updateNavbar();
}
