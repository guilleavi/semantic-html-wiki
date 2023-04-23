const hamburgerToggle = document.querySelector(".hamburger-menu__button");
const hamburgerNav = document.querySelector(".hamburger-menu__nav");

hamburgerToggle.addEventListener("click", function () {
  hamburgerNav.classList.toggle("open");
  hamburgerNav.style.display =
    hamburgerNav.style.display === "block" ? "none" : "block";
  this.classList.toggle("toggled");
});

const moreOptionsoggle = document.querySelector(".more-options-menu__button");
const moreOptionsrNav = document.querySelector(".more-options-menu__nav");

moreOptionsoggle.addEventListener("click", function () {
  moreOptionsrNav.classList.toggle("open");
  moreOptionsrNav.style.display =
    moreOptionsrNav.style.display === "block" ? "none" : "block";
  this.classList.toggle("toggled");
});
