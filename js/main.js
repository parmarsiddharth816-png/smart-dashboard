// main.js
// Landing page animation + redirect safety

document.addEventListener("DOMContentLoaded", () => {
  console.log("Smart Dashboard loaded");

  // Simple hero animation
  const hero = document.querySelector(".hero");
  if (hero) {
    hero.style.opacity = 0;
    hero.style.transform = "scale(0.95)";

    setTimeout(() => {
      hero.style.transition = "all 1s ease";
      hero.style.opacity = 1;
      hero.style.transform = "scale(1)";
    }, 200);
  }
});
