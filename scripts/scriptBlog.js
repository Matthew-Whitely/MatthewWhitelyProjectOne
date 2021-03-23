const arrowDown = document.querySelector(".arrowDown");
const posts = document.querySelector(".posts");
const arrowUp = document.querySelector(".arrowUp");
const postsId = document.querySelector("#posts");
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const subMenu = document.querySelector(".subMenu");

const myBlogApp = {};

myBlogApp.init = () => {
  myBlogApp.revealContent();
  myBlogApp.hideContent();
  myBlogApp.daBurgerOnBlog();
};

myBlogApp.revealContent = () => {
  arrowDown.addEventListener("click", function () {
    posts.classList.remove("hidden");
    arrowDown.classList.add("hidden");
    arrowUp.classList.remove("hidden");
  });
};
myBlogApp.hideContent = () => {
  arrowUp.addEventListener("click", function () {
    posts.classList.add("hidden");
    arrowDown.classList.remove("hidden");
    arrowUp.classList.add("hidden");
  });
};
myBlogApp.daBurgerOnBlog = () => {
  hamburgerMenu.addEventListener("click", function () {
    subMenu.classList.toggle("subMenu1");
  });
};
myBlogApp.init();
