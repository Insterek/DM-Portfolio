const links = document.querySelectorAll(".links__button");
links.forEach((item) => {
  item.addEventListener("click", () => {
    const element = document.getElementById(item.getAttribute("data-link"));
    element.scrollIntoView({ behavior: "smooth" });
    burger();
  });
});

window.addEventListener("scroll", () => {
  const navigation = document.querySelector(".open");
  navigation.classList.toggle("scroll", scrollY > 150);
});
