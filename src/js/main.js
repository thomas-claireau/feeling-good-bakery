import "../scss/style.scss";
import "vite/dynamic-import-polyfill";
import AOS from "aos";
import "aos/dist/aos.css";

import { injectSvgs } from "./functions";
import "./header";
import "./recipes";
import "./footer";

import "./components/modal";

document.addEventListener("DOMContentLoaded", () => {
  injectSvgs();
  AOS.init({
    duration: 600,
  });

  const anchors = document.querySelectorAll('a[href^="#');

  anchors.forEach((anchor) => {
    anchor.addEventListener("click", (e) => {
      e.preventDefault();
      const href = anchor.href;
      const id = href.split("#")[1];
      const target = document.getElementById(id);

      target.scrollIntoView({ behavior: "smooth" });
    });
  });
});

document.onreadystatechange = function () {
  if (document.readyState == "complete") {
    document.body.classList.remove("--loading");
  }
};

setTimeout(() => {
  document.body.classList.remove("--loading");
}, 4000);
