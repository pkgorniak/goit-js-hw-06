"use strict";

const counterValue = document.querySelector("#value");
const decrementValue = document.querySelector('[data-action="decrement"]');
const incrementValue = document.querySelector('[data-action="increment"]');

counterValue.textContent = 0;

decrementValue.addEventListener("click", () => {
  counterValue.textContent = --counterValue.textContent;
});

incrementValue.addEventListener("click", () => {
  counterValue.textContent = ++counterValue.textContent;
});
