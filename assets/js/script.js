document.addEventListener("DOMContentLoaded", function () {
  toggleMenu();
  casesSliderInit();
  adaptiveBackground();
  reviewsSliderInit();
	handlePopup();
	accordionFunction();
	addAnimationInit();
	horizontalScroll();
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

  const shouldEnable = window.innerWidth > 1024;

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
        slidesPerView: 2.63,
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
   
  }, 150);
}

window.addEventListener("resize", onResize);

const handlePopup = () => {
  const openPopup = () => {
    document.querySelectorAll('[data-open]').forEach(element => {
      element.addEventListener('click', () => {
        const popupName = element.getAttribute('data-open'); 
        const popupTarget = document.querySelector(`[data-popup="${popupName}"]`); 

        if (popupTarget) {
          document.documentElement.classList.add('open-popup');
          popupTarget.classList.add('open-popup'); 
        }
      });
    });
  };

  const closePopup = () => {
    document.querySelectorAll('[data-close]').forEach(element => {
      element.addEventListener('click', () => {
        const popup = element.closest('.popup'); 

        if (popup) {
          popup.classList.remove('open-popup'); 
        }

        if (!document.querySelector('.popup.open-popup')) {
          document.documentElement.classList.remove('open-popup');
        }
      });
    });
  };

  openPopup();
  closePopup();
};
const accordionFunction = () => {
  const accordionItems = document.querySelectorAll(".accord-item");
  accordionItems.forEach((item) => {
		const top = item.querySelector(".accord-item-top");
		if(top){
			top.addEventListener("click", function () {
				item.classList.toggle("active");
			});
		}
  });
};
const addAnimationInit = () => {

	const scrollers = document.querySelectorAll('.marquee');
	if(!window.matchMedia("(prefers-reduced-motion:reduce)").matches){
		addAnimation();
	}
	function addAnimation(){
		scrollers.forEach((scroller) =>{
			scroller.setAttribute("data-animate", true);
			const scrollerInner = scroller.querySelector('.marquee__wrap');
			const scrollerContent = Array.from(scrollerInner.children);
			scrollerContent.forEach(item =>{
				const duplicatedItem = item.cloneNode(true);
				duplicatedItem.setAttribute('aria-hidden', true);
				scrollerInner.appendChild(duplicatedItem);
			});
			
		});
	}
}
// const stopAnimation = () =>{
// 	const wrapper = document.querySelector('.parnters__marquee__wrap');
// 		wrapper.addEventListener('mouseover', () => {
// 			wrapper.style.animationPlayState = 'paused';
// 		});
// 		wrapper.addEventListener('mouseout', () => {
// 			wrapper.style.animationPlayState = 'running';
// 		})
// }

// const horizontalScroll = () => {
//   const process = document.querySelector('.solutions__wrap');
//   if (process) {
//     gsap.registerPlugin(ScrollTrigger);

//     let sections = gsap.utils.toArray('.solutions__item');
// 		const slidesPerRow = 2.5;
// 		const sectionsCount = sections.length;
//     if (sections.length > 3) {
//       ScrollTrigger.matchMedia({
//         "(min-width: 1024px)": function() {
         
// 					process.style.width = `calc(100% * ${sectionsCount})`;
//           sections.forEach(item => item.style.maxWidth = `500px`);
          
//           gsap.to(sections, {
//             xPercent: -100 * (sectionsCount - slidesPerRow),
//             ease: "none",
//             scrollTrigger: {
//               trigger: process,
//               scrub: 1,
//               pin: true,
//               end: () => `+=${(sectionsCount - slidesPerRow) * window.innerWidth / slidesPerRow}`,
//             }
//           });
//         },
//         "(max-width: 1023.9px)": function() {
// 					process.style.width = `calc(100% * ${sectionsCount})`;
//           sections.forEach(item => item.style.width = `100%`);
//           gsap.to(sections, {
//             xPercent: -100 * (sections.length - 1),
//             ease: "none",
//             scrollTrigger: {
//               trigger: process,
//               scrub: 1,
//               pin: true,
//               end: () => "+=" + process.offsetWidth,
//             }
//           });
//         }
//       });
//     }
//   }
// };

const horizontalScroll = () => {
  const process = document.querySelector(".solutions__items");
  const container = document.querySelector(".solutions");

  if (process && container) {
    gsap.registerPlugin(ScrollTrigger);

    const sections = gsap.utils.toArray(".solutions__item");
    const slidesPerRow = 2.5;
    const sectionsCount = sections.length;

    if (sectionsCount > 3) {
      ScrollTrigger.matchMedia({
        "(min-width: 1024px)": function () {
          // Установка ширини блоку, що рухається
          process.style.width = `calc(${sectionsCount} * 500px + ${(sectionsCount - 1) * 40}px)`;

          // Запуск анімації
          gsap.to(process, {
            x: () => `-${(sectionsCount - slidesPerRow) * (500 + 40)}px`,
            ease: "none",
            scrollTrigger: {
              trigger: container,
              scrub: 1,
              pin: true,
              pinSpacing: false, // Не залишає зайвий простір знизу
              end: () => `+=${(sectionsCount - slidesPerRow) * (500 + 40)}`,
            },
          });

          // Додаємо фейковий spacer після блоку, щоб уникнути наїзду контенту
          const fakeSpacer = document.createElement("div");
          fakeSpacer.style.height = `${(sectionsCount - slidesPerRow) * (500 + 40)}px`;
          container.appendChild(fakeSpacer);
        },

        "(max-width: 1023.9px)": function () {
          process.style.width = `calc(${sectionsCount} * 100%)`;
          gsap.to(process, {
            xPercent: -100 * (sectionsCount - 1),
            ease: "none",
            scrollTrigger: {
              trigger: container,
              scrub: 1,
              pin: true,
              end: () => `+=${container.offsetWidth}`,
            },
          });
        },
      });
    }
  }
};
