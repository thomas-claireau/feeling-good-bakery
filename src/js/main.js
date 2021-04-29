import "../scss/style.scss";
import "vite/dynamic-import-polyfill";
import AOS from "aos";
import "aos/dist/aos.css";

import { injectSvgs } from "./functions";
import "./header";
import "./recipes";
import "./map";
import "./footer";

document.addEventListener("DOMContentLoaded", () => {
  injectSvgs();
  AOS.init({
    duration: 600,
  });
});
