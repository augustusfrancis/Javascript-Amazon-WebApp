import {cart, removeFromCart, calculateCartQuantity, updateQuantity, updateDeliveryOption} from '../../data/cart.js';
import {products, getProduct} from '../../data/products.js';
import { formatCurrency } from '../utils/money.js'; 
import {deliveryOptions, getDeliveryOption, calculateDeliveryDate} from '../../data/deliveryOptions.js'
import { renderPaymentSummary } from './paymentSummary.js';
import { renderCheckoutHeader } from './checkoutHeader.js';


export function renderOrderSummary() {


    let cartSummaryHTML = '';

    cart.forEach((cartItem) => {

        const productId = cartItem.productId;

        const matchingProduct = getProduct(productId);

        const deliveryOptionId = cartItem.deliveryOptionId;

        const deliveryOption = getDeliveryOption(deliveryOptionId);

        const { dateString, priceString }  = calculateDeliveryDate(deliveryOption);

        cartSummaryHTML += `
        <div class="cart-item-container js-cart-item-container-${matchingProduct.id}">
            <div class="delivery-date">
                Delivery date: ${dateString}
            </div>

            <div class="cart-item-details-grid">
                <img class="product-image"
                src="${matchingProduct.image}">

                <div class="cart-item-details">
                <div class="product-name">
                    ${matchingProduct.name}
                </div>
                <div class="product-price">
                    $${formatCurrency(matchingProduct.priceCents)}
                </div>
                <div class="product-quantity">
                    <span>
                    Quantity: <span class="quantity-label">${cartItem.quantity}</span>
                    </span>
                    <span class="update-quantity-link link-primary js-update-link" data-product-id="${matchingProduct.id}">
                    Update
                    </span>
                    <input class="quantity-input js-quantity-input" data-product-id="${matchingProduct.id}">
                    <span class="save-quantity-link link-primary js-save-link" data-product-id="${matchingProduct.id}">Save</span>
                    <span class="delete-quantity-link link-primary js-delete-link" data-product-id="${matchingProduct.id}">
                    Delete
                    </span>
                </div>
                </div>

                <div class="delivery-options">
                <div class="delivery-options-title">
                    Choose a delivery option:
                </div>
                
                ${deliveryOptionsHTML(matchingProduct, cartItem)}            

                </div>
            </div>
        </div>
        `;

    });

    function deliveryOptionsHTML (matchingProduct, cartItem) {

        let html = '';

        deliveryOptions.forEach((deliveryOption) => {

            const { dateString, priceString }  = calculateDeliveryDate(deliveryOption);

            const isChecked = deliveryOption.id === cartItem.deliveryOptionId
            html += 

            `
            <div class="delivery-option js-delivery-option" data-product-id="${matchingProduct.id}" data-delivery-option-id="${deliveryOption.id}">
                <input type="radio" ${isChecked ? 'checked' : ''}
                class="delivery-option-input"
                name="delivery-option-${matchingProduct.id}">
                <div>
                <div class="delivery-option-date">
                    ${dateString}
                </div>
                <div class="delivery-option-price">
                    ${priceString} shipping
                </div>
                </div>
            </div>
            `
        });
        return html;
    }

    document.querySelector('.js-order-summary').innerHTML = cartSummaryHTML;

    renderCheckoutHeader();

    document.querySelectorAll('.js-delete-link').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;

            removeFromCart(productId);

            renderOrderSummary();

            renderPaymentSummary();
        });
    });

    document.querySelectorAll('.js-update-link').forEach((link) => {
        link.addEventListener('click', () => {
            const productId = link.dataset.productId;

            // Find the container for this product
            const container = document.querySelector(`.js-cart-item-container-${productId}`);

            // Add the class to show input and Save link
            container.classList.add('is-editing-quantity');
            
        });
    });

    // Define the save function (reusable)
    function saveQuantity(productId) {
        const container = document.querySelector(`.js-cart-item-container-${productId}`);
        const quantityInput = container.querySelector(`.js-quantity-input`);
        const newQuantity = Number(quantityInput.value);

        // Validation
        if (newQuantity < 0 || newQuantity > 100 || !Number.isInteger(newQuantity)) {
            alert('Please enter a valid whole number between 0 and 99');
            return;
        }

        updateQuantity(productId, newQuantity);

        renderOrderSummary();
    }

    // Save button click handler
    document.querySelectorAll('.js-save-link').forEach((link) => {
        link.addEventListener('click', () => {
            saveQuantity(link.dataset.productId);
            renderPaymentSummary();
        });
    });

    // Enter key handler
    document.querySelectorAll('.js-quantity-input').forEach((input) => {
        input.addEventListener('keydown', (event) => {
            if (event.key === 'Enter') {
                saveQuantity(input.dataset.productId);
                renderPaymentSummary();
            }
        });
    });


    document.querySelectorAll('.js-delivery-option').forEach((element) => {
        element.addEventListener('click', () => {
            const {productId, deliveryOptionId} = element.dataset;
            updateDeliveryOption(productId, deliveryOptionId);
            renderOrderSummary();
            renderPaymentSummary();
        });
    });
}

