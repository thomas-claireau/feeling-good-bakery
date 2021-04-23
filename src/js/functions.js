import SVGInjector from "svg-injector";

export function injectSvgs() {
  const svgs = document.querySelectorAll("img.js-inject-me");

  SVGInjector(svgs);
}

export async function loadPngImg(path) {
  const img = await import(`../../assets/img/${path}.png`).then(
    (img) => img.default
  );

  return img;
}
