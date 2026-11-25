import {cart, calculateCartQuantity} from '../../data/cart.js';

export function renderCheckoutHeader () {
    const cartQuantity = calculateCartQuantity(cart);

    document.querySelector('.js-return-to-home-link').innerHTML = `${cartQuantity}  ${cartQuantity === 1 ? 'item' : 'items'}`; // for better grammar

}