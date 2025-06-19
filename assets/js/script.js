
document.addEventListener("DOMContentLoaded", function () {
toggleMenu();
	
});

const toggleMenu = () =>{
	const htmlElement = document.querySelector("html");
	const burgerMenu = document.querySelector(".burger");
	if(!burgerMenu) return;
  const navLinks = document.querySelectorAll("nav a");
	const headerBg =  document.querySelector('.header__top');
	const headerMobileWrap =  document.querySelector('.header__top__mobile');
	burgerMenu.addEventListener("click", (event) => {
    event.stopPropagation();
    htmlElement.classList.toggle("open");
  });
	headerBg.addEventListener('click', (event) =>{
		if (!headerMobileWrap.contains(event.target)) {
      htmlElement.classList.remove("open");
    }
	})
  navLinks.forEach((link) => {
    link.addEventListener("click", () => {
      htmlElement.classList.remove("open");
    });
  });
}


