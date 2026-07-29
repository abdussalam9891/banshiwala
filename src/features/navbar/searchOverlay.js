let isOpen = false;

export function initSearchOverlay() {
  const overlay = document.getElementById("searchOverlay");
  const backdrop = document.getElementById("searchBackdrop");
  const modal = document.getElementById("searchModal");

  const openBtn = document.getElementById("searchBtn");
  const closeBtn = document.getElementById("closeSearchBtn");
  const input = document.getElementById("searchInput");

  if (
    !overlay ||
    !backdrop ||
    !modal ||
    !openBtn ||
    !closeBtn ||
    !input
  ) {
    return;
  }

  function openSearch() {
    if (isOpen) return;

    isOpen = true;

    overlay.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");

    requestAnimationFrame(() => {
      backdrop.classList.remove("opacity-0");
      backdrop.classList.add("opacity-100");

      modal.classList.remove(
        "opacity-0",
        "scale-95",
        "-translate-y-4"
      );

      modal.classList.add(
        "opacity-100",
        "scale-100",
        "translate-y-0"
      );

      input.focus();
    });
  }

  function closeSearch() {
    if (!isOpen) return;

    isOpen = false;

    backdrop.classList.remove("opacity-100");
    backdrop.classList.add("opacity-0");

    modal.classList.remove(
      "opacity-100",
      "scale-100",
      "translate-y-0"
    );

    modal.classList.add(
      "opacity-0",
      "scale-95",
      "-translate-y-4"
    );

    document.body.classList.remove("overflow-hidden");

    modal.addEventListener(
      "transitionend",
      () => {
        if (!isOpen) {
          overlay.classList.add("hidden");
        }
      },
      { once: true }
    );
  }

  openBtn.addEventListener("click", openSearch);

  closeBtn.addEventListener("click", closeSearch);

  backdrop.addEventListener("click", closeSearch);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSearch();
    }
  });

  input.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeSearch();
    }
  });
}
