const menuToggle = document.querySelector(".menu-toggle");
const navLinks = document.querySelector(".nav-links");

menuToggle.addEventListener("click", () => {
  const isOpen = navLinks.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "✕" : "☰";
});

navLinks.querySelectorAll("a").forEach(link => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

// Filter the menu cards by category.
const filterButtons = document.querySelectorAll(".filter");
const foodCards = document.querySelectorAll(".food-card");

filterButtons.forEach(button => {
  button.addEventListener("click", () => {
    filterButtons.forEach(item => item.classList.remove("active"));
    button.classList.add("active");
    const selected = button.dataset.filter;

    foodCards.forEach(card => {
      card.classList.toggle(
        "hidden",
        selected !== "all" && card.dataset.category !== selected
      );
    });
  });
});

// Demo add-to-order interaction.
const toast = document.querySelector(".toast");
let toastTimer;

document.querySelectorAll(".add-button").forEach(button => {
  button.addEventListener("click", () => {
    const itemName = button.getAttribute("aria-label").replace("Add ", "");
    toast.textContent = `${itemName} added to your order ✨`;
    toast.classList.add("show");
    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => toast.classList.remove("show"), 2200);
  });
});
