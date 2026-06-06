// Checkout Success Page JavaScript

document.addEventListener('DOMContentLoaded', function() {
    // Generate order details
    generateOrderDetails();
});

// Generate Order Details
function generateOrderDetails() {
    // Generate unique order ID
    const orderId = generateOrderId();
    document.getElementById('orderId').textContent = orderId;
    
    // Calculate and set estimated delivery date
    const deliveryDate = calculateDeliveryDate();
    document.getElementById('estimatedDelivery').textContent = deliveryDate;
    
    // Save order to localStorage
    saveOrderData(orderId, deliveryDate);
}

// Generate unique order ID
function generateOrderId() {
    const timestamp = Date.now();
    const random = Math.floor(Math.random() * 10000);
    return `#ORD-${timestamp}${random}`.slice(0, 13);
}

// Calculate delivery date (5-7 days from today)
function calculateDeliveryDate() {
    const today = new Date();
    const deliveryDate = new Date(today);
    deliveryDate.setDate(deliveryDate.getDate() + 6); // 6 days from today
    
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return deliveryDate.toLocaleDateString('en-US', options);
}

// Save order data to localStorage
function saveOrderData(orderId, deliveryDate) {
    const orderData = {
        orderId: orderId,
        orderDate: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        estimatedDelivery: deliveryDate,
        status: 'Processing',
        timestamp: Date.now()
    };
    
    // Save to localStorage
    localStorage.setItem('lastOrder', JSON.stringify(orderData));
}

// Optional: Add confetti animation on page load
window.addEventListener('load', function() {
    // You can add a confetti library here if desired
    console.log('Order success page loaded!');
});
