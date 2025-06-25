
document.addEventListener("DOMContentLoaded", function () {
toggleMenu();
	casesSliderInit();
	adaptiveBackground();
});

const toggleMenu = () =>{
	const htmlElement = document.querySelector("html");
	const burgerMenus = document.querySelectorAll(".burger");
	if(!burgerMenus) return;
  const navLinks = document.querySelectorAll("nav a");
	burgerMenus.forEach((burgerMenu) =>{
		burgerMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    htmlElement.classList.toggle("open");
  });}
);
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
}
const casesSliderInit = (() => {
  let swiperInstance = null;

  return () => {
    const casesSliderWrap = document.querySelector('.casesSlider');
    if (!casesSliderWrap) return;

    const shouldEnable = window.innerWidth > 1240;

    if (shouldEnable && !swiperInstance) {
      swiperInstance = new Swiper(casesSliderWrap, {
        slidesPerView: 1,
        spaceBetween: 10,
        pagination: {
          el: ".cases-pagination",
          type: "fraction",
        },
      });
    }

    if (!shouldEnable && swiperInstance) {
      swiperInstance.destroy(true, false);
      swiperInstance = null;
    }
  };
})();
const adaptiveBackground = () => {
  const serviceItems = document.querySelectorAll('.services__item');

  serviceItems.forEach((service) => {
    const servicesWrap = service.parentElement;
    const servicesWidth = service.offsetWidth;
    const parentWidth = servicesWrap.offsetWidth;

    if (window.innerWidth > 1240 && servicesWidth === parentWidth) {
      service.classList.add("clipAll");
    } else {
      service.classList.remove("clipAll");
    }
  });
};

let resizeTimeout;

function onResize() {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    casesSliderInit();
    adaptiveBackground();
  }, 150); // или 200 мс
}
window.addEventListener('resize', onResize);




