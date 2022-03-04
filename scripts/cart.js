const cartIcon = document.getElementById('nav-cart-toggler');
const cartContainer = document.getElementById('nav-cart-container');

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('active-cart')
})