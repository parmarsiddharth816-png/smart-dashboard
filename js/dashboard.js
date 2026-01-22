// dashboard.js
// Dashboard logic + card hover animation

document.addEventListener("DOMContentLoaded", () => {
  console.log("Dashboard ready");

  const cards = document.querySelectorAll(".card");

  cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
      card.style.transform = "translateY(-8px) scale(1.03)";
      card.style.transition = "0.3s ease";
    });

    card.addEventListener("mouseleave", () => {
      card.style.transform = "translateY(0) scale(1)";
    });
  });
});
