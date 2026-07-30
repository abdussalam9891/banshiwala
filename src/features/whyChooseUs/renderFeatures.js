import { WHY_CHOOSE_US } from "../../constants/whyChooseUs.js";
import { createFeatureCard } from "../../components/whyChooseUs/featureCard.js";
 

export function renderWhyChooseUs() {
  const container = document.getElementById("whyChooseUsGrid");

  if (!container) return;

  container.innerHTML = WHY_CHOOSE_US
    .map(createFeatureCard)
    .join("");


}
