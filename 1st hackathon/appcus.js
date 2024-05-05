// Sample menu data (replace with actual data)
const menuItems = [
    { id: 1, name: 'Pizza', category: 'Italian', price: 10, image: 'pizza.jpg' },
    { id: 2, name: 'Burger', category: 'Fast Food', price: 8, image: 'burger.jpg' },
    // Add more items as needed
];

// Function to display menu items
function displayMenu() {
    const menuContainer = document.getElementById('menu-container');
    menuContainer.innerHTML = '';

    menuItems.forEach(item => {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        // Create HTML for the menu item
        menuItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <h3>${item.name}</h3>
            <p>Category: ${item.category}</p>
            <p>Price: $${item.price}</p>
            <button onclick="addToOrder(${item.id})">Add to Cart</button>
        `;

        menuContainer.appendChild(menuItem);
    });
}

// Function to add item to the order
function addToOrder(itemId) {
    const selectedItem = menuItems.find(item => item.id === itemId);

    const orderContainer = document.getElementById('order-container');
    const orderItem = document.createElement('div');
    orderItem.classList.add('order-item');
    orderItem.innerHTML = `
        <p>${selectedItem.name} - $${selectedItem.price}</p>
    `;
    orderContainer.appendChild(orderItem);
}

// Function to handle checkout
document.getElementById('checkout-btn').addEventListener('click', () => {
    // Implement checkout functionality here
    alert('Checkout functionality will be implemented here.');
});

// Display initial menu
displayMenu();
