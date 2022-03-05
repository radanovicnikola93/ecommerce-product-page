// CART CONTAINER
const cartIcon = document.getElementById('nav-cart-toggler');
const cartContainer = document.getElementById('nav-cart-container');
const cartAddedQuantity = document.getElementById("product-quantity-value");
const cartTotalPrice = document.getElementById("product-quantity-total-price");
const cartEmptyBtn = document.getElementById("empty-cart");
const emptyCartToggler = document.getElementById("cart-empty-toggler");
const filledCartToggler = document.getElementById("cart-filled-toggler");

// ADD TO CART CONTAINER 
const decreaseQnt = document.getElementById("quantity__decrease");
const increaseQnt = document.getElementById("quantity__increase");
const quantity = document.getElementById("current-quantity");
const addToCartBtn = document.getElementById('add-to-cart');

const main = document.getElementById('main')

// CART CONTAINER

cartIcon.addEventListener('click', () => {
    cartContainer.classList.toggle('active-cart')
})

// close cart on click outside of cart
main.addEventListener('click', () => {
    cartContainer.classList.remove('active-cart');
})

// ADD TO CART
let currentQnt = 0;

// increase quantity of product
decreaseQnt.addEventListener("click", () => {
    currentQnt--;
    if (currentQnt < 0) {
        currentQnt = 0;
    }
    quantity.textContent = currentQnt;
});

// increase quantity of product
increaseQnt.addEventListener("click", () => {
    currentQnt++;
    quantity.textContent = currentQnt;
});

// add product to cart
addToCartBtn.addEventListener("click", () => {
    if (currentQnt > 0) {
        emptyCartToggler.style.display = "none";
        filledCartToggler.style.display = "block";
        cartContainer.classList.add("active-cart")
        cartAddedQuantity.textContent = currentQnt;
        cartTotalPrice.textContent = currentQnt * 125;
    } else {
        alert("Quantity cannot be 0.")
    }
});

// empty cart from products
cartEmptyBtn.addEventListener("click", () => {
    emptyCartToggler.style.display = "block";
    filledCartToggler.style.display = "none";
})