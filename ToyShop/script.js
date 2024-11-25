document.addEventListener('DOMContentLoaded', () => {
    const cartItems = [];
    const cartItemsContainer = document.getElementById('cartItems');
    const totalAmount = document.getElementById('totalAmount');

    function addToCart(name, price) {
        const itemPrice = parseFloat(price.replace('₹', ''));
        const existingItem = cartItems.find(item => item.name === name);

        if (existingItem) {
            existingItem.quantity++;
        } else {
            cartItems.push({ name, price: itemPrice, quantity: 1 });
        }

        updateCart();
    }

    function updateCart() {
        cartItemsContainer.innerHTML = '';
        let total = 0;

        cartItems.forEach(item => {
            const itemElement = document.createElement('div');
            itemElement.className = 'cart-item';
            itemElement.textContent = `${item.name} - ₹${item.price} x ${item.quantity}`;
            cartItemsContainer.appendChild(itemElement);
            total += item.price * item.quantity;
        });

        totalAmount.textContent = "₹"+total.toFixed(2);
    }
    function checkout() {
        if (cartItems.length === 0) {
            alert('Your cart is empty!');
            return;
        }

        alert('Thank you for your purchase!');
        cartItems.length = 0; // Clear the cart
        updateCart();
    }

    window.checkout = checkout;
    window.addToCart = addToCart;
});