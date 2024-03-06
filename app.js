const hamburger = document.querySelector(".hamburger img");
const navbar = document.querySelector(".header__nav__mobile");
const navlist = document.querySelector(".nav__list__mobile");
const logo = document.querySelector(".logo");

let isOpen = true;
hamburger.addEventListener("click", () => {
  if (isOpen) {
    hamburger.setAttribute("src", "./images/icon-close.svg");
    logo.classList.add("removed");
    navlist.classList.add("active");
    navbar.classList.add("active");
  } else {
    hamburger.setAttribute("src", "./images/icon-hamburger.svg");
    logo.classList.remove("removed");
    navlist.classList.remove("active");
    navbar.classList.remove("active");
  }
  isOpen = !isOpen;
});

// Slider

const sliderControlRightDesktop = document.querySelector(
  ".slide__right__desktop"
);
const sliderControlLeftDesktop = document.querySelector(
  ".slide__left__desktop"
);

const sliderControlRightMobile = document.querySelector(
  ".slide__right__mobile"
);
const sliderControlLeftMobile = document.querySelector(".slide__left__mobile");

const sliderImageDesktop = document.querySelector(".slider__img__desktop");

const sliderImageMobile = document.querySelector(".slider__img__mobile");

const contentHeader = document.querySelector(".slider__content__header");

const contentDescription = document.querySelector(
  ".slider__content__description"
);

const sliderDesktopImages = [
  "images/desktop-image-hero-1.jpg",
  "images/desktop-image-hero-2.jpg",
  "images/desktop-image-hero-3.jpg",
];

const sliderMobileImages = [
  "images/mobile-image-hero-1.jpg",
  "images/mobile-image-hero-2.jpg",
  "images/mobile-image-hero-3.jpg",
];

const contentHeaders = [
  "Discover innovative ways to decorate",
  "We are available all across the globe",
  "Manufactured with the best materials",
];

const contentParagraphs = [
  "We provide unmatched quality,comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.",
  "With stores all over the world,it's easy for you to find furniture for your home or place of business. Locally, we're in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
  "Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
];
let currentSlide = 0;

sliderControlRightDesktop.addEventListener("click", () => {
  sliderImageDesktop.style.transform = "translate(-50%)";
  sliderImageDesktop.style.opacity = "0%";
  contentHeader.style.transform = "translate(100%)";
  contentDescription.style.transform = "translate(50%)";

  currentSlide++;

  if (currentSlide >= sliderDesktopImages.length) {
    currentSlide = 0;
  }

  setTimeout(() => {
    sliderImageDesktop.style.opacity = "100%";
    sliderImageDesktop.style.transform = "translate(0%)";
    contentHeader.style.transform = "translate(0%)";
    contentDescription.style.transform = "translate(0%,0%)";

    sliderImageDesktop.setAttribute("src", sliderDesktopImages[currentSlide]);
    contentHeader.innerHTML = `<h2 class="slider__content__header">${contentHeaders[currentSlide]}</h2>`;
    contentDescription.innerHTML = `<p class="slider__content__description">${contentParagraphs[currentSlide]}</p>`;
  }, 200);
});

currentSlide = 3;

sliderControlLeftDesktop.addEventListener("click", () => {
  sliderImageDesktop.style.transform = "translate(-50%)";
  sliderImageDesktop.style.opacity = "0%";
  contentHeader.style.transform = "translate(100%)";
  contentDescription.style.transform = "translate(50%)";

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = sliderDesktopImages.length - 1;
  }

  setTimeout(() => {
    sliderImageDesktop.style.opacity = "100%";
    sliderImageDesktop.style.transform = "translate(0%)";
    contentHeader.style.transform = "translate(0%)";
    contentDescription.style.transform = "translate(0%,0%)";

    sliderImageDesktop.setAttribute("src", sliderDesktopImages[currentSlide]);
    contentHeader.innerHTML = `<h2 class="slider__content__header">${contentHeaders[currentSlide]}</h2>`;
    contentDescription.innerHTML = `<p class="slider__content__description">${contentParagraphs[currentSlide]}</p>`;
  }, 200);
});

currentSlide = 0;
sliderControlRightMobile.addEventListener("click", () => {
  sliderImageMobile.style.opacity = "0%";
  contentHeader.style.transform = "translate(0,100%)";
  contentDescription.style.transform = "translate(0,20%)";

  currentSlide++;

  if (currentSlide >= sliderDesktopImages.length) {
    currentSlide = 0;
  }

  setTimeout(() => {
    sliderImageMobile.style.opacity = "100%";
    sliderImageMobile.style.transform = "translate(0%)";
    contentHeader.style.transform = "translate(0%)";
    contentDescription.style.transform = "translate(0%,0%)";

    sliderImageMobile.setAttribute("src", sliderMobileImages[currentSlide]);
    contentHeader.innerHTML = `<h2 class="slider__content__header">${contentHeaders[currentSlide]}</h2>`;
    contentDescription.innerHTML = `<p class="slider__content__description">${contentParagraphs[currentSlide]}</p>`;
  }, 300);
});

sliderControlLeftMobile.addEventListener("click", () => {
  sliderImageMobile.style.opacity = "0%";
  contentHeader.style.transform = "translate(0,100%)";
  contentDescription.style.transform = "translate(0,20%)";

  currentSlide--;

  if (currentSlide < 0) {
    currentSlide = sliderDesktopImages.length - 1;
  }

  setTimeout(() => {
    sliderImageMobile.style.opacity = "100%";
    sliderImageMobile.style.transform = "translate(0%)";
    contentHeader.style.transform = "translate(0%)";
    contentDescription.style.transform = "translate(0%,0%)";

    sliderImageMobile.setAttribute("src", sliderMobileImages[currentSlide]);
    contentHeader.innerHTML = `<h2 class="slider__content__header">${contentHeaders[currentSlide]}</h2>`;
    contentDescription.innerHTML = `<p class="slider__content__description">${contentParagraphs[currentSlide]}</p>`;
  }, 300);
});
