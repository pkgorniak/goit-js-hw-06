"use strict";

const inputSize = document.querySelector("#font-size-control");
const textSize = document.querySelector("#text");

textSize.style.fontSize = `${inputSize.value}px`;

inputSize.addEventListener("input", (e) => {
  textSize.style.fontSize = `${e.currentTarget.value}px`;
});
