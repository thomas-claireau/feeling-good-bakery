import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
  const recettesContainer = document.querySelector("section.recettes");

  if (!recettesContainer) return;

  const swiperContainer = recettesContainer.querySelector(".swiper-container");
  const swiperPrev = swiperContainer.querySelector(".swiper-prev");
  const swiperNext = swiperContainer.querySelector(".swiper-next");
  const readMore = document.querySelector("a.read-more");

  const swiper = new Swiper(swiperContainer, {
    loop: true,
    navigation: {
      nextEl: swiperNext,
      prevEl: swiperPrev,
    },
  });

  swiper.on("slideChangeTransitionEnd", function () {
    const slide = swiper.slides[swiper.activeIndex];

    readMore.href = `#${slide.dataset.id}`;
  });
});
