
document.addEventListener("DOMContentLoaded", function () {
toggleMenu();
	
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


