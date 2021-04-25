//Selectors
const todoInput = document.querySelector('.todo-input');
const todoButton = document.querySelector('.todo-button');
const todoList = document.querySelector('.todo-list');

//Event Listners
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);

//Functions
function addTodo(event) {
    // console.log("We are made of star stuff!");
    //Prevent form from submitting
    event.preventDefault();
    //todo DIV
    const todoDiv = document.createElement('div');
    //Adding a class "todo" to the div
    todoDiv.classList.add('todo');
    // Create LI
    const newTodo = document.createElement('li'); 
    newTodo.innerText = todoInput.value;
    //Adding a classList to "newTodo"
    newTodo.classList.add('todo-item');
    //Adding Li (newTodo) inside the div (todDiv)
    todoDiv.appendChild(newTodo);
    //Add Check Mark Button
    const completedButton = document.createElement('button');
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
     //Add delete Button
     const deleteButton = document.createElement('button');
     deleteButton.innerHTML = '<i class="fas fa-trash"></i>';
     deleteButton.classList.add("delete-btn");
     todoDiv.appendChild(deleteButton);
     //Append to List
     todoList.appendChild(todoDiv);
     //Clear todo Input Value
     todoInput.value = "";
}

function deleteCheck(event) {
    const item = event.target;
    //Delete Todo
    if(item.classList[0] === "delete-btn") {
        const todo = item.parentElement;
        //Animation
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function() {
            todo.remove();
        });
    }
    //Check Mark
    if(item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}