"use strict";

const inputText = document.querySelector("#name-input");
const outputText = document.querySelector("#name-output");

inputText.addEventListener("input", (e) => {
  if (e.currentTarget.value === "") {
    outputText.textContent = "Anonymous";
  } else {
    outputText.textContent = e.currentTarget.value;
  }
});
