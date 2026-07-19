//////////////////////////////////////////////
//////////////////////////////////////////////
//OUR BOOCAMP SECTION
(() => {

const courseStates = [
    {
        id: "entrepreneurship",
        title: "Entrepreneurship & Business Mastery",
        boxHeading: "Curriculum Breakdown",
        description: "Master entrepreneurship with modern business strategy, startup execution, growth marketing, financial planning, and scalable business systems.",
        imageSrc: "/assets/images/entrepreneurship.png",
        imageAlt: "Entrepreneurship Course Illustration Graphic",
        tags: ["100+ Hours", "15+ Projects", "Job Guarantee"],
        topics: [
            "Business Model Design & Validation",
            "Market Research & Customer Validation",
            "Financial Planning & Business Scaling",
            "Customer Acquisition Strategies"
        ],
        achievements: [
            { label: "Achieve", detail: "Learn Latest Tools" },
            { label: "Achieve", detail: "Build 10+ Projects" },
            { label: "Achieve", detail: "Become Interview Ready" },
            { label: "Achieve", detail: "Receive Mentor Feedback" }
        ]
    },
    {
        id: "web-development",
        title: "Full Stack Web Engineering",
        boxHeading: "By the end of this bootcamp you'll:",
        description: "Master the modern MERN stack with advanced architecture, cloud deployment, and system design patterns.",
        imageSrc: "/assets/images/web-development.png",
        imageAlt: "Web Development Course Illustration Graphic",
        tags: ["60+ Hours", "12+ Projects", "Job Guarantee"],
        topics: [
            "Advance React Hooks & Context API",
            "Backend with Node.js & Microservices",
            "AWS Cloud Infrastructure & CI/CD",
            "SQL & NoSQL Database Optimization"
        ],
        achievements: [
            { label: "Achieve", detail: "Build 10+ Projects" },
            { label: "Achieve", detail: "Create Industry Portfolio" },
            { label: "Achieve", detail: "Learn Latest Tools" },
            { label: "Achieve", detail: "Become Interview Ready" }
        ]
    }
];

let activeIndex = 0;
let autoSlider;

const section = document.querySelector("#bc-section");

if (!section) return;

const leftCard = section.querySelector("#bcLeftCard");
const topicsGrid = section.querySelector("#bcTopics");
const imgContainer = section.querySelector("#bcImageContainer");
const titleContainer = section.querySelector("#bcTitle");
const descContainer = section.querySelector("#bcDescription");
const tagsContainer = section.querySelector("#bcTags");
const phasesContainer = section.querySelector("#bcPhases");
const boxHeadingContainer = section.querySelector("#bcBoxHeading");

function generateLayout() {
    renderAchievementItems();
    updateSpotlightDisplay(false);
}

function renderAchievementItems() {

    phasesContainer.innerHTML = "";

    const currentData = courseStates[activeIndex];

    boxHeadingContainer.textContent = currentData.boxHeading;

    currentData.achievements.forEach((item) => {

        const card = document.createElement("div");

        card.className = "bc-phase-card";

        card.innerHTML = `
            <div class="bc-phase-info">
                <span class="bc-phase-number">${item.label}</span>
                <span class="bc-phase-title">
                    <span class="bc-checkmark">&#10003;</span>
                    ${item.detail}
                </span>
            </div>
            <div class="bc-phase-icon">&lt;/&gt;</div>
        `;

        card.addEventListener("click", () => {

            phasesContainer.querySelectorAll(".bc-phase-card").forEach(c => {
                c.classList.remove("active");
            });

            card.classList.add("active");

            activeIndex = (activeIndex + 1) % courseStates.length;

            updateSpotlightDisplay(true);

            restartAutoSlider();

        });

        phasesContainer.appendChild(card);

    });

}

function updateSpotlightDisplay(animate = false) {

    const data = courseStates[activeIndex];

    if (animate) {
        leftCard.classList.add("fade-out");
        topicsGrid.classList.add("fade-out");
    }

    setTimeout(() => {

        titleContainer.textContent = data.title;
        descContainer.textContent = data.description;

        imgContainer.innerHTML = `
            <img src="${data.imageSrc}" alt="${data.imageAlt}">
        `;

        tagsContainer.innerHTML = "";

        data.tags.forEach(tag => {

            const span = document.createElement("span");

            span.className = "bc-tag";
            span.textContent = tag;

            tagsContainer.appendChild(span);

        });

        topicsGrid.innerHTML = "";

        data.topics.forEach(topic => {

            const badge = document.createElement("div");

            badge.className = "bc-topic-badge";
            badge.textContent = topic;

            topicsGrid.appendChild(badge);

        });

        renderAchievementItems();

        if (animate) {
            leftCard.classList.remove("fade-out");
            topicsGrid.classList.remove("fade-out");
        }

    }, animate ? 250 : 0);

}

function startAutoSlider() {

    autoSlider = setInterval(() => {

        activeIndex = (activeIndex + 1) % courseStates.length;

        updateSpotlightDisplay(true);

    }, 5000);

}

function restartAutoSlider() {

    clearInterval(autoSlider);

    startAutoSlider();

}

generateLayout();
startAutoSlider();

})();
//OUR BOOTCAMP END


const trigger   = document.getElementById('ksTrigger');
  const dropdown  = document.getElementById('ksDropdown');
  const catItems  = document.querySelectorAll('.dd-item[data-cat]');

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
      const cat    = item.dataset.cat;
      const sub    = document.getElementById('sub-' + cat);
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

  const menu=document.querySelector(".menu-toggle");
const links=document.querySelector(".nav-links");
const actions=document.querySelector(".nav-actions");

menu.onclick=function(){

    links.classList.toggle("show");
    actions.classList.toggle("show");

}
// =====================================================
// Baoiam - Hero Section JS
// simple vanilla js, no frameworks
//
// note: the load-in reveal (badge/heading/photo/stats card
// sliding+fading into place) is pure CSS now - see the
// animate-* utility classes in css/input.css / tailwind.config.js.
// This file only handles things that genuinely need JS:
// the rotating headline word, the stats count-up, and the
// two button click handlers.
// =====================================================

var prefersReducedMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)"
).matches;

// ---------- rotating headline word ----------
var rotatorWords = [
  "Get Skilled",
  "Get Certified",
  "Get Mentored",
  "Get Job-Ready",
  "Get Placed",
  "Get Hired",
];
var rotatorEl = document.getElementById("rotatorWord");

if (rotatorEl && !prefersReducedMotion) {
  var rotatorIndex = 0;
  var rotatorTimer = null;
  var WORD_VISIBLE_MS = 1400;
  var SLIDE_MS = 400;

  function rotateWord() {
    rotatorEl.classList.add("rotator-out");

    setTimeout(function () {
      rotatorIndex = (rotatorIndex + 1) % rotatorWords.length;
      rotatorEl.textContent = rotatorWords[rotatorIndex];

      rotatorEl.classList.remove("rotator-out");
      rotatorEl.classList.add("rotator-in-start");

      // force reflow so the "enter from below" starting position is
      // actually committed before we transition it back to place
      void rotatorEl.offsetWidth;

      rotatorEl.classList.remove("rotator-in-start");
    }, SLIDE_MS);
  }

  function startRotator() {
    if (rotatorTimer) return;
    rotatorTimer = setInterval(rotateWord, WORD_VISIBLE_MS + SLIDE_MS);
  }

  function stopRotator() {
    clearInterval(rotatorTimer);
    rotatorTimer = null;
  }

  // wait for the heading's own entrance animation to land before
  // the word carousel starts stealing attention
  setTimeout(startRotator, 1300);

  // pause while the tab is hidden, no point animating off-screen
  document.addEventListener("visibilitychange", function () {
    if (document.hidden) {
      stopRotator();
    } else {
      startRotator();
    }
  });
}

// ---------- stats count-up, starts once the stats card has landed ----------
var statsCard = document.getElementById("statsCard");

function animateCount(el) {
  var raw = el.textContent.trim();
  var match = raw.match(/^([\d,.]+)(.*)$/);
  if (!match) return;

  var target = parseFloat(match[1].replace(/,/g, ""));
  var suffix = match[2];
  if (isNaN(target)) return;

  var duration = 900;
  var start = null;

  function step(timestamp) {
    if (start === null) start = timestamp;
    var progress = Math.min((timestamp - start) / duration, 1);
    var eased = 1 - Math.pow(1 - progress, 3); // ease-out cubic
    var current = Math.round(target * eased);
    el.textContent = current + suffix;

    if (progress < 1) {
      requestAnimationFrame(step);
    } else {
      el.textContent = target + suffix; // lock exact final value
    }
  }

  requestAnimationFrame(step);
}

function runStatsCountUp() {
  var numbers = document.querySelectorAll(".stats-number");
  numbers.forEach(function (el) {
    el.classList.add("is-counting");
    animateCount(el);
  });
}

if (statsCard && !prefersReducedMotion) {
  var counted = false;
  statsCard.addEventListener("animationend", function (e) {
    if (counted) return;
    counted = true;
    runStatsCountUp();
  });

  // safety net in case animationend never fires (e.g. tab was backgrounded
  // for the whole entrance sequence, or motion is disabled some other way)
  setTimeout(function () {
    if (!counted) {
      counted = true;
      runStatsCountUp();
    }
  }, 2500);
} else if (statsCard && prefersReducedMotion) {
  // reduced motion skips the entrance animation entirely, so the
  // numbers are just shown at their final value already - no count-up.
}

// ---------- explore courses button click ----------
var exploreBtn = document.getElementById("exploreCoursesBtn");
if (exploreBtn) {
  exploreBtn.addEventListener("click", function () {
    // for now just log it, later this will redirect to courses page
    console.log("Explore courses button clicked");
  });
}

// ---------- view learning paths button click ----------
var pathsBtn = document.getElementById("viewPathsBtn");
if (pathsBtn) {
  pathsBtn.addEventListener("click", function () {
    // for now just log it, later this will redirect to learning paths page
    console.log("View learning paths button clicked");
  });
}

// ================================Testimonial =================================
// ===============================
// TESTIMONIAL DATA
// ===============================

const testimonials = [
{
name: "Amit Pandey",
role: "Microsoft - 52 LPA",
image: "/assets/logos/Profile (4).png",
review: "BAOIAM’s mentorship, projects, and placement support helped me transform my career and crack Microsoft at 52 LPA."
},
{
name: "Akhil Padi",
role: "Quality Engineer - 18 LPA",
image: "/assets/logos/Profile (3).png",
review: "The hands-on projects and personalized guidance at BAOIAM helped me get placed as a Quality Engineer at 18 LPA."
},
{
name: "Isha Vardhan",
role: "Software Developer - 5 LPA",
image: "/assets/logos/Profile (1).png",
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
//========================= faq=================================================================================
// ================= FAQ Accordion =================

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
//=============================================CTA===========================================================

// // ======================================Our Insight=========================================================
// /* Button Click */
// const buttons=document.querySelectorAll("a");

// buttons.forEach(btn=>{
//   btn.addEventListener("click",function(e){
//    e.preventDefault();
//    alert("Coming Soon");
//   });
// });

// /* Gallery Animation */

// const image=document.querySelector(".item");

// image.addEventListener("mouseenter",()=>{
//   image.style.transform="scale(1.02)";
// });

// image.addEventListener("mouseleave",()=>{
//   image.style.transform="scale(1)";
// });


// /* Scroll Reveal */
// const card = document.querySelector(".shadow-xl");

// window.addEventListener("scroll", () => {

//     const top = card.getBoundingClientRect().top;

//     if (top < window.innerHeight - 100) {

//         card.classList.add("opacity-100", "translate-y-0");

//     }

// });

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
