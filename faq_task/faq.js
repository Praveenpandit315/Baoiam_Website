const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const button = item.querySelector("button");

    question.addEventListener("click", () => {

        const isActive = item.classList.contains("faq-active");

        faqs.forEach((faq) => {
            faq.classList.remove("faq-active");
            faq.querySelector("button").textContent = "+";
        });

        if (!isActive) {
            item.classList.add("faq-active");
            button.textContent = "−";
        }

    });
});
