const testimonials = [
  {
    name: "Amit Pandey",
    role: "Microsoft - 52 LPA",
    image: "profile2.jpeg",
    review: "BAOIAM’s mentorship, projects, and placement support helped me transform my career and crack Microsoft at 52 LPA."
  },
  {
    name: "Akhil Padi",
    role: "Quality Engineer - 18 LPA",
    image: "profile2.jpeg",
    review: "The hands-on projects and personalized guidance at BAOIAM helped me get placed as a Quality Engineer at 18 LPA."
  },
  {
    name: "Isha Vardhan",
    role: "Software Developer - 5 LPA",
    image: "profile.jpeg",
    review: "Thanks to BAOIAM structured curriculum and expert interview prep, I gained skills and confidence to land a 5 LPA Software Developer role."
  }
];

let current = 1;

const mainCard = document.getElementById("mainCard");
const leftCard = document.getElementById("leftCard");
const rightCard = document.getElementById("rightCard");

function createCard(data){
  return `
    <div class="card-top">
      <div class="profile">
        <img src="${data.image}" class="avatar" alt="profile">
        <div>
          <div class="name">${data.name}</div>
          <div class="role">${data.role}</div>
        </div>
      </div>
      <div class="stars">★★★★★</div>
    </div>

    <div class="review">“${data.review}”</div>
  `;
}

function showCards(){
  let left = (current - 1 + testimonials.length) % testimonials.length;
  let right = (current + 1) % testimonials.length;

  leftCard.classList.add("fade");
  mainCard.classList.add("fade");
  rightCard.classList.add("fade");

  setTimeout(() => {
    leftCard.innerHTML = createCard(testimonials[left]);
    mainCard.innerHTML = createCard(testimonials[current]);
    rightCard.innerHTML = createCard(testimonials[right]);

    leftCard.classList.remove("fade");
    mainCard.classList.remove("fade");
    rightCard.classList.remove("fade");
  }, 250);
}

leftCard.addEventListener("click", () => {
  current = (current - 1 + testimonials.length) % testimonials.length;
  showCards();
});

rightCard.addEventListener("click", () => {
  current = (current + 1) % testimonials.length;
  showCards();
});

setInterval(() => {
  current = (current + 1) % testimonials.length;
  showCards();
}, 5000);

showCards();
