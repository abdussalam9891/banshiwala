export function initSearch() {

    const search = document.getElementById("faqSearch");

    if (!search) return;

    search.addEventListener("input", () => {

        const value = search.value.toLowerCase();

        document.querySelectorAll(".faq-item")
            .forEach(item => {

                const text =
                    item.innerText.toLowerCase();

                item.style.display =
                    text.includes(value)
                        ? ""
                        : "none";

            });

    });

}
