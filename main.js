const body = document.body;
const menuButton = document.querySelector(".nav-toggle");
const navLinks = document.querySelectorAll(".site-nav a");
const form = document.querySelector(".enquiry-form");
const formNote = document.querySelector(".form-note");

function refreshIcons() {
  if (window.lucide) {
    window.lucide.createIcons();
  }
}

function closeMenu() {
  body.classList.remove("menu-open");
  menuButton?.setAttribute("aria-expanded", "false");
  menuButton?.setAttribute("aria-label", "Open menu");
  if (menuButton) {
    menuButton.innerHTML = '<i data-lucide="menu"></i>';
  }
  refreshIcons();
}

menuButton?.addEventListener("click", () => {
  const isOpen = body.classList.toggle("menu-open");
  menuButton.setAttribute("aria-expanded", String(isOpen));
  menuButton.setAttribute("aria-label", isOpen ? "Close menu" : "Open menu");
  menuButton.innerHTML = isOpen ? '<i data-lucide="x"></i>' : '<i data-lucide="menu"></i>';
  refreshIcons();
});

navLinks.forEach((link) => link.addEventListener("click", closeMenu));

form?.addEventListener("submit", () => {
  if (formNote) {
    formNote.textContent = "Sending your enquiry securely to RR Engineering...";
  }
});

document.querySelector("#year").textContent = new Date().getFullYear();
window.addEventListener("load", refreshIcons);
