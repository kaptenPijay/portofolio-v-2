// Navbar Fixed
window.onscroll = () => {
  const header = document.querySelector("header");
  const fixedNav = header.offsetTop;

  window.pageYOffset > fixedNav
    ? header.classList.add("navbar-fixed")
    : header.classList.remove("navbar-fixed");
};

// Hamburger
const hamburger = document.querySelector("#hamburger");
const navMenu = document.querySelector("#nav-menu");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("hamburger-active");

  if (navMenu.classList.contains("invisible")) {
    navMenu.classList.remove("opacity-0", "invisible");
    navMenu.classList.add("opacity-100", "visible");
  } else {
    navMenu.classList.add("opacity-0", "invisible");
    navMenu.classList.remove("opacity-100", "visible");
  }
});
