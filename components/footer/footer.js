const links = document.querySelectorAll("a");

links.forEach(link=>{

link.addEventListener("mouseenter",()=>{

link.style.transition=".3s";

});

});
