const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const button = item.querySelector("button");

    question.addEventListener("click", () => {

        item.classList.toggle("faq-active");

        if (item.classList.contains("active")) {
            button.innerHTML = "−";
        } else {
            button.innerHTML = "+";
        }

    });
});
