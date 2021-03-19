const hamburgerMenu = document.querySelector(".hamburgerMenu");
const subMenu = document.querySelector(".subMenu");
const harperNav = document.querySelector("#harper");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");
const ranImage = document.querySelector(".ranImg");
const harperButton = document.querySelector("#harperButton");
// console.log(ranImage);
// console.log(harperButton);
// console.log(hamburgerMenu);
// console.log(subMenu);
// console.log(harper);
// console.log(modal);
// console.log(overlay);

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

//Randomize on the harper button the top image

const randomizeImage = function () {
  let rImg = Math.floor(Math.random() * 8);

  ranImage.src = `harper-designAndAssets/assets/home-image-${rImg}.jpg`;
};

harperButton.addEventListener("click", randomizeImage);
// randomizeImage();
