"use strict";

document.addEventListener("DOMContentLoaded", initApp);

function initApp() {
  const hamburger = document.querySelector(".navbar__hamburger");
  const dropdownMenu = document.querySelector(".navbar__links");

  // Changes hamburger menu button into an 'X' and opens mobile menu
  hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("toggle");
    dropdownMenu.classList.toggle("open");
  });

  // Clicking on mobile menu links will cause the menu to close
  const navLinks = document.querySelectorAll(".link-js");
  for (let i = 0; i < navLinks.length; i++) {
    let link = navLinks[i];
    link.addEventListener("click", () => {
      hamburger.classList.toggle("toggle");
      dropdownMenu.classList.toggle("open");
    });
  }
}
