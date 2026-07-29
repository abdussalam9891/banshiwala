import { FAQS } from "../../constants/faq.js";
import { createFaqCard } from "../../components/faq/faqCard.js";
import { initAccordion } from "./accordion.js";

export function initCategoryFilter() {
    const buttons = document.querySelectorAll(".faq-filter");
    const container = document.getElementById("faqContainer");

    buttons.forEach(button => {
        button.addEventListener("click", () => {

            buttons.forEach(btn => {
                btn.classList.remove(
                    "bg-black",
                    "text-white",
                    "border-black"
                );

                btn.classList.add(
                    "bg-white",
                    "text-[#555]",
                    "border-[#E8E2DA]"
                );
            });

            button.classList.add(
                "bg-black",
                "text-white",
                "border-black"
            );

            const category = button.dataset.category;

            const faqs =
                category === "all"
                    ? FAQS.filter(faq => faq.featured)
                    : FAQS.filter(faq => faq.category === category);

            container.innerHTML = faqs
                .map(createFaqCard)
                .join("");

            initAccordion();
        });
    });
}
