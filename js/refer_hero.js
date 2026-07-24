// refer_hero.js
// Small, beginner-friendly script for the "Refer To Your Friends and Earn" hero section.

// 1. Count-up animation for the "8,000+ Referrer's" number
window.addEventListener("DOMContentLoaded", function () {
  var countEl = document.getElementById("referHeroCount");
  var targetValue = 8000; // change this number if the real referrer count changes
  var currentValue = 0;
  var step = targetValue / 60; // 60 steps for a smooth ~1.2s animation

  var countTimer = setInterval(function () {
    currentValue = currentValue + step;

    if (currentValue >= targetValue) {
      currentValue = targetValue;
      clearInterval(countTimer);
    }

    countEl.textContent = Math.floor(currentValue).toLocaleString();
  }, 20);
});

// 2. "Refer Now" button click handler
var referBtn = document.getElementById("referHeroCtaBtn");

referBtn.addEventListener("click", function () {
  // Replace this with your real refer flow (open modal, go to /refer page, etc.)
  console.log("Refer Now clicked — open your referral flow here.");
});
