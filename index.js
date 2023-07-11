// TODO add js for swithcing images
// TODO add js for add to cart entries

// handle navbar

const navbarOpen = document.querySelector(".primary-navbar-menu-btn");
const navbarClose = document.querySelector(".primary-navbar-menu-x-btn");
const navbar = document.querySelector("#primary-navbar-menu");

navbarOpen.addEventListener("click", () => {
    const visibility = navbar.getAttribute("data-visible");
    if (visibility === "false") {
        navbar.setAttribute("data-visible", true);
    }
})

navbarClose.addEventListener("click", () => {
    const visibility = navbar.getAttribute("data-visible");
    if (visibility === "true") {
        navbar.setAttribute("data-visible", false);
    }
})

// handle quantity
const minusSign = document.getElementById("minus-icon");
const addSign = document.getElementById("plus-icon");
const counterQuantity = document.getElementById("quantity-counter");

minusSign.addEventListener("click", () => {
    let counter = counterQuantity.innerText;
    counter = parseInt(counter);
    if (counter > 0) {
        counter = counter - 1;
    }
    counterQuantity.innerText = counter;
});

addSign.addEventListener("click", () => {
    let counter = counterQuantity.innerText;
    counter = parseInt(counter);
    counter = counter + 1;
    counterQuantity.innerText = counter;
});

// handle add to cart
function handleCartProductDetails(quantity) {
    const cartCost = document.getElementById("cart-cost");
    const cartQuantity = document.getElementById("cart-quantity");
    const cartNetCost = document.getElementById("cart-net-cost");

    const prodPrice = document.getElementById("actual-price");
    cartCost.innerHTML = `${prodPrice.innerText}&nbsp;`;
    cartQuantity.innerHTML = `${quantity}&nbsp;`;
    cartNetCost.innerText = `\$${parseInt(prodPrice.innerText.match(/(\d+)/)) * parseInt(quantity)}`

    // handle cart empty or not cases
    const constCartIsEmpty = document.querySelector(".cart-is-empty-style");
    constCartIsEmpty.setAttribute("data-cart-is-empty", false);

    const constCartIsNotEmpty = document.querySelector(".cart-is-not-empty-style");
    constCartIsNotEmpty.setAttribute("data-cart-is-not-empty", true);
}

const addToCart = document.querySelector(".add-cart-btn");
const cartQuantity = document.getElementById("navbar-cart-quantity");

addToCart.addEventListener("click", () => {
    let quantityInCounter = counterQuantity.innerText;
    quantityInCounter = parseInt(quantityInCounter);

    let quantityInCart = cartQuantity.innerText;
    quantityInCart = parseInt(quantityInCart);

    if (quantityInCounter == 0) {
        cartQuantity.innerText = quantityInCounter + quantityInCart + 1;
    } else {
        cartQuantity.innerText = quantityInCounter + quantityInCart;
    }

    handleCartProductDetails(cartQuantity.innerText);

    let isEmpty = cartQuantity.getAttribute("data-cart-empty");
    if (isEmpty === "true") {
        cartQuantity.setAttribute("data-cart-empty", false);
    }
})

//cart controls
const cartButton = document.querySelector(".navbar-cart-btn");
const cartPopup = document.querySelector(".cart-popup-window");
cartButton.addEventListener("click", () => {
    const cartClicked = cartPopup.getAttribute("data-cart-icon-clicked");
    if (cartClicked === "false") {
        cartPopup.setAttribute("data-cart-icon-clicked", true);
    } else if (cartClicked === "true") {
        cartPopup.setAttribute("data-cart-icon-clicked", false);
    }
})

const cartDeleteBtn = document.querySelector(".cart-product-delete-btn");
cartDeleteBtn.addEventListener("click", () => {
    cartQuantity.innerText = 0;

    const constCartIsEmpty = document.querySelector(".cart-is-empty-style");
    constCartIsEmpty.setAttribute("data-cart-is-empty", true);

    const constCartIsNotEmpty = document.querySelector(".cart-is-not-empty-style");
    constCartIsNotEmpty.setAttribute("data-cart-is-not-empty", false);

    cartQuantity.setAttribute("data-cart-empty", true);
})

// images
