export const cart = [];

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
}