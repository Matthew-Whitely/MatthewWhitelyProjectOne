const hamburgerMenu = document.querySelector(".hamburgerMenu");
const subMenu = document.querySelector(".subMenu");
const ranImage = document.querySelector(".ranImg");
const harperButton = document.querySelector("#harperButton");
const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");
const sfButton = document.querySelectorAll(".sfButton");
const surfImg = document.querySelector(".surfingImg");
const moreInfo = document.querySelector(".moreInfo");
const factoryImage = document.querySelector(".factory");
const moreInfo1 = document.querySelector(".moreInfo1");

const myHomePage = {};

myHomePage.init = () => {
  myHomePage.eventImgRandom();
  myHomePage.daBurger();
  myHomePage.imgOverlay();
  myHomePage.openingModal();
  myHomePage.closingModal();
};
//hamburger menu
myHomePage.daBurger = () => {
  hamburgerMenu.addEventListener("click", function () {
    subMenu.classList.toggle("subMenu1");
  });
};
//getting a random number for the image at the very top of page
myHomePage.randomizeImage = function () {
  let rImg = Math.floor(Math.random() * 8) + 1;

  ranImage.src = `harper-designAndAssets/assets/home-image-${rImg}.jpg`;
  if (rImg == 2) {
    ranImage.src = `harper-designAndAssets/assets/home-image-1.jpg`;
  }
};

//Randomize on the harper button the top image
myHomePage.eventImgRandom = () => {
  harperButton.addEventListener("click", myHomePage.randomizeImage);
};
//putting an overlay on iamges
let intViewportWidth = window.innerWidth; //MDN
myHomePage.imgOverlay = () => {
  sfButton.forEach(function (button) {
    button.addEventListener("click", function () {
      if (button === sfButton[0] && intViewportWidth > 960) {
        surfImg.classList.toggle("surfingImageHide");
        moreInfo.classList.toggle("hidden");
        moreInfo.classList.toggle("moreInfo1");
      } else if (button === sfButton[1] && intViewportWidth > 960) {
        factoryImage.classList.toggle("surfingImageHide");
        moreInfo1.classList.toggle("hidden");
        moreInfo1.classList.toggle("moreInfo");
      } else if (button === sfButton[0] && intViewportWidth < 960) {
        //breaking it up also seeing if surfImg has this calss
        if (surfImg.classList.contains("surfingImageHide")) {
        } else surfImg.scrollIntoView(); //THIS IS FREAKING AMAZING
        surfImg.classList.toggle("surfingImageHide");
        moreInfo.classList.toggle("hidden");
        moreInfo.classList.toggle("moreInfo1");
        //breaking it up again seeing if the viewport is less then 960
      } else if (button === sfButton[1] && intViewportWidth < 960) {
        //checking if the factory image container the clase
        if (factoryImage.classList.contains("surfingImageHide")) {
        } else factoryImage.scrollIntoView();
        factoryImage.classList.toggle("surfingImageHide");
        moreInfo1.classList.toggle("hidden");
        moreInfo1.classList.toggle("moreInfo");
      }
    });
  });
};
//HEY DAVID  as you can see in the above code there is no {} after the else and it works...but if i do but the {} around the else it does not work...please explain if you have time..Cheers!!!

myHomePage.openModal = function () {
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
};
myHomePage.closeModal = function () {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
};
myHomePage.openingModal = () => {
  harper.addEventListener("click", myHomePage.openModal);
};
myHomePage.closingModal = () => {
  overlay.addEventListener("click", myHomePage.closeModal);
};
myHomePage.init();
