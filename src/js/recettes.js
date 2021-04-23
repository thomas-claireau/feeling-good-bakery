import Swiper from "swiper/bundle";
import "swiper/swiper-bundle.css";
import cookies from "../../assets/recettes.json";

import james from "../../assets/img/recettes/james-brownie.png";

document.addEventListener("DOMContentLoaded", () => {
  const recettesContainer = document.querySelector("section.recettes");

  if (!recettesContainer) return;

  const swiperContainer = recettesContainer.querySelector(".swiper-container");
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

  // generate modals
  const modals = document.querySelector("section.modals");

  Object.entries(cookies).forEach((cookie) => {
    modals.innerHTML += generateModal(cookie[0], cookie[1]);
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

  function generateModal(index, data) {
    return `<div class="modal" data-id="${index}">
			<img src="./assets/img/icons/cross-modal.png" alt="close-modal" class="close" />
			<div class="content">
				<div class="cookie">
					<img src="${james}" alt="cookie-${index}" />
				</div>
				<h2>${data.title}</h2>
				<p>
					${data.description}
				</p>
			</div>
	  	</div>`;
  }
});

function closeModal(e) {
  let modal = e.currentTarget.closest(".modal.open");

  if (e.currentTarget.classList.contains("bg"))
    modal = document.querySelector(".modal.open");

  if (!modal) return;

  document.body.classList.remove("--modal-opened");
  modal.classList.remove("open");
}
