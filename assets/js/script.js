document.addEventListener("DOMContentLoaded", function () {
  toggleMenu();
  casesSliderInit();
  adaptiveBackground();
  reviewsSliderInit();
	handlePopup();
	accordionFunction();
	addAnimationInit();
	triggerScrollInit();
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
//     					markers: true,
// 							start: "top top",
// 							 end: () =>
// 								"+=" +
// 								(document.querySelector(".solutions__wrap").offsetWidth -
// 									document.documentElement.clientWidth),
// 							invalidateOnRefresh: true
//               // end: () => `+=${(sectionsCount - slidesPerRow) * window.innerWidth / slidesPerRow}`,
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
// 							start: "top top",
// 							 end: () =>
// 								"+=" +
// 								(document.querySelector(".solutions__wrap").offsetWidth -
// 									document.documentElement.clientWidth),
// 							invalidateOnRefresh: true
//               // end: () => "+=" + process.offsetWidth,
//             }
//           });
//         }
//       });
//     }
//   }
// };


const triggerScrollInit = () => {
  if (window.listGsapTimeInit === true) return;

  window.listGsapTimeline = [];
  window.listGsapTimeInit = true;

  document.querySelectorAll(".solutions").forEach((block, index) => {
    const horizontalScrollWrapper = document.querySelector(".solutions__wrap");
    const horizontalScrollItems = horizontalScrollWrapper.querySelector(".solutions__items");
    const scrollItems = Array.from(horizontalScrollItems.querySelectorAll(".solutions__item"));
    if (scrollItems.length === 0) return;

    const x = () => {
      const scrollItemWidth = scrollItems[0].scrollWidth / 5;			
      const totalScroll = horizontalScrollItems.scrollWidth - window.innerWidth;
      const leftOffset = horizontalScrollItems.getBoundingClientRect().left + window.scrollX;
      return scrollItemWidth + totalScroll + leftOffset;
    };

    gsap.timeline().fromTo(
      scrollItems,
      { x: 0 },
      {
        x: () => -x(),
        scrollTrigger: {
          trigger: horizontalScrollWrapper,
          start: "center center",
          pin: block,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          scrub: 1,
          end: () => "+=" + x(),
          markers: true,
					// pinSpacing: "margin"
        },

      }
    );
  }
);
}

// const triggerScrollInit = () => {
// 	gsap.registerPlugin(ScrollTrigger);

// const block = document.querySelector('.solutions');
// const scrollWrapper = block.querySelector('.solutions__wrap');
// const scrollItemsContainer = scrollWrapper.querySelector('.solutions__items');
// const scrollItems = scrollItemsContainer.querySelectorAll('.solutions__item');

// if (block && scrollItems.length > 0) {
//   // Розрахунок позицій і довжини прокрутки
//   // let r = -window.innerHeight / 2 + 220;
//   let r = -window.innerHeight / 2 + 500;
//   let i = -1 * (scrollWrapper.scrollWidth - window.innerWidth + 20 * scrollItems.length);
//   let s = scrollWrapper.scrollWidth - window.innerWidth + 160;

//   if (window.innerWidth < 640) {
//     i = -1 * (scrollWrapper.scrollWidth - window.innerWidth + 10 * scrollItems.length);
// 		// r = -window.innerHeight / 2 + 240;
// 		r = -window.innerHeight / 2 + 700;
// 		s = scrollWrapper.scrollWidth - window.innerWidth + 100;
//   }

//   // Створення анімації скролу
//   gsap.to(scrollItems, {
//     x: () => i,
//     ease: "none",
//     scrollTrigger: {
//       trigger: scrollWrapper,
//       pin: true,
//       start: `${r} center`,
//       scrub: 1,
//       end: () => `+=${s}`,
// 			pinSpacing: true,
// 			// pinSpacing: "margin"
//       markers: true // можеш увімкнути для дебагу
//     }
//   });
// }

// }