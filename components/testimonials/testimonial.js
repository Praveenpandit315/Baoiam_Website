const testimonials = [
{
name:"Akhil Padi",
role:"Quality Engineer - 18 LPA",
review:"The hands-on projects and personalized guidance at BAOIAM helped me get placed as a Quality Engineer at 18 LPA.",
avatar:"profile2.jpeg"
},

{
name:"Isha Vardhan",
role:"Software Developer - 5 LPA",
review:"Thanks to BAOIAM structured curriculum and expert interview prep, I gained the skills and confidence to land a 5 LPA Software Developer role.",
avatar:"profile.jpeg"
},

{
name:"Amit Pandey",
role:"Microsoft - 52 LPA",
review:"BAOIAM’s mentorship, projects, and placement support helped me transform my career and crack Microsoft at 52 LPA.",
avatar:"profile2.jpeg"
}
];

let current = 1;
let interval;

const left=document.getElementById("leftCard");
const center=document.getElementById("mainCard");
const right=document.getElementById("rightCard");

function cardHTML(data){
return `
<div class="card-top">

<div class="profile">
<img class="avatar" src="${data.avatar}">
<div>
<div class="name">${data.name}</div>
<div class="role">${data.role}</div>
</div>
</div>

<div class="stars">★★★★★</div>

</div>

<div class="review">
"${data.review}"
</div>
`;
}

function render(){

let leftIndex=(current-1+testimonials.length)%testimonials.length;
let rightIndex=(current+1)%testimonials.length;

left.innerHTML=cardHTML(testimonials[leftIndex]);
center.innerHTML=cardHTML(testimonials[current]);
right.innerHTML=cardHTML(testimonials[rightIndex]);

}

function nextSlide(){
current=(current+1)%testimonials.length;
render();
}

function previousSlide(){
current=(current-1+testimonials.length)%testimonials.length;
render();
}

function resetTimer(){
clearInterval(interval);
interval=setInterval(nextSlide,5000);
}

left.addEventListener("click",()=>{
previousSlide();
resetTimer();
});

right.addEventListener("click",()=>{
nextSlide();
resetTimer();
});

center.addEventListener("click",()=>{
resetTimer();
});

render();
resetTimer();
