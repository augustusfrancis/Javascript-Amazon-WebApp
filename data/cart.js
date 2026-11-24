export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart) {
    cart = [];

}

export function calculateCartQuantity(cart) {
    let cartQuantity = 0;
    cart.forEach((cartItem) =>{
        cartQuantity += cartItem.quantity;
    });
    return cartQuantity;
}

function saveToStorage () {
    localStorage.setItem('cart', JSON.stringify(cart));
}

export function updateQuantity(productId, newQuantity) {
    cart.forEach((cartItem) => {
        if (cartItem.productId === productId) {
            cartItem.quantity = newQuantity; // ← Actually changes the cart
        }
    });

    saveToStorage(); // Save the updated cart to localStorage
}

export function addToCart (productId) {
    let matchingItem;

    // Get the selected quantity
    const quantity = Number(document.querySelector(`.js-quantity-selector-${productId} select`).value);

    cart.forEach((cartItem) => {
        if (productId === cartItem.productId) {
            matchingItem = cartItem;
        }
    });

    if (matchingItem) {
        matchingItem.quantity += quantity;
    } else {
        cart.push({
            productId, // productId: productId,
            quantity //quantity: quantity
        });
    }

    saveToStorage();
}


export function removeFromCart (productId) {
    const newCart = [];

    cart.forEach((cartItem) => {
        if (cartItem.productId !== productId) {
            newCart.push(cartItem);
        }
    });

    cart = newCart;

    saveToStorage();
}