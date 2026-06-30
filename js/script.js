// alert("JS Loaded");
//Navbar js

const trigger = document.getElementById('ksTrigger');
const dropdown = document.getElementById('ksDropdown');
const catItems = document.querySelectorAll('.dd-item[data-cat]');

// Toggle main dropdown on click
trigger.addEventListener('click', (e) => {
  e.stopPropagation();
  const isOpen = dropdown.classList.toggle('open');
  trigger.classList.toggle('open', isOpen);
  if (!isOpen) closeAllSubs();
});

// Toggle sub-menus on category click
catItems.forEach(item => {
  item.addEventListener('click', (e) => {
    e.stopPropagation();
    const cat = item.dataset.cat;
    const sub = document.getElementById('sub-' + cat);
    const isOpen = sub.classList.contains('open');

    // close all other subs
    closeAllSubs();

    if (!isOpen) {
      sub.classList.add('open');
      item.classList.add('active-cat');
    }
  });
});


function closeAllSubs() {
  document.querySelectorAll('.sub-menu').forEach(s => s.classList.remove('open'));
  document.querySelectorAll('.dd-item.active-cat').forEach(i => i.classList.remove('active-cat'));
}

// Close dropdown when clicking outside
document.addEventListener('click', () => {
  dropdown.classList.remove('open');
  trigger.classList.remove('open');
  closeAllSubs();
});

// Prevent dropdown itself from closing when clicking inside
dropdown.addEventListener('click', e => e.stopPropagation());

const menu = document.querySelector(".menu-toggle");
const links = document.querySelector(".nav-links");
const actions = document.querySelector(".nav-actions");

menu.onclick = function () {

  links.classList.toggle("show");
  actions.classList.toggle("show");

}
// =====================================================
// Baoiam - Hero Section JS
// simple vanilla js, no frameworks
// =====================================================

// explore courses button click
var exploreBtn = document.getElementById("exploreCoursesBtn");

exploreBtn.addEventListener("click", function () {
  // for now just log it, later this will redirect to courses page
  console.log("Explore courses button clicked");
});

// view learning paths button click
var pathsBtn = document.getElementById("viewPathsBtn");

pathsBtn.addEventListener("click", function () {
  // for now just log it, later this will redirect to learning paths page
  console.log("View learning paths button clicked");
});

//why BAoiam 
const whyCards = document.querySelectorAll('.card');

whyCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        card.style.boxShadow = '0 15px 35px rgba(0,0,0,.1)';
    });

    card.addEventListener('mouseleave', () => {
        card.style.boxShadow = 'none';
    });
});

// OUR INSIGHT 
/* Button Click */
const buttons = document.querySelectorAll(".btn");
buttons.forEach(btn => {
    btn.addEventListener("click", () => {
        buttons.forEach(btn => {
            btn.addEventListener("click", function (e) {
                e.preventDefault();
                alert("Coming Soon");
            });
        });
    });
});

/* Gallery Animation */
const image = document.querySelector(".item");
image.addEventListener("mouseenter", () => {
    image.style.transform = "scale(1.02)";
});

image.addEventListener("mouseleave", () => {
    image.style.transform = "scale(1)";
});

/* Scroll Reveal */
const cards = document.querySelectorAll(".item");
window.addEventListener("scroll", () => {
    cards.forEach(card => {
        const top = card.getBoundingClientRect().top;
        if (top < window.innerHeight - 100) {
            card.classList.add("show");
        }
    });
});


// ================================Testimonial =================================
// ===============================
// TESTIMONIAL DATA
// ===============================

const testimonials = [
{
name: "Amit Pandey",
role: "Microsoft - 52 LPA",
image: "/assets/Logos/Profile (2).png",
review: "BAOIAM’s mentorship, projects, and placement support helped me transform my career and crack Microsoft at 52 LPA."
},
{
name: "Akhil Padi",
role: "Quality Engineer - 18 LPA",
image: "/assets/Logos/Profile (3).png",
review: "The hands-on projects and personalized guidance at BAOIAM helped me get placed as a Quality Engineer at 18 LPA."
},
{
name: "Isha Vardhan",
role: "Software Developer - 5 LPA",
image: "/assets/Logos/Profile (4).png",
review: "Thanks to BAOIAM's structured curriculum and expert interview preparation, I gained the confidence to land my Software Developer role."
}
];

let current = 1;

// ===============================
// DOM
// ===============================

const mainCard = document.querySelector("#mainCard");
const leftCard = document.querySelector("#leftCard");
const rightCard = document.querySelector("#rightCard");

// ===============================
// CREATE CARD
// ===============================

function createCard(data){

return `

<div class="testimonial-card-top">

<div class="testimonial-profile">

<img src="${data.image}" alt="${data.name}" class="testimonial-avatar">

<div>

<div class="testimonial-name">${data.name}</div>

<div class="testimonial-role">${data.role}</div>

</div>

</div>

<div class="testimonial-stars">
★★★★★
</div>

</div>

<div class="testimonial-review">
"${data.review}"
</div>

`;

}

// ===============================
// SHOW CARD
// ===============================

function showCards(){

const left=(current-1+testimonials.length)%testimonials.length;
const right=(current+1)%testimonials.length;

leftCard.classList.add("testimonial-fade");
mainCard.classList.add("testimonial-fade");
rightCard.classList.add("testimonial-fade");

setTimeout(()=>{

leftCard.innerHTML=createCard(testimonials[left]);
mainCard.innerHTML=createCard(testimonials[current]);
rightCard.innerHTML=createCard(testimonials[right]);

leftCard.classList.remove("testimonial-fade");
mainCard.classList.remove("testimonial-fade");
rightCard.classList.remove("testimonial-fade");

},250);

}

// ===============================
// EVENTS
// ===============================

leftCard.onclick=()=>{

current=(current-1+testimonials.length)%testimonials.length;

showCards();

};

rightCard.onclick=()=>{

current=(current+1)%testimonials.length;

showCards();

};

// ===============================
// AUTO SLIDER
// ===============================

setInterval(()=>{

current=(current+1)%testimonials.length;

showCards();

},5000);

// ===============================

showCards();

// ==========================================================FAQ===============================================
const faqs = document.querySelectorAll(".faq-item");

faqs.forEach((item) => {
    const question = item.querySelector(".faq-question");
    const button = item.querySelector("button");

    question.addEventListener("click", () => {

        item.classList.toggle("active");

        if (item.classList.contains("active")) {
            button.innerHTML = "−";
        } else {
            button.innerHTML = "+";
        }

    });
});

// ================================================CTA =================================================================

function validatePhone() {

    const phone = document.getElementById("phone").value.trim();

    // Check if input is empty
    if (phone === "") {
        alert("Please enter your mobile number.");
        return;
    }

    // Allow only 10-digit Indian mobile numbers
    const phoneRegex = /^[6-9]\d{9}$/;

    if (!phoneRegex.test(phone)) {
        alert("Please enter a valid 10-digit Indian mobile number.");
        return;
    }

    alert("Thank you! We will contact you shortly.");

    // Clear input after successful submission
    document.getElementById("phone").value = "";
}
//footer 
const footerLinks = document.querySelectorAll(".site-footer a");

footerLinks.forEach(link => {

    link.addEventListener("mouseenter", () => {
        link.style.transition = ".3s";
    });

});