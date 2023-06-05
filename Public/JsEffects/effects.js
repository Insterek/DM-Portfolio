const titles = document.querySelectorAll(".anim-title");
const animTop = document.querySelectorAll(".anim-vision");
window.addEventListener("scroll", checkboxes);
function checkboxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  titles.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    boxTop < triggerBottom
      ? box.classList.add("move-left")
      : box.classList.remove("move-left");
  });
  animTop.forEach((moveTop) => {
    const boxTop = moveTop.getBoundingClientRect().top;
    boxTop < triggerBottom
      ? moveTop.classList.add("visibility")
      : moveTop.classList.remove("visibility");
  });
}
