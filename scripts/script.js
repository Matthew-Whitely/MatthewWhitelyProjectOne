const hamburgerMenu = document.querySelector(".hamburgerMenu");
const subMenu = document.querySelector(".subMenu");

const ranImage = document.querySelector(".ranImg");
const harperButton = document.querySelector("#harperButton");
// const SectionFourHarperBtn = document.querySelector(
//   "#sectionFourHarpersTravels"
// );
// const harperFavs = document.querySelector("#sectionFourHarpersfavourites");
const sfButton = document.querySelectorAll(".sfButton");
const surfImg = document.querySelector(".surfingImg");
// const imgContain = document.querySelector(".waveImg");
const moreInfo = document.querySelector(".moreInfo");

const factoryImage = document.querySelector(".factory");
const moreInfo1 = document.querySelector(".moreInfo1");

const myHomePage = {};

myHomePage.init = () => {
  myHomePage.eventImgRandom();
  myHomePage.daBurger();
  myHomePage.imgOverlay();
};

myHomePage.daBurger = () => {
  hamburgerMenu.addEventListener("click", function () {
    subMenu.classList.toggle("subMenu1");
  });
};

myHomePage.randomizeImage = function () {
  let rImg = Math.floor(Math.random() * 8) + 1;

  ranImage.src = `harper-designAndAssets/assets/home-image-${rImg}.jpg`;
  if (rImg == 2) {
    ranImage.src = `harper-designAndAssets/assets/home-image-1.jpg`;
  }
};
myHomePage.eventImgRandom = () => {
  harperButton.addEventListener("click", myHomePage.randomizeImage);
};
//putting an overlay
myHomePage.imgOverlay = () => {
  sfButton.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button === sfButton[0]) {
        surfImg.classList.toggle("surfingImageHide");
        moreInfo.classList.toggle("hidden");
        moreInfo.classList.toggle("moreInfo1");
      } else {
        factoryImage.classList.toggle("surfingImageHide");
        moreInfo1.classList.toggle("hidden");
        moreInfo1.classList.toggle("moreInfo");
      }
    });
  });
};
//*------HEY DAVID....I get that the above and below code are the same just wondering because im only call one eventHandler if thats better??

// SectionFourHarperBtn.addEventListener("click", function () {
//   surfImg.classList.toggle("surfingImageHide");
//   moreInfo.classList.toggle("hidden");
//   moreInfo.classList.toggle("moreInfo1");
// });

// harperFavs.addEventListener("click", function () {
//   factoryImage.classList.toggle("surfingImageHide");
//   moreInfo1.classList.toggle("hidden");
//   moreInfo1.classList.toggle("moreInfo");
// });

myHomePage.init();
// const modal = document.querySelectorAll(".modal");
// const overlay = document.querySelectorAll(".overlay");
// const openModal = function () {
//   modal[0].classList.remove("hidden");
//   overlay[0].classList.remove("hidden");
// };
// const closeModal = function () {
//   modal[0].classList.add("hidden");
//   overlay[0].classList.add("hidden");
// };

// harper.addEventListener("click", openModal);
// overlay[0].addEventListener("click", closeModal);

//Randomize on the harper button the top image
