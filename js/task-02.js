"use strict";

const ingredients = [
  "Potatoes",
  "Mushrooms",
  "Garlic",
  "Tomatos",
  "Herbs",
  "Condiments",
];

const ingredientsList = document.querySelector("#ingredients");

ingredients.forEach((el) => {
  const newIngredient = document.createElement("li");
  newIngredient.textContent = el;
  newIngredient.setAttribute("class", "item");
  ingredientsList.append(newIngredient);
});
