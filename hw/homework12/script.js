(() => {
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
    };

    btnEl.addEventListener('click', addToDoItem);

})();