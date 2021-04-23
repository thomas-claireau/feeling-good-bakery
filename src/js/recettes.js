import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";

document.addEventListener("DOMContentLoaded", () => {
  const recettesContainer = document.querySelector("section.recettes");

  if (!recettesContainer) return;

  const swiperContainer = recettesContainer.querySelector(".swiper-container");
  const swiperPrev = swiperContainer.querySelector(".swiper-prev");
  const swiperNext = swiperContainer.querySelector(".swiper-next");
  const readMore = document.querySelector("button.read-more");

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

  // generate modals
  const modals = document.querySelector("section.modals");

  fetch("../../assets/recettes.json")
    .then((res) => res.json())
    .then((data) => {
      Object.entries(data).forEach((cookie) => {
        modals.innerHTML += generateModal(cookie[0], cookie[1]);
      });
    });

  function generateModal(index, data) {
    return `<div class="modal">
			<img src="./assets/img/icons/cross-modal.png" alt="close-modal" class="close" />
			<div class="content">
				<img src="./assets/img//recettes/${index}.png" alt="cookie-${index}" />
				<h2>${data.title}</h2>
				<p>
					${data.description}
				</p>
			</div>
	  	</div>`;
  }
});
