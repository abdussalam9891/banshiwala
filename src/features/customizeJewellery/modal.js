 

function openModal() {
  const modal = document.getElementById("customizeModal");
  const panel = document.getElementById("customizePanel");
  const overlay = document.getElementById("customizeOverlay");

  if (!modal || !panel || !overlay) return;

  modal.classList.remove("hidden");
  modal.classList.add("flex");

  requestAnimationFrame(() => {
    overlay.classList.remove("opacity-0");

    panel.classList.remove("opacity-0");
    panel.classList.remove("scale-95");
  });

  document.documentElement.classList.add("overflow-hidden");


}

function closeModal() {
  const modal = document.getElementById("customizeModal");
  const panel = document.getElementById("customizePanel");
  const overlay = document.getElementById("customizeOverlay");

  if (!modal || !panel || !overlay) return;

  overlay.classList.add("opacity-0");

  panel.classList.add("opacity-0");
  panel.classList.add("scale-95");

 document.documentElement.classList.remove("overflow-hidden");

  setTimeout(() => {
    modal.classList.remove("flex");
    modal.classList.add("hidden");
  }, 500);
}

export function initCustomizeModal() {
  const openBtn = document.getElementById("customizeJewelleryBtn");
  const closeBtn = document.getElementById("closeCustomizeModal");
  const overlay = document.getElementById("customizeOverlay");

  if (!openBtn) return;

  openBtn.addEventListener("click", openModal);

  closeBtn?.addEventListener("click", closeModal);

  overlay?.addEventListener("click", closeModal);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      closeModal();
    }
  });
}
