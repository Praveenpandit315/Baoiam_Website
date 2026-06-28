const right = document.getElementById("rightSection");

right.addEventListener("mouseenter", function () {
    right.classList.add("active");
});

right.addEventListener("mouseleave", function () {
    right.classList.remove("active");
});
