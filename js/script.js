const navMenu = document.querySelector(".header__menu");
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");

openNav.onclick = () => {
    navMenu.classList.add("open");
};
closeNav.onclick = () => {
    navMenu.classList.remove("open");
}