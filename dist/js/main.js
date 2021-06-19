"use strict";

// Making sure the DOM is finished loading so the app can work off the body of the DOM
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", initApp); // once loaded, it calls ready function
} else {
  initApp(); // if it's already loaded, then ready function is called
}

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
