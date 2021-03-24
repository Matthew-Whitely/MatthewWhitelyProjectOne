const hamburgerMenu = document.querySelector(".hamburgerMenu");
const subMenu = document.querySelector(".subMenu");

hamburgerMenu.addEventListener("click", function () {
  subMenu.classList.toggle("subMenu1");
});
