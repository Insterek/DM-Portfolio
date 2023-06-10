const titles = document.querySelectorAll(".anim-title");
window.addEventListener("scroll", checkboxes);
function checkboxes() {
  const triggerBottom = (window.innerHeight / 5) * 4;
  titles.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;
    boxTop < triggerBottom
      ? box.classList.add("move-left")
      : box.classList.remove("move-left");
  });
}
