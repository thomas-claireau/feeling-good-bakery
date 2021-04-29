document.addEventListener("DOMContentLoaded", () => {
  const footer = document.querySelector("footer");

  if (!footer) return;

  const date = footer.querySelector(".date");
  const now = new Date();
  date.textContent = now.getFullYear();

  document.onreadystatechange = function () {
    if (document.readyState == "complete") {
      const switchs = footer.querySelectorAll(".switch");

      switchs.forEach((item) => {
        const firstSpan = item.querySelector("span:first-child");
        const width = firstSpan.getBoundingClientRect().width;

        console.log(width);
      });
    }
  };
});
