const MenuBar = document.querySelector(".menu-bar");
const MenuNav = document.querySelector(".menu-navigation");

MenuBar.addEventListener("click", function () {
    MenuNav.classList.toggle("menu-active");
});