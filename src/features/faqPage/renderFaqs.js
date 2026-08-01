import { FAQS } from "../../constants/faq.js";
import { createFaqCard } from "../../components/faq/faqCard.js";

export function renderFaqs() {

    const container =
        document.getElementById("faqContainer");

    if (!container) return;

    const featuredFaqs =
        FAQS.filter(faq => faq.featured);

    container.innerHTML =
        featuredFaqs
            .map(createFaqCard)
            .join("");

}
