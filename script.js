const hamburgerMenu = document.querySelector(".hamburgerMenu");
const subMenu = document.querySelector(".subMenu");
const harperNav = document.querySelector("#harper");
const modal = document.querySelectorAll(".modal");
const overlay = document.querySelectorAll(".overlay");
const ranImage = document.querySelector(".ranImg");
const harperButton = document.querySelector("#harperButton");
const SectionFourHarperBtn = document.querySelector(
  "#sectionFourHarpersTravels"
);
const surfImg = document.querySelector(".surfingImg");
// const imgContain = document.querySelector(".waveImg");
const moreInfo = document.querySelector(".moreInfo");
const harperFavs = document.querySelector("#sectionFourHarpersfavourites");
const factoryImage = document.querySelector(".factory");
const moreInfo1 = document.querySelector(".moreInfo1");

// console.log(harperFavs);
// console.log(surfImg);
// console.log(SectionFourHarperBtn);
// console.log(imgContain);
// console.log(moreInfo);
// console.log(ranImage);
// console.log(harperButton);
// console.log(hamburgerMenu);
// console.log(subMenu);
// console.log(harper);
// console.log(modal);
// console.log(overlay);

hamburgerMenu.addEventListener("click", function () {
  subMenu.classList.toggle("subMenu1");
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
  let rImg = Math.floor(Math.random() * 8) + 1;

  ranImage.src = `harper-designAndAssets/assets/home-image-${rImg}.jpg`;
  if (rImg == 2) {
    ranImage.src = `harper-designAndAssets/assets/home-image-1.jpg`;
  }
};

harperButton.addEventListener("click", randomizeImage);

//   e.preventDeault();
// });

// harperButton.addEventListener("click", function (e) {
//   e.preventDefault();
//   const randomizeImage = function () {
//     let rImg = Math.floor(Math.random() * 8) + 1;

//     ranImage.src = `harper-designAndAssets/assets/home-image-${rImg}.jpg`;
//     if (rImg == 2) {
//       ranImage.src = `harper-designAndAssets/assets/home-image-1.jpg`;
//     }
//   };

// });

//WHAT I WANT THIS TO DO IS WHEN THE BUTTON IS PRESSED TEXT IS DYNAMICALLY ADDED TO THE SCREEN WHERE THE IMAGE WAS
//THIS FUNCTION WILL TOGGLE THE HIDDEN VALUE
// const hideSurfImg = function () {
//   surfImg.classList.toggle("surfingImageHide");
// };
// //EVENT HANDLER FOR THE HIDDEN VALUE
// SectionFourHarperBtn.addEventListener("click", hideSurfImg);

SectionFourHarperBtn.addEventListener("click", function () {
  surfImg.classList.toggle("surfingImageHide");
  moreInfo.classList.toggle("hidden");
  moreInfo.classList.toggle("moreInfo1");
});

harperFavs.addEventListener("click", function () {
  factoryImage.classList.toggle("surfingImageHide");
  moreInfo1.classList.toggle("hidden");
  moreInfo1.classList.toggle("moreInfo");
});

//Image Gallery

// let galleryImages = document.querySelectorAll("imageGallery");
arrowLeft.addEventListener("click", postsHide);
