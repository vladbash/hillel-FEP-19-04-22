(() => {
    const addItemBtnEl = document.getElementById('add-item-btn');
    const todoInputEl = document.getElementById('todo-item-text');
    const todoListEl = document.getElementById('todo-list');
    // List actions block
    const actionsBlockEl = document.getElementById('actions-block');
    const checkAllBtnEl = document.getElementById('action-check-all');
    const deleteAllBtnEl = document.getElementById('action-delete-all');

    const onDeleteAll = () => {
        Array.from(todoListEl.children).forEach(e => e.remove());
        actionsBlockEl.classList.add('hidden');
    };

    const onCheckAll = () => {
        Array.from(todoListEl.children).forEach(e => {
            e.classList.add('checked');
            e.children[0].checked = true;
        });
    };

    const onItemCheck = e => {
        e.target.parentElement.classList.toggle('checked');
    };

    const onItemDelete = e => {
        e.target.parentElement.remove();
        if (todoListEl.childElementCount === 0) {
            actionsBlockEl.classList.add('hidden');
        }
    };

    const onAddToDoItem = () => {
        const value = todoInputEl.value;
        if (!value.trim()) return;

        if (todoListEl.childElementCount === 0) {
            actionsBlockEl.classList.remove('hidden');
        }

        const liEl = document.createElement('li');
        const spanEl = document.createElement('span');
        const checkEl = document.createElement('input');
        const btnEl = document.createElement('button');

        spanEl.innerText = value;

        checkEl.type = 'checkbox';
        checkEl.addEventListener('change', onItemCheck);

        btnEl.innerText = 'delete';
        btnEl.addEventListener('click', onItemDelete);

        liEl.append(checkEl, spanEl, btnEl);

        todoListEl.append(liEl);

        todoInputEl.value = '';
    };

    deleteAllBtnEl.addEventListener('click', onDeleteAll);
    checkAllBtnEl.addEventListener('click', onCheckAll);
    addItemBtnEl.addEventListener('click', onAddToDoItem);
})();