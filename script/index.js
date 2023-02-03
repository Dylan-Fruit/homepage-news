const heroImg = document.querySelector(".main-section-article-hero");
const desktopHeroImg = "./assets/image-web-3-desktop.jpg";
const mobileHeroImg = "./assets/image-web-3-mobile.jpg";
const burgerMenu = document.querySelector(".header-nav-burger");
const closeBurgerMenu = document.querySelector(".header-nav-burger-close");
const navbar = document.querySelector(".header-nav");
const navbarUl = document.querySelector(".header-nav-ul");

let menuIsOpen = false;

window.onload = function () {
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      heroImg.src = desktopHeroImg;
    } else {
      heroImg.src = mobileHeroImg;
    }
  });
};

if (window.innerWidth >= 768) {
  heroImg.src = desktopHeroImg;
} else {
  heroImg.src = mobileHeroImg;
}

burgerMenu.addEventListener("click", () => {
  if (!menuIsOpen) {
    navbar.style.display = "flex";
    closeBurgerMenu.style.display = "block";
    burgerMenu.style.display = "none";
    navbarUl.style.display = "flex";
    menuIsOpen = true;
  } else {
    navbar.style.display = "none";
    closeBurgerMenu.style.display = "none";
    burgerMenu.style.display = "block";
    navbarUl.style.display = "none";
    menuIsOpen = false;
  }
});

closeBurgerMenu.addEventListener("click", () => {
  navbar.style.display = "flex";
  closeBurgerMenu.style.display = "none";
  navbarUl.style.display = "none";
  burgerMenu.style.display = "block";
  menuIsOpen = false;
});
