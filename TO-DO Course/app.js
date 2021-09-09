// Selectors
const todoInput = document.querySelector(".todo-input");    // variable for input.
const todoButton = document.querySelector(".todo-button");  // variable for button
const todoList = document.querySelector(".todo-list");      // variable for List
const filterOption = document.querySelector(".filter-todo"); // Variable for Select

   

// Event Listener
todoButton.addEventListener('click', addTodo);  //Adding an click event Listener in todoButton.
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodo);


// Functions
function addTodo(event){

    event.preventDefault();

    //Todo DIV
    const todoDiv = document.createElement('div');
    todoDiv.classList.add('todo');   // Will add the class name todo.

    //Create LI
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);

    //Check Mark BUTTON
    const completeButton = document.createElement('button');
    completeButton.innerHTML = '<i class="fas fa-check"></i>';
    completeButton.classList.add('complete-btn');
    todoDiv.appendChild(completeButton);

    //Check trash BUTTON
    const trashButton = document.createElement('button');
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    todoDiv.appendChild(trashButton);

    //Append To List
    todoList.appendChild(todoDiv);

    //Clear todo INPUT VALUE
    todoInput.value = "";
}

function deleteCheck(event)
{
    const item = event.target;

    //Delete todo
    if(item.classList[0] === "trash-btn")
    {
        const todo = item.parentElement;
        //Animation
        todo.classList.add("fall");
        //Remove the element
        todo.addEventListener('transitionend', function(){
            todo.remove();
        });
    }

    // Check todo
    if(item.classList[0] === "complete-btn")
    {
        const todo = item.parentElement;
        todo.classList.toggle("completed")
    }
}
