import "../scss/style.scss";
import "vite/dynamic-import-polyfill";

import { injectSvgs } from "./functions";
import "./header";
import "./introduction";
import "./recettes";

document.addEventListener("DOMContentLoaded", () => {
  injectSvgs();
});
