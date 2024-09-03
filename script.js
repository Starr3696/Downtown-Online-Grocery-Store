let cart = [];
        
function addToCart(productName, price, imageUrl) {
    cart.push({ name: productName, price: price, image: imageUrl });
    updateCartCount();
}

function updateCartCount() {
    const cartBtn = document.getElementById('cart-btn');
    cartBtn.textContent = `Cart (${cart.length})`;
}

function updateCartModal() {
    const cartItemsDiv = document.getElementById('cart-items');
    cartItemsDiv.innerHTML = ''; // Clear previous items
    if (cart.length === 0) {
        cartItemsDiv.innerHTML = '<p>Your cart is empty.</p>';
    } else {
        cart.forEach((item, index) => {
            const itemDiv = document.createElement('div');
            itemDiv.classList.add('cart-item');
            itemDiv.innerHTML = `<img src="${item.image}" alt="${item.name}">
                                 <p>${item.name} - ksh${item.price}.00</p>`;
            cartItemsDiv.appendChild(itemDiv);
        });
    }
}

document.getElementById('cart-btn').addEventListener('click', function() {
    updateCartModal(); // Update the modal content
    const myModal = new bootstrap.Modal(document.getElementById('myModal'));
    myModal.show(); // Show the modal
});