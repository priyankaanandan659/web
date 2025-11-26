// Responsive menu toggle
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if (bar) {
  bar.addEventListener('click', () => {
    if (nav.style.display === "flex") {
      nav.style.display = "none";
    } else {
      nav.style.display = "flex";
      nav.style.flexDirection = "column";
      nav.style.position = "absolute";
      nav.style.top = "60px";
      nav.style.right = "20px";
      nav.style.background = "#e3e6f3";
      nav.style.padding = "20px";
      nav.style.borderRadius = "8px";
    }
  });
}