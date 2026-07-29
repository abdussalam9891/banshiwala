export function initCategoryFilter() {

    const buttons =
        document.querySelectorAll(".faq-filter");

    const items =
        document.querySelectorAll(".faq-item");

    buttons.forEach(button => {

        button.addEventListener("click", () => {

            buttons.forEach(btn => {

                btn.classList.remove(
                    "bg-[#181818]",
                    "text-white",
                    "border-[#181818]"
                );

                btn.classList.add(
                    "bg-white"
                );

            });

            button.classList.add(
                "bg-[#181818]",
                "text-white",
                "border-[#181818]"
            );

            const category =
                button.dataset.category;

            items.forEach(item => {

                if (
                    category === "all" ||
                    item.dataset.category === category
                ) {

                    item.style.display = "";

                } else {

                    item.style.display = "none";

                }

            });

        });

    });

}
