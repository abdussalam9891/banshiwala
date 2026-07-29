import { createHomeFaq } from "../components/home/homeFaq.js";
import { initAccordion } from "../features/faq/accordion.js";

export function initHomePage() {

    const container =
        document.getElementById("homeFaq");

    if (!container) return;

    container.innerHTML =
        createHomeFaq();

    initAccordion();

}
