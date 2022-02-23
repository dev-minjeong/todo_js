const todoList = document.querySelector("#todoList");
const todoForm = document.querySelector("#todoForm");
const todoInput = document.querySelector("#todoForm input:first-child");
const todoSubmit = document.querySelector("#todoForm input:last-child");

const TODOS_KEY = "toDos";
let toDos = [];

function checkTodos(event) {
    event.preventDefault();
    const liTodo = event.target.parentElement;
    liTodo.classList.toggle("licheck");
}

function deleteTodos(event) {
    const liTodo = event.target.parentElement;
    liTodo.remove();
    toDos = toDos.filter((toDo) => toDo.id !== parseInt(liTodo.id));
    saveTodos();
}

function saveTodos() {
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function paintTodos(newTodo) {
    const liTodo = document.createElement("li");
    liTodo.id = newTodo.id;
    const checkBtn = document.createElement("button");
    checkBtn.classList.toggle("todo-check");
    checkBtn.addEventListener("click", checkTodos);
    checkBtn.innerText = "✔";
    const todoSpan = document.createElement("span");
    todoSpan.innerText = newTodo.text;
    const deleteBtn = document.createElement("button");
    deleteBtn.classList.toggle("todo-delete");
    deleteBtn.addEventListener("click", deleteTodos);
    deleteBtn.innerText = "✘";
    liTodo.appendChild(checkBtn);
    liTodo.appendChild(todoSpan);
    liTodo.appendChild(deleteBtn);
    todoList.appendChild(liTodo);
}

function onTodoSubmit(event) {
    event.preventDefault();
    const newTodo = todoInput.value;
    todoInput.value = "";
    const newTodoObj = {
        text:newTodo,
        id:Date.now(),
    };
    toDos.push(newTodoObj);
    paintTodos(newTodoObj);
    saveTodos();
}

todoForm.addEventListener("submit", onTodoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);
if(savedToDos !== null) {
    toDos = JSON.parse(savedToDos);
    toDos.forEach(paintTodos);
}