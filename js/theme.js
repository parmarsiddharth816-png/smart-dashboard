let dark = true;
document.addEventListener("keydown", e => {
  if (e.key === "d") {
    dark = !dark;
    document.body.style.background = dark ? "#0f172a" : "#f1f5f9";
    document.body.style.color = dark ? "white" : "black";
  }
});
