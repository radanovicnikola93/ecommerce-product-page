const menuIcon = document.getElementById("nav-menu-toggler");
const pageLinks = document.getElementById("nav-page-links");

menuIcon.addEventListener('click', openMenu);

function openMenu(e) {
    pageLinks.classList.add("active-mobile");
}
