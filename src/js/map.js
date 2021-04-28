document.addEventListener("DOMContentLoaded", () => {
  const mapContainer = document.querySelector("section.map-container");

  if (!mapContainer) return;

  const threshold = 0.1;
  const options = {
    root: null,
    rootMargi: "0px",
    threshold,
  };

  const observer = new IntersectionObserver(handleIntersect, options);

  const ingredients = mapContainer.querySelectorAll(".ingredients .ingredient");

  ingredients.forEach((ingredient) => observer.observe(ingredient));

  function handleIntersect(entries, observer) {
    entries.forEach((entry) => {
      if (entry.intersectionRatio > threshold) {
        entry.target.classList.add("visible");
      } else {
        entry.target.classList.remove("visible");
      }
    });
  }
});
