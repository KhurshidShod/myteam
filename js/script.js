const navMenu = document.querySelector(".header__menu");
const openNav = document.getElementById("openNav");
const closeNav = document.getElementById("closeNav");
const nav = document.querySelector("header");

openNav.onclick = () => {
    navMenu.classList.add("open");
};
closeNav.onclick = () => {
    navMenu.classList.remove("open");
}
window.onscroll = () => {
    if(pageYOffset > 80) {
        nav.classList.add("shrink")
    } else {
        nav.classList.remove("shrink")
    }
}