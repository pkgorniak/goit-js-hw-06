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

  const loginData = {
    email: email.value,
    password: password.value,
  };

  console.log(loginData);

  e.currentTarget.reset();
});
