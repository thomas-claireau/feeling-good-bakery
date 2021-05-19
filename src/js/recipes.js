import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
  const recipesContainer = document.querySelector("section.recipes");

  if (!recipesContainer) return;

  const swiperContainer = recipesContainer.querySelector(".swiper-container");
  const swiperPrev = swiperContainer.querySelector(".swiper-prev");
  const swiperNext = swiperContainer.querySelector(".swiper-next");
  const readMore = document.querySelector("button.read-more");

  const swiper = new Swiper(swiperContainer, {
    loop: true,
    allowTouchMove: false,
    navigation: {
      nextEl: swiperNext,
      prevEl: swiperPrev,
    },
  });

  swiper.on("slideChangeTransitionEnd", function () {
    const slide = swiper.slides[swiper.activeIndex];

    readMore.dataset.id = `${slide.dataset.id}`;
  });
});
