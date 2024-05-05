document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todoList');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.innerHTML = todo;
      todoList.appendChild(li);
    });
  });
  
  
  
  
  function displayTodos() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="todo-item">
          <div class="todo-number">${index + 1}</div>
          <div class="todo-text">${todo}</div>
          <button class="delete-btn" onclick="deleteTodo(${index})">Delete</button>
        </div>
      `;
      todoList.appendChild(li);
    });
  }
  
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    const todoList = document.getElementById('todoList');
    const todos = JSON.parse(localStorage.getItem('todos')) || [];
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="todo-item">
          <div class="todo-number">${index + 1}</div>
          <div class="todo-text">${todo}</div>
        </div>
      `;
      todoList.appendChild(li);
    });
  });
  
    // Function to display items on the customer page
  function displayItems() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
    todos.forEach((todo, index) => {
        const li = document.createElement('li');
        li.innerHTML = `
            <div class="todo-item">
                <div class="todo-number">${index + 1}</div>
                <div class="todo-text">${todo.todo}</div>
                <div class="todo-image"><img src="${todo.image}" alt=""></div>
                <div class="todo-price">${todo.price}</div>
                <div class="todo-comment">${todo.comment}</div>
                <button class="order-btn" onclick="openOrderForm(${index})">Order</button>
            </div>
        `;
        todoList.appendChild(li);
    });
  }
  
  // Function to open the order form
  function openOrderForm(index) {
    const orderForm = document.getElementById('orderForm');
    // Populate the order form with item details
    // Show the order form
    orderForm.style.display = 'block';
  }
  
  // Function to place an order
  function placeOrder() {
    // Handle order submission logic here
  }
  
  // Call the displayItems function to display items on the customer page
  displayItems();
  
  
  
  
  
  
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    displayItems(); // Display items from local storage on page load
  });
  
  function displayItems() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
  
    const storedTodos = JSON.parse(localStorage.getItem('todos')) || [];
    storedTodos.forEach((todo, index) => {
      const li = document.createElement('li');
      li.innerHTML = `
        <div class="todo-item">
          <div class="todo-number">${index + 1}</div>
          <div class="todo-text">${todo.item}</div>
          <div class="todo-image"><img src="${todo.image}" alt=""></div>
          <div class="todo-price">${todo.price}</div>
          <div class="todo-comment">${todo.comment}</div>
          <button class="order-btn" onclick="openOrderForm(${index})">Order</button>
        </div>
      `;
      todoList.appendChild(li);
    });
  }
  
  
  
  
  
  
  
  
  document.addEventListener('DOMContentLoaded', function() {
    displayItems(); // Display items from Local Storage on page load
  });
  
  function displayItems() {
    const todoList = document.getElementById('todoList');
    todoList.innerHTML = '';
  
    const items = JSON.parse(localStorage.getItem('items')) || [];
  
    items.forEach((item, index) => {
      const li = document.createElement('li');
      li.textContent = `${item.name} - ${item.description} - ${item.price}`;
      todoList.appendChild(li);
    });
  }