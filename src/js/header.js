document.addEventListener("DOMContentLoaded", () => {
  const burgerMenu = document.querySelector("header .burger-menu");

  if (!burgerMenu) return;

  const handle = burgerMenu.querySelector(".handle");
  const hero = document.querySelector("section.hero");
  const navigation = burgerMenu.querySelector('ul[role="navigation"]');

  handle.addEventListener("click", () => {
    handle.classList.toggle("open");
    navigation.classList.toggle("hidden");
  });

  addNavigationHeight();

  window.addEventListener("resize", addNavigationHeight);

  window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
      handle.classList.remove("open");
      navigation.classList.add("hidden");
    }
  });

  function addNavigationHeight() {
    const bottom = Math.floor(hero.getBoundingClientRect().bottom);

    navigation.style.height = bottom + "px";
  }
});
