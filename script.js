// Mobile menu toggle
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

if (menuToggle && navbar) {
  menuToggle.addEventListener("click", () => {
    navbar.classList.toggle("open");
  });

  // Close menu when clicking a nav link (on mobile)
  navbar.querySelectorAll("a").forEach((link) => {
    link.addEventListener("click", () => {
      navbar.classList.remove("open");
    });
  });
}

// Year in footer
const yearSpan = document.getElementById("year");
if (yearSpan) {
  yearSpan.textContent = new Date().getFullYear();
}

// Theme toggle (light / dark mode)
const themeToggle = document.getElementById("themeToggle");

function setTheme(mode) {
  if (mode === "light") {
    document.body.classList.add("light-mode");
    if (themeToggle) themeToggle.textContent = "☀️";
  } else {
    document.body.classList.remove("light-mode");
    if (themeToggle) themeToggle.textContent = "🌙";
  }
}

function loadThemeFromStorage() {
  const saved = localStorage.getItem("theme-mode");
  if (!saved) return;
  setTheme(saved);
}

if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    const isLight = document.body.classList.contains("light-mode");
    const newMode = isLight ? "dark" : "light";
    setTheme(newMode);
    localStorage.setItem("theme-mode", newMode);
  });
}

// initialize
loadThemeFromStorage();
