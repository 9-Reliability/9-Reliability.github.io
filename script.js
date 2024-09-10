// Navbar
const openMenuBtn = document.querySelector(".openMenuBtn");
const closeMenuBtn = document.querySelector(".closeMenuBtn");
const menu = document.querySelector(".menu-options");
openMenuBtn.onclick = () => {
  menu.classList.add("active-nav");
};
closeMenuBtn.onclick = () => {
  menu.classList.remove("active-nav");
};

const offlineMode = document.querySelector('.offlineMode');

if (navigator.onLine) {
    offlineMode.style.display = 'none';
} else {
    offlineMode.style.display = 'block';
}