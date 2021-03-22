const arrowDown = document.querySelector(".arrowDown");
const posts = document.querySelector(".posts");
const arrowUp = document.querySelector(".arrowUp");

arrowDown.addEventListener("click", function () {
  posts.classList.remove("hidden");
  arrowDown.classList.add("hidden");
  arrowUp.classList.remove("hidden");
});

arrowUp.addEventListener("click", function () {
  posts.classList.add("hidden");
  arrowDown.classList.remove("hidden");
  arrowUp.classList.add("hidden");
});
