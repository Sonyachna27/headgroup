
// document.addEventListener("DOMContentLoaded", function () {
// toggleMenu();
// 	casesSliderInit();
// 	adaptiveBackground();
// 	reviewsSliderInit();
// });

// const toggleMenu = () =>{
// 	const htmlElement = document.querySelector("html");
// 	const burgerMenus = document.querySelectorAll(".burger");
// 	if(!burgerMenus) return;
//   const navLinks = document.querySelectorAll("nav a");
// 	burgerMenus.forEach((burgerMenu) =>{
// 		burgerMenu.addEventListener("click", (event) => {
//     event.stopPropagation();
//     htmlElement.classList.toggle("open");
//   });}
// );
//   navLinks.forEach((link) => {
//     link.addEventListener("click", () => {
//       htmlElement.classList.remove("open");
//     });
//   });
// }
// const casesSliderInit = (() => {
//   let swiperInstance = null;

//   return () => {
//     const casesSliderWrap = document.querySelector('.casesSlider');
//     if (!casesSliderWrap) return;

//     const shouldEnable = window.innerWidth > 1240;

//     if (shouldEnable && !swiperInstance) {
//       swiperInstance = new Swiper(casesSliderWrap, {
//         slidesPerView: 1,
//         spaceBetween: 10,
//         pagination: {
//           el: ".cases-pagination",
//           type: "fraction",
//         },
//       });
//     }

//     if (!shouldEnable && swiperInstance) {
//       swiperInstance.destroy(true, false);
//       swiperInstance = null;
//     }
//   };
// })();
// const adaptiveBackground = () => {
//   const serviceItems = document.querySelectorAll('.services__item');

//   serviceItems.forEach((service) => {
//     const servicesWrap = service.parentElement;
//     const servicesWidth = service.offsetWidth;
//     const parentWidth = servicesWrap.offsetWidth;

//     if (window.innerWidth > 1240 && servicesWidth === parentWidth) {
//       service.classList.add("clipAll");
//     } else {
//       service.classList.remove("clipAll");
//     }
//   });
// };
// const reviewsSliderInit= () =>{
// 	const reviewsSliderWrap = document.querySelector('.reviewsSlider');
// 	if(!reviewsSliderWrap) return;

// const reviewsSwiper = new Swiper(reviewsSliderWrap, {
//   // Default parameters
//   slidesPerView: 1.3,
//   spaceBetween: 20,
//   // Responsive breakpoints
//   breakpoints: {
    
//     576: {
//       slidesPerView: 1.4,
//     },
//     1024: {
//       slidesPerView: 1.8,
//     },
//     1240: {
//       slidesPerView: 2.57,
//       spaceBetween: 40
//     },
//   },
// 	navigation: {
//     nextEl: '.reviews-button-next',
//     prevEl: '.reviews-button-prev',
//   },

// })
// }

// let resizeTimeout;

// function onResize() {
//   clearTimeout(resizeTimeout);
//   resizeTimeout = setTimeout(() => {
//     casesSliderInit();
//     adaptiveBackground();
//   }, 150); // или 200 мс
// }
// window.addEventListener('resize', onResize);

document.addEventListener("DOMContentLoaded", function () {
  toggleMenu();
  casesSliderInit();
  adaptiveBackground();
  reviewsSliderInit();
});

const toggleMenu = () => {
  const htmlElement = document.querySelector("html");
  const burgerMenus = document.querySelectorAll(".burger");
  if (!burgerMenus.length) return;

  const navLinks = document.querySelectorAll("nav a");

  burgerMenus.forEach((burgerMenu) => {
    burgerMenu.addEventListener("click", (event) => {
      event.stopPropagation();
      htmlElement.classList.toggle("open");
    });
  });

  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
};

// === Swiper контролери ===
let casesSwiper = null;
let reviewsSwiper = null;

const casesSliderInit = () => {
  const casesSliderWrap = document.querySelector(".casesSlider");
  if (!casesSliderWrap) return;

  const shouldEnable = window.innerWidth > 1240;

  if (shouldEnable && !casesSwiper) {
    casesSwiper = new Swiper(casesSliderWrap, {
      slidesPerView: 1,
      spaceBetween: 10,
      pagination: {
        el: ".cases-pagination",
        type: "fraction",
      },
    });
  }

  if (!shouldEnable && casesSwiper) {
    casesSwiper.destroy(true, false);
    casesSwiper = null;
  }
};

const reviewsSliderInit = () => {
  const reviewsSliderWrap = document.querySelector(".reviewsSlider");
  if (!reviewsSliderWrap) return;

  if (reviewsSwiper) {
    reviewsSwiper.destroy(true, false);
    reviewsSwiper = null;
  }

  reviewsSwiper = new Swiper(reviewsSliderWrap, {
    slidesPerView: 1.3,
    spaceBetween: 20,
    breakpoints: {
      576: {
        slidesPerView: 1.4,
      },
      1024: {
        slidesPerView: 1.8,
      },
      1240: {
        slidesPerView: 2.57,
        spaceBetween: 40,
      },
    },
    navigation: {
      nextEl: ".reviews-button-next",
      prevEl: ".reviews-button-prev",
    },
  });
};

const adaptiveBackground = () => {
  const serviceItems = document.querySelectorAll(".services__item");

  serviceItems.forEach((service) => {
    const servicesWrap = service.parentElement;
    if (!servicesWrap) return;

    const servicesWidth = service.offsetWidth;
    const parentWidth = servicesWrap.offsetWidth;

    if (window.innerWidth > 1240 && servicesWidth === parentWidth) {
      service.classList.add("clipAll");
    } else {
      service.classList.remove("clipAll");
    }
  });
};

// === Debounced resize ===
let resizeTimeout;

function onResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    casesSliderInit();
    adaptiveBackground();
  }, 150);
}

window.addEventListener("resize", onResize);
