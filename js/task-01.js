"use strict";

const categoryItem = document.querySelectorAll("#categories .item");

console.log("Number of categories: " + categoryItem.length);

categoryItem.forEach((el) => {
  console.log("Category: " + el.querySelector("h2").textContent);
  console.log("Elements: " + el.querySelectorAll("ul li").length);
});
