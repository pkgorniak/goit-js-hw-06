"use strict";

const loginForm = document.querySelector(".login-form");

loginForm.addEventListener("submit", (e) => {
  e.preventDefault();

  const {
    elements: { email, password },
  } = e.currentTarget;

  if (email.value === "" || password.value === "") {
    return alert("Please fill in all the fields!");
  }

  console.log(
    `${email.name}: ${email.value}, ${password.name}: ${password.value}`
  );

  e.currentTarget.reset();
});
