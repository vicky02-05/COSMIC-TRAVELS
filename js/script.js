// Toggle mobile menu
function toggleMenu() {
  const nav = document.querySelector("nav ul");
  nav.classList.toggle("show");
}

// Smooth scrolling for navigation links
document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      targetElement.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Form submission handling
const form = document.querySelector("form");
form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = form.querySelector('input[placeholder="Your Name"]').value.trim();
  const email = form.querySelector('input[placeholder="Email Address"]').value.trim();
  const message = form.querySelector('textarea[placeholder="Message"]').value.trim();

  if (!name || !email || !message) {
    alert("Please fill out all fields before submitting.");
    return;
  }

  alert(`Thank you, ${name}! Your message has been sent.`);
  form.reset();
});

// Attach toggleMenu to a button (if you have a menu button)
const menuButton = document.querySelector(".menu-button");
if (menuButton) {
  menuButton.addEventListener("click", toggleMenu);
}