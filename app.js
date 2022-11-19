//selectors
var todoInput = document.querySelector('.todo-input');
var todoButton = document.querySelector('.todo-button');
var todoList = document.querySelector('.todo-list');

//events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteAndCheck);

//functions
function addTodo(e) {
    e.preventDefault();
    if(todoInput.value === "") {    //check for empty input
        alert('Add your task!');
    } else {
        //todo is a div of class todo with li and two buttons
        //make todo div
        const todoDiv = document.createElement('div');
        todoDiv.classList.add('todo');
        //create li
        const newTodo = document.createElement('li');
        newTodo.classList.add('todo-item');
        newTodo.innerText = todoInput.value; //add input text to todo
        todoInput.value = ""; //clear text field
        todoDiv.appendChild(newTodo);
        //create checked button
        const checkedBtn = document.createElement('button');
        checkedBtn.classList.add('checked-btn');
        checkedBtn.innerText = 'Checked';
        todoDiv.appendChild(checkedBtn);
        //create delete button
        const deleteBtn = document.createElement('button');
        deleteBtn.innerText = 'Delete';
        deleteBtn.classList.add('delete-btn');
        todoDiv.appendChild(deleteBtn);
        //append div to the <ul> todoList
        todoList.appendChild(todoDiv);
        
    }
}

function deleteAndCheck(e) {
    const item = e.target;
    //delete todo
    if(item.classList[0] === 'delete-btn') {
        const todo = item.parentElement;
        todo.remove();
    }
    //checked todo
    if(item.classList[0] === 'checked-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }

}
