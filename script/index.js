const heroImg = document.querySelector(".main-section-article-hero");
const desktopHeroImg = "./assets/image-web-3-desktop.jpg";
const mobileHeroImg = "./assets/image-web-3-mobile.jpg";

window.addEventListener("resize", () => {
  if (window.innerWidth >= 768) {
    heroImg.src = desktopHeroImg;
  } else {
    heroImg.src = mobileHeroImg;
  }
});

if (window.innerWidth >= 768) {
  heroImg.src = desktopHeroImg;
} else {
  heroImg.src = mobileHeroImg;
}
