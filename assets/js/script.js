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
    const horizontalScrollWrapper = block.querySelector(".solutions__wrap");
    const horizontalScrollItems = horizontalScrollWrapper.querySelector(".solutions__items");
    const scrollItems = Array.from(horizontalScrollItems.querySelectorAll(".solutions__item"));
    if (scrollItems.length === 0) return;

    const x = () => {
      const scrollItemWidth = scrollItems[0].scrollWidth / 3;
			
      const totalScroll = horizontalScrollItems.scrollWidth - window.innerWidth;
      const leftOffset = horizontalScrollItems.getBoundingClientRect().left + window.scrollX;
			console.log(leftOffset);
      return scrollItemWidth + totalScroll + leftOffset;
    };

    gsap.timeline().fromTo(
      scrollItems,
      { x: 0 },
      {
        x: () => -x(),
        scrollTrigger: {
          trigger: horizontalScrollWrapper,
          // start: "center bottom",
          start: "center center",
          pin: block,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          scrub: 1,
          end: () => "+=" + x(),
          markers: false
        },
       
      }
    );
  });
}

// document.addEventListener("DOMContentLoaded", () => {
//   const container = document.querySelector(".solutions__items");
//   const section = document.querySelector(".solutions");

//   let isLocked = false;
//   let scrollAmount = 0;
// 	const percent = 30;
// const scrollStep = (container.scrollWidth * percent) / 100;
//   // const scrollStep = 100;
//   let scrolling = false;

//   const lockScroll = () => (document.body.style.overflow = "hidden");
//   const unlockScroll = () => (document.body.style.overflow = "");

//   const getMaxScroll = () => container.scrollWidth - container.clientWidth;

//   const smoothScroll = (direction) => {
//     if (scrolling) return;

//     scrolling = true;
//     const distance = direction === "next" ? scrollStep : -scrollStep;

//     container.scrollBy({
//       left: distance,
//       behavior: "smooth",
//     });

//     setTimeout(() => {
//       scrolling = false;
//       checkScrollEnd();
//     }, 300); // час повинен відповідати scroll-behavior
//   };

//   const handleScrollControl = (e) => {
//     if (!isLocked) return;

//     e.preventDefault();

//     const delta = e.deltaY || -e.wheelDelta;

//     if (delta > 0) {
//       smoothScroll("next");
//     } else {
//       smoothScroll("prev");
//     }
//   };

//   const handleKey = (e) => {
//     if (!isLocked) return;

//     if (e.key === "ArrowRight" || e.key === "ArrowDown") {
//       smoothScroll("next");
//       e.preventDefault();
//     } else if (e.key === "ArrowLeft" || e.key === "ArrowUp") {
//       smoothScroll("prev");
//       e.preventDefault();
//     }
//   };

//   const checkScrollEnd = () => {
//     const scrollLeft = container.scrollLeft;
//     const maxScroll = getMaxScroll();

//     if (scrollLeft >= maxScroll - 5 || scrollLeft <= 5) {
//       unlockScroll();
//       isLocked = false;
//     }
//   };

//   const activateScrollLock = () => {
//     lockScroll();
//     isLocked = true;
//   };

//   const observer = new IntersectionObserver(
//     (entries) => {
//       entries.forEach((entry) => {
//         if (entry.isIntersecting && !isLocked) {
//           activateScrollLock();
//         }
//       });
//     },
//     { threshold: 0.5 }
//   );

//   observer.observe(section);

//   // Події
//   window.addEventListener("wheel", handleScrollControl, { passive: false });
//   window.addEventListener("keydown", handleKey);
// });
