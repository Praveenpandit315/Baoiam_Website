/* Button Click */
const buttons=document.querySelectorAll("a");

buttons.forEach(btn=>{

btn.addEventListener("click",function(e){

e.preventDefault();

alert("Coming Soon");

});

});

/* Gallery Animation */

const image=document.querySelector(".item");

image.addEventListener("mouseenter",()=>{

image.style.transform="scale(1.02)";

});

image.addEventListener("mouseleave",()=>{

image.style.transform="scale(1)";

});


/* Scroll Reveal */
const card = document.querySelector(".shadow-xl");

window.addEventListener("scroll", () => {

    const top = card.getBoundingClientRect().top;

    if (top < window.innerHeight - 100) {

        card.classList.add("opacity-100", "translate-y-0");

    }

});

