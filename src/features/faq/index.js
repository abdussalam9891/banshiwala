import { renderFaqs } from "./renderFaqs.js";
import { initAccordion } from "./accordion.js";
 
import { initCategoryFilter } from "./filter.js";

export function initFAQ() {

    renderFaqs();

    initAccordion();


    initCategoryFilter();

}
