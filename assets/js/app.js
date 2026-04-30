// Nav hamburgerburger selections
const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

// Scroll to top selection
const scrollUp = document.querySelector("#scroll-up");

// Select nav links
const navLink = document.querySelectorAll(".nav-link");

// Hamburger menu function
burger.addEventListener("click", () => {
  ul.classList.toggle("show");
});

// Close hamburger menu when a link is clicked
navLink.forEach((link) =>
  link.addEventListener("click", () => {
    ul.classList.remove("show");
  })
);

// scroll to top functionality
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
});

// Typing effect
const textElement = document.getElementById("typing-text");
const textContent = "I'm a researcher at heart and a programmer by profession, with a strong interest in solving real-world problems through technology.";
let index = 0;

function typeEffect() {
  if (index < textContent.length) {
    textElement.textContent += textContent.charAt(index);
    index++;
    setTimeout(typeEffect, 20);
  }
}

if (textElement) {
  typeEffect();
}
