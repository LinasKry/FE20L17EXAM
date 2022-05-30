const swiper = new Swiper(".swiper", {
  // Optional parameters
  direction: "horizontal",
  spaceBetween: 30,
  autoplay: {
    delay: 3000,
    pauseOnMouseEnter: true,
    disableOnInteraction: false,
  },
  loop: true,

  // If we need pagination
  pagination: {
    el: ".swiper-pagination",
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  breakpoints: {
    600: {
      slidesPerView: 2,
      slidesPerGroup: 2,
    },
    1000: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 1,
    },
  },
});
