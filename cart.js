// ========================================
// E-COMMERCE APPLICATION - CART MANAGEMENT
// ========================================

/**
 * Load and display cart items from localStorage
 */
function displayCart() {
    const cartContainer = document.getElementById('cartItems');
    const cart = JSON.parse(localStorage.getItem('dtCart')) || [];
    const cartSummary = document.getElementById('cartSummary');
    
    if (cart.length === 0) {
        cartContainer.innerHTML = `
            <div class="empty-cart">
                <p>Your cart is empty.</p>
                <a href="code.html" class="continue-shopping">Continue Shopping</a>
            </div>
        `;
        if (cartSummary) cartSummary.style.display = 'none';
        return;
    }

    if (cartSummary) cartSummary.style.display = 'block';
    
    let cartHTML = '';
    let subtotal = 0;

    cart.forEach((item, index) => {
        const itemTotal = item.price * item.quantity;
        subtotal += itemTotal;
        
        cartHTML += `
            <div class="cart-item" data-index="${index}">
                <div class="item-image">
                    <img src="${item.image}" alt="${item.name}">
                </div>
                <div class="item-details">
                    <h3>${item.name}</h3>
                    <p class="item-size">Size: ${item.size}</p>
                    <p class="item-price">₹${item.price}</p>
                    <div class="quantity-controls">
                        <button onclick="updateQuantity(${index}, -1)">-</button>
                        <span>${item.quantity}</span>
                        <button onclick="updateQuantity(${index}, 1)">+</button>
                    </div>
                </div>
                <div class="item-actions">
                    <p class="item-total">₹${itemTotal}</p>
                    <button class="remove-btn" onclick="removeItem(${index})">Remove</button>
                </div>
            </div>
        `;
    });

    cartContainer.innerHTML = cartHTML;
    
    // Update summary
    updateSummary(subtotal);
}

/**
 * Update the quantity of an item in the cart
 */
function updateQuantity(index, change) {
    const cart = JSON.parse(localStorage.getItem('dtCart')) || [];
    if (cart[index]) {
        cart[index].quantity += change;
        if (cart[index].quantity < 1) {
            removeItem(index);
            return;
        }
        localStorage.setItem('dtCart', JSON.stringify(cart));
        displayCart();
    }
}

/**
 * Remove an item from the cart
 */
function removeItem(index) {
    let cart = JSON.parse(localStorage.getItem('dtCart')) || [];
    cart.splice(index, 1);
    localStorage.setItem('dtCart', JSON.stringify(cart));
    displayCart();
}

/**
 * Update the order summary section
 */
function updateSummary(subtotal) {
    const subtotalEl = document.getElementById('subtotal');
    const taxEl = document.getElementById('tax');
    const totalEl = document.getElementById('total');
    
    if (subtotalEl) subtotalEl.textContent = `₹${subtotal}`;
    
    const tax = Math.round(subtotal * 0.05); // 5% tax
    if (taxEl) taxEl.textContent = `₹${tax}`;
    
    if (totalEl) totalEl.textContent = `₹${subtotal + tax}`;
}

/**
 * Handle checkout (redirect to success page)
 */
function checkout() {
    // Clear the cart from localStorage
    localStorage.removeItem('dtCart');
    
    // Redirect to success page
    window.location.href = 'checkout-success.html';
}

// Initialize cart on load
window.addEventListener('DOMContentLoaded', displayCart);
