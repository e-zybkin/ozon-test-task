import Progress from "./progress.js";

const block = document.querySelector(".progress");

const input = document.querySelector(".progress__input");
const animateBtn = document.getElementById("animate");
const hideBtn = document.getElementById("hide");

const progress = new Progress(".template__progress");
const view = progress.render();

block.prepend(view);

input.addEventListener("change", () => {
  progress.setValue(input.value);
});

hideBtn.addEventListener("change", () => {
  progress.setHidden(hideBtn.checked);
});

animateBtn.addEventListener("change", () => {
  progress.setAnimated(animateBtn.checked);
});
