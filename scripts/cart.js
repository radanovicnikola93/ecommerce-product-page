// CART CONTAINER
const cartIcon = document.getElementById('nav-cart-toggler');
const cartContainer = document.getElementById('nav-cart-container');

// ADD TO CART CONTAINER 
const decreaseQnt = document.getElementById("quantity__decrease");
const increaseQnt = document.getElementById("quantity__increase");
const quantity = document.getElementById("current-quantity");
const addToCartBtn = document.getElementById('add-to-cart');

// CART CONTAINER

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('active-cart')
})

// close cart on click outside of cart
// window.addEventListener('click', e => e.target === cartContainer ? cartContainer.classList.remove('active-cart') : false)

// ADD TO CART
let currentQnt = 0;

decreaseQnt.addEventListener("click", () => {
    currentQnt--;
    if (currentQnt < 0) {
        currentQnt = 0;
    }
    quantity.textContent = currentQnt;
});

increaseQnt.addEventListener("click", () => {
    currentQnt++;
    quantity.textContent = currentQnt;
});



addToCartBtn.addEventListener("click", () => {
    if (currentQnt > 0) {
        console.log(currentQnt);
    } else {
        alert("Quantity cannot be 0.")
    }
});