import { FAQS } from "../../constants/faq.js";
import { createFaqCard } from "../../components/faq/faqCard.js";
import { initAccordion } from "./accordion.js";

export function initCategoryFilter() {
    const buttons = document.querySelectorAll(".faq-filter");
    const container = document.getElementById("faqContainer");

    buttons.forEach(button => {
       button.addEventListener("click", () => {
    console.log("Clicked:", button.dataset.category);

    const category = button.dataset.category;

    const faqs =
        category === "all"
            ? FAQS.filter(faq => faq.featured)
            : FAQS.filter(faq => faq.category === category);

    console.log(faqs);

    container.innerHTML = faqs
        .map(createFaqCard)
        .join("");

    initAccordion();
});
    });
}
