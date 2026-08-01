import { FAQS } from "../../constants/faq.js";
import { createFaqCard } from "../../components/faq/faqCard.js";
import { initAccordion } from "./accordion.js";

export function initCategoryFilter() {
  const buttons = document.querySelectorAll(".faq-filter");
  const container = document.getElementById("faqContainer");

  console.log("Buttons Found:", buttons.length);
  console.log("Container:", container);

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      console.log("====================================");
      console.log("Clicked:", button.dataset.category);

      const category = button.dataset.category;

      const faqs =
        category === "all"
          ? FAQS.filter((faq) => faq.featured)
          : FAQS.filter((faq) => faq.category === category);

      console.log("Filtered FAQs:", faqs);
      console.log("Count:", faqs.length);

      const html = faqs.map(createFaqCard).join("");

      console.log("Generated HTML:");
      console.log(html);

      container.innerHTML = html;

      console.log("Children After Render:", container.children.length);
      console.log("InnerHTML Length:", container.innerHTML.length);

      initAccordion();

      console.log("Children After Accordion:", container.children.length);
      console.log("====================================");
    });
  });
}
