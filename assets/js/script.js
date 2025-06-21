
document.addEventListener("DOMContentLoaded", function () {
toggleMenu();
	casesSliderInit();
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

    const shouldEnable = window.innerWidth > 768;

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




window.addEventListener('resize', casesSliderInit);




