const cartIcon = document.getElementById('nav-cart-toggler');
const cartContainer = document.getElementById('nav-cart-container');

const main = document.querySelector("#main");

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('active-cart')
})

// close cart on click outside of cart
// window.addEventListener('click', e => e.target === cartContainer ? cartContainer.classList.remove('active-cart') : false)