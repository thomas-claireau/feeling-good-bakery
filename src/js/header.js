document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector("header .burger-menu");

  if (!burgerMenu) return;

  const handle = burgerMenu.querySelector(".handle");
  const navigation = document.querySelector("ul.navigation");

  handle.addEventListener("click", () => {
    handle.classList.toggle("open");
    navigation.classList.toggle("hidden");
  });

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      handle.classList.remove("open");
      navigation.classList.add("hidden");
    }
  });
});
