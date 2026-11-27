class Cart {  // creating a new class
    cartItems;
    localStorageKey;

    constructor(localStorageKey) {  // constructors have to be named a constructure and it does not return anything
        this.localStorageKey = localStorageKey;
        this.loadFromStorage();
    }

    loadFromStorage () { // or loadFromStorage: function () {}
        this.cartItems = JSON.parse(localStorage.getItem(this.localStorageKey));
        if (!this.cartItems) {
        this.cartItems = [];
        }
    }

    saveToStorage() {
        localStorage.setItem(this.localStorageKey, JSON.stringify(this.cartItems));
    }

    addToCart (productId) {
        let matchingItem;

        // Get the selected quantity
        const quantity = Number(document.querySelector(`.js-quantity-selector-${productId} select`).value);

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        if (matchingItem) {
            matchingItem.quantity += quantity;
        } else {
            this.cartItems.push({
                productId, // productId: productId,
                quantity, //quantity: quantity
                deliveryOptionId: '1'
            });
        }

        this.saveToStorage();
    }

    removeFromCart(productId) {
        const newCart = [];

        this.cartItemsrt.forEach((cartItem) => {
            if (cartItem.productId !== productId) {
                newCart.push(cartItem);
            }
        });

        this.cartItems = newCart;

        this.saveToStorage();
    }

    updateDeliveryOption(productId, deliveryOptionId) {
        let matchingItem;

        this.cartItems.forEach((cartItem) => {
            if (productId === cartItem.productId) {
                matchingItem = cartItem;
            }
        });

        matchingItem.deliveryOptionId = deliveryOptionId;

        this.saveToStorage();
    }

    calculateCartQuantity() {
        let cartQuantity = 0;
        this.cartItems.forEach((cartItem) => {
            cartQuantity += cartItem.quantity;
        });
        return cartQuantity;
    }

    updateQuantity(productId, newQuantity) {
        this.cartItems.forEach((cartItem) => {
            if (cartItem.productId === productId) {
                cartItem.quantity = newQuantity;
            }
        });

        this.saveToStorage();
    }
}
    


const cart = new Cart('cart-oop'); // creating new object using class
const businessCart = new Cart('cart-business'); // the parameter given here will be inside the constructor()

// to if an object is an instance of class, use ==> 'businessCart instanceof Cart'