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

const cards=document.querySelectorAll(".item");

window.addEventListener("scroll",()=>{

cards.forEach(card=>{

const top=card.getBoundingClientRect().top;

if(top<window.innerHeight-100){

card.classList.add("show");

}

});

});




document.querySelectorAll("a").forEach(button=>{

button.addEventListener("click",function(e){

if(this.getAttribute("href")==="#"){

e.preventDefault();

alert("Coming Soon");

}

});

});