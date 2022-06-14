// (() => {
const btnEl = document.getElementById('add-item-btn');
const todoInputEl = document.getElementById('todo-item-text');
const todoListEl = document.getElementById('todo-list');

const addToDoItem = () => {
    const value = todoInputEl.value;
    if (!value.trim()) return;

    const liEl = document.createElement('li');
    liEl.innerText = value;

    todoListEl.append(liEl);

    todoInputEl.value = '';

    if (todoListEl.childElementCount >= 5) { // if (todoListEl.children.length >= 5) {
        btnEl.removeEventListener('click', addToDoItem);
    }
};

// 1. via prop
// btnEl.onclick = addToDoItem;

// 2. inline in HTML
// <button id="add-item-btn" onclick="addToDoItem()">Add item</button>

// 3. addEventListener

// btnEl.addEventListener('click', eventObject => {
//     console.log(eventObject);
// });
// todoInputEl.addEventListener('keydown', eventObject => {
//     console.log(eventObject);
//     if (eventObject.code === 'Enter') addToDoItem();
// });

btnEl.addEventListener('click', addToDoItem);

// })();

const clickerBtn = document.getElementById('clicker-btn');

// let clicked = 0;

// clickerBtn.addEventListener('click', e => {
//     // clickerBtn.innerText = `Clicked ${++clicked} time(s)`;
//     e.target.innerText = `Clicked ${++clicked} time(s)`;
// });

const markClicked = e => {
    const innerText = e.target.innerText || '';
    if (innerText.indexOf('[clicked]') === -1) 
        e.target.innerText = `${e.target.innerText} [clicked]`;
};

const btnEls = document.getElementsByTagName('button');

Array.from(btnEls).forEach(el => {
    el.addEventListener('click', markClicked);
});