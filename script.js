// Arooj Fatima Portfolio — editable JavaScript
const body = document.body;
const themeToggle = document.getElementById("themeToggle");
const menuToggle = document.getElementById("menuToggle");
const nav = document.getElementById("nav");

// ---------------------------
// DARK / LIGHT THEME
// ---------------------------
const savedTheme = localStorage.getItem("arooj-theme");
if (savedTheme === "light") {
  body.classList.add("light");
  themeToggle.textContent = "☀";
} else {
  themeToggle.textContent = "☾";
}

themeToggle.addEventListener("click", () => {
  body.classList.toggle("light");
  const light = body.classList.contains("light");
  localStorage.setItem("arooj-theme", light ? "light" : "dark");
  themeToggle.textContent = light ? "☀" : "☾";
});

// ---------------------------
// MOBILE MENU
// ---------------------------
menuToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
  menuToggle.textContent = nav.classList.contains("open") ? "×" : "☰";
});

document.querySelectorAll(".nav a").forEach(link => {
  link.addEventListener("click", () => {
    nav.classList.remove("open");
    menuToggle.textContent = "☰";
  });
});

// ---------------------------
// SCROLL REVEAL ANIMATION
// ---------------------------
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("visible");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.12 });

document.querySelectorAll(".reveal").forEach(el => observer.observe(el));

// ---------------------------
// FLOATING PARTICLES
// ---------------------------
const particles = document.querySelector(".particles");
for (let i = 0; i < 35; i++) {
  const p = document.createElement("span");
  p.className = "particle";
  p.style.left = `${Math.random() * 100}%`;
  p.style.animationDelay = `${Math.random() * 12}s`;
  p.style.animationDuration = `${8 + Math.random() * 12}s`;
  p.style.opacity = `${0.08 + Math.random() * 0.25}`;
  particles.appendChild(p);
}

// ---------------------------
// CURSOR GLOW
// ---------------------------
const glow = document.querySelector(".cursor-glow");
window.addEventListener("pointermove", (e) => {
  glow.style.left = `${e.clientX}px`;
  glow.style.top = `${e.clientY}px`;
});

// ---------------------------
// CURRENT YEAR
// ---------------------------
document.getElementById("year").textContent = new Date().getFullYear();
