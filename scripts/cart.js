const cartIcon = document.getElementById('nav-cart-toggler');
const cartContainer = document.getElementById('nav-cart-container');

const main = document.querySelector("#main");

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('active-cart')
})

main.addEventListener('click', () => {
    cartContainer.classList.remove('active-cart')
})