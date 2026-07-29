const DRAWER_OPEN_CLASS = "translate-x-0";
const DRAWER_CLOSE_CLASS = "-translate-x-[120%]";

const BACKDROP_VISIBLE = "opacity-100";
const BACKDROP_HIDDEN = "opacity-0";

let isOpen = false;

export function initMobileDrawer() {
  const drawer = document.getElementById("mobileDrawer");
  const panel = document.getElementById("mobilePanel");
  const backdrop = document.getElementById("mobileBackdrop");

  const openBtn = document.getElementById("menuBtn");
  const closeBtn = document.getElementById("closeDrawerBtn");

  if (
    !drawer ||
    !panel ||
    !backdrop ||
    !openBtn ||
    !closeBtn
  ) {
    return;
  }

  function openDrawer() {
    if (isOpen) return;

    isOpen = true;

    drawer.classList.remove("hidden");

    document.body.classList.add("overflow-hidden");

    requestAnimationFrame(() => {
      backdrop.classList.remove(BACKDROP_HIDDEN);
      backdrop.classList.add(BACKDROP_VISIBLE);

      panel.classList.remove(DRAWER_CLOSE_CLASS);
      panel.classList.add(DRAWER_OPEN_CLASS);
    });
  }

  function closeDrawer() {
    if (!isOpen) return;

    isOpen = false;

    backdrop.classList.remove(BACKDROP_VISIBLE);
    backdrop.classList.add(BACKDROP_HIDDEN);

    panel.classList.remove(DRAWER_OPEN_CLASS);
    panel.classList.add(DRAWER_CLOSE_CLASS);

    document.body.classList.remove("overflow-hidden");

    panel.addEventListener(
      "transitionend",
      () => {
        if (!isOpen) {
          drawer.classList.add("hidden");
        }
      },
      { once: true }
    );
  }

  openBtn.addEventListener("click", openDrawer);

  closeBtn.addEventListener("click", closeDrawer);

  backdrop.addEventListener("click", closeDrawer);

  document.addEventListener("keydown", (event) => {
    if (event.key === "Escape") {
      closeDrawer();
    }
  });

  window.addEventListener("resize", () => {
    if (window.innerWidth >= 1024 && isOpen) {
      closeDrawer();
    }
  });
}
