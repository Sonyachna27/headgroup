document.addEventListener("DOMContentLoaded", function () {
  toggleMenu();
  succesfulForm();
  adaptiveBackground();
  reviewsSliderInit();
	handlePopup();
	accordionFunction();
	addAnimationInit();	
	triggerScrollInit();
	triggerCasesInit();
	replaceInDocument();
  scrollBottom();
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
  // 💥 Видаляємо тільки scrollTrigger-и для .solutions__items
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger && trigger.trigger.classList.contains("solutions__items")) {
      trigger.kill();
    }
  });

  const scrollSolutions = document.querySelectorAll(".solutions");
  if (!scrollSolutions.length) return;

  scrollSolutions.forEach((block) => {
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

    gsap.timeline({
      scrollTrigger: {
        trigger: horizontalScrollItems,
        start: "center center",
        pin: horizontalScrollWrapper,
        invalidateOnRefresh: true,
        anticipatePin: 1,
        scrub: 1,
        end: () => "+=" + x(),
      }
    }).fromTo(
      scrollItems,
      { x: 0 },
      { x: () => -x() }
    );
  });
};

const triggerCasesInit = () => {
  ScrollTrigger.getAll().forEach(trigger => {
    if (trigger.trigger && trigger.trigger.classList.contains("cases__items")) {
      trigger.kill();
    }
  });

  if (window.innerWidth <= 1024) return;

  const casesElements = document.querySelectorAll(".cases.main__cases");
  if (casesElements.length === 0) return;

  casesElements.forEach((block, index) => {
    const horizontalScrollWrapper = block.querySelector(".cases__wrap");
    const horizontalScrollItems = horizontalScrollWrapper.querySelector(".cases__items");
    const scrollItems = Array.from(horizontalScrollItems.querySelectorAll(".cases__item"));
    const paginationContainer = block.querySelector(".cases-pagination");

    if (scrollItems.length === 0) return;

    const totalSlides = scrollItems.length;
    const currentSlideEl = document.createElement("span");
    const separatorEl = document.createElement("span");
    const totalEl = document.createElement("span");

    currentSlideEl.classList.add("current-slide");
    separatorEl.textContent = "/";
    totalEl.textContent = totalSlides;
    currentSlideEl.textContent = "1";

    if (paginationContainer) {
      paginationContainer.innerHTML = "";
      paginationContainer.append(currentSlideEl, separatorEl, totalEl);
    }

    const x = () => {
      const scrollItemWidth = scrollItems[0].scrollWidth / 5;
      const totalScroll = horizontalScrollItems.scrollWidth - window.innerWidth;
      const leftOffset = horizontalScrollItems.getBoundingClientRect().left + window.scrollX;
      return scrollItemWidth + totalScroll + leftOffset;
    };

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
          const progress = self.progress;
          const slideIndex = Math.round(progress * (totalSlides - 1)) + 1;
          currentSlideEl.textContent = slideIndex;
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

let resizeTimeout;
window.addEventListener("resize", () => {
  clearTimeout(resizeTimeout);
  resizeTimeout = setTimeout(() => {
    triggerCasesInit();
  }, 300); // debounce
});


const succesfulForm = () => {
  document.addEventListener('wpcf7mailsent', function(event) {
    document.documentElement.classList.add('open-popup');
  }, false);

  document.addEventListener('wpcf7invalid', function(event) {
    const invalidTip = document.querySelector('.wpcf7-not-valid-tip');
    if (invalidTip) {
      const input = invalidTip.closest('.wpcf7-form-control-wrap').querySelector('input, textarea, select');
      if (input) input.focus();
    }
  }, false);
};

const scrollBottom = () => {
  document.querySelectorAll('.scroll_bottom').forEach(btn =>
  btn.addEventListener('click', () =>
    window.scrollBy({ top: window.innerHeight * .9 , behavior: 'smooth' })
  )
);
}