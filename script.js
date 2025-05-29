// LOADER ANIMADO
const loaderNumber = document.getElementById("loader-number");
const loader = document.getElementById("loader");
const mainContent = document.getElementById("main-content");
const loaderContent = document.querySelector(".loader-content");

const steps = [10, 34, 62, 87, 100];
let index = 0;

function updateLoader() {
  if (index < steps.length) {
    loaderContent.classList.remove("show");

    setTimeout(() => {
      loaderNumber.textContent = `${steps[index]}%`;
      loaderContent.classList.add("show");

      index++;
      setTimeout(updateLoader, 800);
    }, 200);
  } else {
    loader.classList.add("fade-out");
    setTimeout(() => {
      loader.style.display = "none";
      mainContent.style.display = "block";
    }, 600);
  }
}

window.addEventListener("load", () => {
  loaderContent.classList.add("show");
  setTimeout(updateLoader, 800);
});


// MENÚ DESPLEGABLE
const toggle = document.getElementById("menu-toggle");
const menu = document.getElementById("side-menu");
const closeBtn = document.getElementById("close-btn");

toggle.addEventListener("click", () => {
  menu.classList.add("active");
  toggle.classList.add("hidden");
});

closeBtn.addEventListener("click", () => {
  menu.classList.remove("active");
  toggle.classList.remove("hidden");
});

// Submenú "Trabajos"
const submenuToggle = document.querySelector('.submenu-toggle');
const submenuParent = submenuToggle.closest('.has-submenu');

submenuToggle.addEventListener('click', () => {
  submenuParent.classList.toggle('open');
});

