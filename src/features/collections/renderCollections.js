import { COLLECTIONS } from "../../constants/collections.js";
import { createCollectionCard } from "../../components/collections/collectionCard.js";

export function renderCollections() {
  const container = document.getElementById("collectionGrid");

  if (!container) return;

  container.innerHTML = COLLECTIONS.map(createCollectionCard).join("");
}
