import { initFAQ } from "../features/faq/index.js";

export function loadFAQPage() {

  const container =
    document.getElementById("faqContainer");

  if (!container) return;

  try {

    initFAQ();

  } catch (err) {

    console.error(
      "[loadFAQPage] initFAQ failed:",
      err
    );

  }

}
