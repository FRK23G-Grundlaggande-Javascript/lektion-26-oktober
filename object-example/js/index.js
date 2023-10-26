/**
 * 1. Lägga på en eventlistener på en knapp
 * 2. När jag klickar på en knapp hämta värde från inputfält och spara i en variabel
 * 3. Spara värdet från inputfält i en array
 * 4. Visa array:en
 */

const inputElem = document.querySelector('input');
const buttonElem = document.querySelector('button');
const todoElem = document.querySelector('p');
const todosElem = document.querySelector('ul');

const todos = []; // Deklarerar en array

function displayTodos() {
    let todoItems = '';

    for(let todo of todos) {
        console.log(todo);
        todoItems = todoItems + '<li>' + todo.text + ' - ' + todo.done + '</li>';
    }

    todosElem.innerHTML = todoItems;

    // Samma sak som ovan men med den "vanliga" for-loopen
    // for(let i = 0; i < todos.length; i++) {
    //     todoItems = todoItems + '<li>' + todos[i].text + ' - ' + todos[i].done + '</li>';
    //     console.log(todoItems);
    // }
}

buttonElem.addEventListener('click', () => {
    const todoText = inputElem.value;
    
    const todo = {
        text: todoText,
        done: false
    }

    todos.push(todo);
    console.log(todos);
    displayTodos();
});