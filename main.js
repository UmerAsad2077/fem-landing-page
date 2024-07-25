const navToggle = document.querySelector(".mobile-nav-toggle");
const primaryNav = document.querySelector(".primary-navigation");
const body = document.querySelector("body");
const iconHamburger = document.querySelector("[data-icon='hamburger']");
const iconClose = document.querySelector("[data-icon='close']");

navToggle.addEventListener("click", () => {
  primaryNav.toggleAttribute("data-visible");
  body.classList.toggle("no-scroll");

  iconHamburger.classList.toggle("hidden");
  iconClose.classList.toggle("hidden");

  if (primaryNav.hasAttribute("data-visible")) {
    navToggle.setAttribute("aria-expanded", "true");
  } else navToggle.setAttribute("aria-expanded", "false");
});
