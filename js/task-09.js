"use strict";

const body = document.querySelector("body");
const colorName = document.querySelector(".color");
const colorChange = document.querySelector(".change-color");

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

colorChange.addEventListener("click", () => {
  body.style.backgroundColor = getRandomHexColor();
  colorName.textContent = getRandomHexColor();
});
