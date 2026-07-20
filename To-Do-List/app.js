
const form = document.getElementById("todo-form");
const input = document.getElementById("todo-input");
const todoList = document.getElementById("todo-list");
const itemsLeft = document.getElementById("items-left");
const filters = document.querySelectorAll(".filter");
const clearCompletedBtn = document.getElementById("clear-completed");

// State
let todos = [];
let currentFilter = "all";

// Create a task element

function createTodoElement(todo) {

    const li = document.createElement ("li");

    li.textContent = todo.text;

    li.dataset.id = todo.id;

// Completed styling

if (todo.completed) {

    li.classList.add("completed");

}

//Delete button

const deletBtn = document.createElement("button");

deletBtn.textContent = "delete"

deletBtn.classList.add("delet-btn");

li.appendChild(deleteBtn);

return li;
}

function renderTodos() {

    todoList.innerHTML = "";

let filteredTodos = todos;

if (currentFilter === "active") {

    filteredTodos = todos.filter(todo => !todo.completed);

     
} 

else if (currentFilter === "completed") {

    filteredTodos = todos.filter(todo => !todo.completed);
}


filtereTodos.forEach(function(todo) {

    const li = createTodoElement(todo);

    todoList.appendChild(li);
});

updateStats();

}

// Add new task

function addTodo(text) {

    const todo = {

        id: Date.now(),

        text: text,

        completed: false
    };

    todos.push(todo);

    renderTodos();
}

// Toogle complete

function toggleTodo(id) {

    todos = todos.map(function(todo) {
        
    if (todo.id === id) {
        
        todo.completed = !todo.completed;

    }

    return todo;

});
    renderTodos();

}

// Dellet Task

function deleteTodo(id) {

    todos = todos.filter(function(todo) {
         return todo.id !== id;
    });

    renderTodos();
}

// update remainging items

function updateStats() {

    const remaining = todos. filter(function(todo) {
        
        return !todo.completed;
      
})  .length;

itemsLeft.textContent = `${remaining} items left`;

}

// Filter tasks

function filterTodos(filter) {
     currentFilter = filter;
     renderTodos();
}

// Submit form

form.addEventListener("submit", function(event) {

    event.preventDefault();

    const text = input.value.trim();

// Empty tasks not allowed

if (text === "") {

    return;
}

addTodo(text);

// clearinput after adding

input.value = "";

});

// click handling using event delegation

todoList.addEventListener ("click", function(event) {
     
    const li = event.target.closest("li");

    if (!li) {

        return;
    
    }

    const is = Number(li.dataset.id)
     

    // Delet button clicked

     if (event.target.classList.contains('delet-btn')) {

        deleteTodo(id);

     } else {
        
        toggleTodo(id);
     }

    });

     // Filter button
  
    filters.forEach(function(button) {

        button.addEventListener("click", function() {

        filterTodos(button.dataset.filter);
    });
});


// Clear completed tasks

clearCompletedBtn.addEventListener("click", function() {

    todos = todos.filter(function(todo) {

        return !todo.completed;

    });

    renderTodos();

});

// Initialize

renderTodos();

