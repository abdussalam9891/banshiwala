import { createHomeFaq } from "../components/home/homeFaq.js";
import { initAccordion } from "../features/faq/accordion.js";
import { renderWhyChooseUs } from "../features/whyChooseUs/index.js";
import { initCollections } from "../features/collections/index.js";
import { initTestimonials } from "../features/testimonials/index.js";
import { initCraftsmanship } from "../features/craftsmanship/index.js";

export function initHomePage() {

    const container =
        document.getElementById("homeFaq");

    if (!container) return;

    container.innerHTML =


        createHomeFaq();

        initCollections();

        renderWhyChooseUs();
         initCraftsmanship();
        initTestimonials();

    initAccordion();

}








