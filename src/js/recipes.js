import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
  const recipesContainer = document.querySelector("section.recipes");

  if (!recipesContainer) return;

  const swiperContainer = recipesContainer.querySelector(".swiper-container");
  const swiperPrev = swiperContainer.querySelector(".swiper-prev");
  const swiperNext = swiperContainer.querySelector(".swiper-next");
  const readMore = document.querySelector("button.read-more");
  const bg = document.querySelector("section.bg");

  const swiper = new Swiper(swiperContainer, {
    loop: true,
    navigation: {
      nextEl: swiperNext,
      prevEl: swiperPrev,
    },
  });

  swiper.on("slideChangeTransitionEnd", function () {
    const slide = swiper.slides[swiper.activeIndex];

    readMore.dataset.id = `${slide.dataset.id}`;
  });

  // read more : open selected modal
  readMore.addEventListener("click", () => {
    const modal = document.querySelector(
      `section.modals > .modal[data-id="${readMore.dataset.id}"]`
    );

    if (!modal) return;

    const close = modal.querySelector(".close");

    document.body.classList.add("--modal-opened");
    modal.classList.add("open");

    close.addEventListener("click", closeModal);
  });

  // click outside equal to click bg section
  bg.addEventListener("click", closeModal);
});

function closeModal(e) {
  let modal = e.currentTarget.closest(".modal.open");

  if (e.currentTarget.classList.contains("bg"))
    modal = document.querySelector(".modal.open");

  if (!modal) return;

  document.body.classList.remove("--modal-opened");
  modal.classList.remove("open");
}
