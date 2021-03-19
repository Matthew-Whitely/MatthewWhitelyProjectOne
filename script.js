const hamburgerMenu = document.querySelector(".hamburgerMenu");
const subMenu = document.querySelector(".subMenu");
const harperNav = document.querySelector("#harper");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");
console.log(hamburgerMenu);
console.log(subMenu);
console.log(harper);
console.log(modal);
console.log(overlay);

hamburgerMenu.addEventListener("click", function () {
  subMenu.classList.add("subMenu1");
});

const openModal = function () {
  modal[0].classList.remove("hidden");
  overlay[0].classList.remove("hidden");
};
const closeModal = function () {
  modal[0].classList.add("hidden");
  overlay[0].classList.add("hidden");
};

harper.addEventListener("click", openModal);
overlay[0].addEventListener("click", closeModal);
