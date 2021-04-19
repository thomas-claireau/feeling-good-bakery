document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector("header .burger-menu");
  const handle = burgerMenu.querySelector(".handle");

  handle.addEventListener("click", () => {
    handle.classList.toggle("open");
  });
});
