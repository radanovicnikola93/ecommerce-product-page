const menuIcon = document.getElementById("nav-menu-toggler");
const pageLinks = document.getElementById("nav-page-links");
const closeIcon = document.getElementById("nav-close-menu");

// OPEN MENU
menuIcon.addEventListener('click', openMenu);

function openMenu() {
    pageLinks.classList.add("active-mobile");
}

// CLOSE MENU
closeIcon.addEventListener('click', closeMenu);

function closeMenu() {
    pageLinks.classList.remove("active-mobile");
}
