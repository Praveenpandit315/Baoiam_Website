
const cards = document.querySelectorAll('.card');

cards.forEach(card=>{


card.addEventListener('mouseenter',()=>{


card.style.boxShadow =
'0 15px 35px rgba(0,0,0,0.1)';


});


card.addEventListener('mouseleave',()=>{


card.style.boxShadow='none';


});


});
