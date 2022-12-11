"use strict";

const textInput = document.querySelector("#validation-input");

console.log(textInput.value.length);

textInput.addEventListener("blur", (e) => {
  if (e.currentTarget.value.length >= textInput.getAttribute("data-length")) {
    textInput.setAttribute("class", "valid");
  } else {
    textInput.setAttribute("class", "invalid");
  }
});
