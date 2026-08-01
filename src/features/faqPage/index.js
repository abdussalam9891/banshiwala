import { renderFaqs } from "./renderFaqs.js";
import { initAccordion } from "./accordion.js";
import { initCategoryFilter } from "./filter.js";

export function initFAQ() {

  const steps = [
    ["renderFaqs", renderFaqs],
    ["initAccordion", initAccordion],
    ["initCategoryFilter", initCategoryFilter],
  ];

  steps.forEach(([name, fn]) => {
    try {
      fn();
    } catch (err) {
      console.error(`[initFAQ] ${name} failed:`, err);
    }
  });

}
