"use strict";

const $navResponsive = document.getElementById("nav-responsive");
const $buttonMenu = document.getElementById("button-menu");

document.addEventListener("click", (e) => {
  if (e.target === e.target.matches("#button-menu")) {
    $navResponsive.classList.toggle("close");
  }
});
