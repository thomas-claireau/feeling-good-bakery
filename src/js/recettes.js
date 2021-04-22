import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
  const recettes = document.querySelector("section.recettes");

  if (!recettes) return;

  const swiperContainer = recettes.querySelector(".swiper-container");
  const swiperPrev = swiperContainer.querySelector(".swiper-prev");
  const swiperNext = swiperContainer.querySelector(".swiper-next");

  new Swiper(swiperContainer, {
    loop: true,
    navigation: {
      nextEl: swiperNext,
      prevEl: swiperPrev,
    },
  });
});
