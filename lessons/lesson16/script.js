// (() => {
//     const addItemBtnEl = document.getElementById('add-item-btn');
//     const todoInputEl = document.getElementById('todo-item-text');
//     const todoListEl = document.getElementById('todo-list');
//     // List actions block
//     const actionsBlockEl = document.getElementById('actions-block');
//     const checkAllBtnEl = document.getElementById('action-check-all');
//     const deleteAllBtnEl = document.getElementById('action-delete-all');

//     const onDeleteAll = () => {
//         Array.from(todoListEl.children).forEach(e => e.remove());
//         actionsBlockEl.classList.add('hidden');
//     };

//     const onCheckAll = () => {
//         Array.from(todoListEl.children).forEach(e => {
//             e.classList.add('checked');
//             e.children[0].checked = true;
//         });
//     };

//     const onItemCheck = e => {
//         if (e.target.classList.contains('marker'))
//             e.target.parentElement.classList.toggle('checked');
//     };

//     const onItemDelete = e => {
//         if (e.target.classList.contains('delete-btn')) {
//             e.target.parentElement.remove();
//             if (todoListEl.childElementCount === 0) {
//                 actionsBlockEl.classList.add('hidden');
//             }
//         }
//     };

//     const onAddToDoItem = () => {
//         const value = todoInputEl.value;
//         if (!value.trim()) return;

//         if (todoListEl.childElementCount === 0) {
//             actionsBlockEl.classList.remove('hidden');
//         }

//         const liEl = document.createElement('li');
//         const spanEl = document.createElement('span');
//         const checkEl = document.createElement('input');
//         const btnEl = document.createElement('button');

//         spanEl.innerText = value;

//         checkEl.type = 'checkbox';
//         checkEl.classList.add('marker');

//         btnEl.innerText = 'delete';
//         btnEl.classList.add('delete-btn');

//         liEl.append(checkEl, spanEl, btnEl);

//         todoListEl.append(liEl);

//         todoInputEl.value = '';
//     };

//     deleteAllBtnEl.addEventListener('click', onDeleteAll);
//     checkAllBtnEl.addEventListener('click', onCheckAll);
//     addItemBtnEl.addEventListener('click', onAddToDoItem);
//     todoListEl.addEventListener('change', onItemCheck);
//     todoListEl.addEventListener('click', onItemDelete);
// })();

const onClick = e => {
    if (!e.currentTarget.tagName) {
        console.log('document');
    } else {
        console.log(e.currentTarget.tagName, e.currentTarget.id);
    }
};

const containerDivEl = document.getElementById('container-div');
const firstBtnEl = document.getElementById('first-btn');
const secondContainerEl = document.getElementById('second-container-div');


containerDivEl.addEventListener('click', onClick, true);

firstBtnEl.addEventListener('click', e => {
    console.log('stopImmediatePropagation');
    e.stopImmediatePropagation();
});

firstBtnEl.addEventListener('click', e => {
    console.log('stopPropagation');
    e.stopPropagation();
});


[
    document,
    document.body,
    firstBtnEl,
    secondContainerEl,
].forEach(e => e.addEventListener('click', onClick));


// const onFirstClick = e => {
//     console.log('first click!');

//     e.target.removeEventListener('click', onFirstClick);
// };

// firstBtnEl.addEventListener('click', onFirstClick);