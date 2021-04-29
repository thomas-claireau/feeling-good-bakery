document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");

  if (!footer) return;

  const date = footer.querySelector(".date");
  const now = new Date();
  date.textContent = now.getFullYear();
});
