const panel = document.querySelector(".navigation__list");
const menu = document.querySelector(".navigation__bar");
const lineOne = document.querySelector(".line-one");
const lineTwo = document.querySelector(".line-two");
const lineThree = document.querySelector(".line-three");

const burger = function () {
  panel.classList.toggle("moveon");
  lineOne.classList.toggle("first");
  lineTwo.classList.toggle("second");
  lineThree.classList.toggle("third");
};

menu.addEventListener("click", burger);
