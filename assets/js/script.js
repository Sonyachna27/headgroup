document.addEventListener("DOMContentLoaded", function () {
  toggleMenu();
  adaptiveBackground();
  reviewsSliderInit();
	handlePopup();
	accordionFunction();
	addAnimationInit();	
	triggerScrollInit();
	triggerCasesInit();
	replaceInDocument();
});
const replaceInDocument = () => {
  // const regex = /( в| і| у| з| до| на| та| а| о| й| від| із| при| про| за| що| але)\s+/g; 
  const regex = /(?:\s|&nbsp;)(в|і|у|з|до|на|та|а|о|й|від|із|при|про|за|що|але)\s+/gi;
  const elements = document.querySelectorAll("p, li, h1, h2, h3, h4, h5");
  elements.forEach((el) => {
    el.innerHTML = el.innerHTML.replace(regex, " $1&nbsp;");
  });
};


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


let reviewsSwiper = null;

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


const triggerScrollInit = () => {
	const scrollSolutions = document.querySelectorAll(".solutions");
	if(!scrollSolutions) return;
  if (window.solutionsScrollInit === true) return;
window.solutionsScrollInit = true;

  window.listGsapTimeline = [];
  window.listGsapTimeInit = true;

  scrollSolutions.forEach((block, index) => {
    const horizontalScrollWrapper = block.querySelector(".solutions__wrap");
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
          trigger: horizontalScrollItems,
          start: "center center",
          pin: horizontalScrollWrapper,
          invalidateOnRefresh: true,
          anticipatePin: 1,
          scrub: 1,
          end: () => "+=" + x(),
					// end: "+=" + scrollItems.length * 50 + "%",
        },

      }
    );
  }
);
}

// const triggerCasesInit = () => {
//   const casesElements = document.querySelectorAll(".cases.main__cases");
//   if (casesElements.length === 0) return;

//   ScrollTrigger.getAll().forEach(trigger => trigger.kill());

//   casesElements.forEach((block, index) => {
//     const horizontalScrollWrapper = block.querySelector(".cases__wrap");
//     const horizontalScrollItems = horizontalScrollWrapper.querySelector(".cases__items");
//     const scrollItems = Array.from(horizontalScrollItems.querySelectorAll(".cases__item"));
//     const paginationContainer = block.querySelector(".cases-pagination");

//     if (scrollItems.length === 0) return;

    
//     const totalSlides = scrollItems.length;
//     const currentSlideEl = document.createElement("span");
//     const separatorEl = document.createElement("span");
//     const totalEl = document.createElement("span");

//     currentSlideEl.classList.add("current-slide");
//     separatorEl.textContent = "/";
//     totalEl.textContent = totalSlides;

//     currentSlideEl.textContent = "1";
//     paginationContainer.innerHTML = "";
//     paginationContainer.append(currentSlideEl, separatorEl, totalEl);

//     // 🔁 обчислюємо відстань для скролу
//     const x = () => {
//       const scrollItemWidth = scrollItems[0].scrollWidth / 5;
//       const totalScroll = horizontalScrollItems.scrollWidth - window.innerWidth;
//       const leftOffset = horizontalScrollItems.getBoundingClientRect().left + window.scrollX;
//       return scrollItemWidth + totalScroll + leftOffset;
//     };

//     // 🧭 Створюємо GSAP таймлайн
//     const timeline = gsap.timeline({
//       scrollTrigger: {
//         trigger: horizontalScrollItems,
//         start: "center center",
//         pin: horizontalScrollWrapper,
//         scrub: 1,
//         anticipatePin: 1,
//         invalidateOnRefresh: true,
//         end: () => "+=" + x(),
//         pinSpacing: true,
//         onUpdate: (self) => {
//           // 🔄 Оновлюємо пагінацію
//           const progress = self.progress; // від 0 до 1
//           const slideIndex = Math.round(progress * (totalSlides - 1)) + 1;
//           currentSlideEl.textContent = slideIndex;
//         },
//       },
//     });

//     timeline.fromTo(
//       scrollItems,
//       { x: 0 },
//       { x: () => -x() }
//     );
//   });
// };
const triggerCasesInit = () => {
  const casesElements = document.querySelectorAll(".cases.main__cases");
  if (casesElements.length === 0) return;

  ScrollTrigger.getAll().forEach(trigger => trigger.kill());

  casesElements.forEach((block, index) => {
    const horizontalScrollWrapper = block.querySelector(".cases__wrap");
    const horizontalScrollItems = horizontalScrollWrapper.querySelector(".cases__items");
    const scrollItems = Array.from(horizontalScrollItems.querySelectorAll(".cases__item"));
    const paginationContainer = block.querySelector(".cases-pagination");

    if (scrollItems.length === 0) return;

    const isMobileOrTablet = window.innerWidth >= 1024;

    // 🔢 Створюємо пагінацію лише для моб/планшетів
    let currentSlideEl = null;
    if (isMobileOrTablet && paginationContainer) {
      const totalSlides = scrollItems.length;
      currentSlideEl = document.createElement("span");
      const separatorEl = document.createElement("span");
      const totalEl = document.createElement("span");

      currentSlideEl.classList.add("current-slide");
      separatorEl.textContent = "/";
      totalEl.textContent = totalSlides;

      currentSlideEl.textContent = "1";
      paginationContainer.innerHTML = "";
      paginationContainer.append(currentSlideEl, separatorEl, totalEl);
    }

    // 🔁 Обчислюємо відстань скролу
    const x = () => {
      const scrollItemWidth = scrollItems[0].scrollWidth / 5;
      const totalScroll = horizontalScrollItems.scrollWidth - window.innerWidth;
      const leftOffset = horizontalScrollItems.getBoundingClientRect().left + window.scrollX;
      return scrollItemWidth + totalScroll + leftOffset;
    };

    // 🧭 GSAP timeline
    const timeline = gsap.timeline({
      scrollTrigger: {
        trigger: horizontalScrollItems,
        start: "center center",
        pin: horizontalScrollWrapper,
        scrub: 1,
        anticipatePin: 1,
        invalidateOnRefresh: true,
        end: () => "+=" + x(),
        pinSpacing: true,
        onUpdate: (self) => {
          if (isMobileOrTablet && currentSlideEl) {
            const progress = self.progress;
            const slideIndex = Math.round(progress * (scrollItems.length - 1)) + 1;
            currentSlideEl.textContent = slideIndex;
          }
        },
      },
    });

    timeline.fromTo(
      scrollItems,
      { x: 0 },
      { x: () => -x() }
    );
  });
};
