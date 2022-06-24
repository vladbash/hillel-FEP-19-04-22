// SOLID
// Object keys - returns a list with object keys
// const student = {
//     name: 'Bob',
//     age: 19,
//     marks: [12, 11, 10, 12, 11, 9],
//     faculty: 'IMEM',
// };

// console.log(student.age);
// console.log(student['marks']);

// const keys = Object.keys(student);
// console.log(keys);

// keys.forEach(key => {
//     console.log(`key: ${key} value: ${student[key]}`);
// });

// Object values - returns a list with object values
// const values = Object.values(student);

// console.log(values);

// ----- HTML Templates -----

const todoItemTemplate = document.getElementById('todo-item-template').innerHTML;
const demoListEl = document.getElementById('demo-list');
const todoValueEl = document.getElementById('todo-value');
const addMoreEl = document.getElementById('add-more');

const onAddToDoItem = () => {
    const liEl = document.createElement('li');
    liEl.innerHTML = todoItemTemplate
        .replace('{{orderNumber}}', demoListEl.childElementCount + 1)
        .replace('{{todoItemText}}', todoValueEl.value);

    demoListEl.append(liEl);
    todoValueEl.value = '';

    // Array.from(
    //     liEl.getElementsByTagName('span')
    // )
    //     .forEach(e => !e.classList.contains('bold') && e.classList.add('bold'));
};

addMoreEl.addEventListener('click', onAddToDoItem);

const render = (template, payload) => {
    return Object.keys(payload)
        .reduce((tpl, key) => {
            return tpl.replaceAll(`{{${key}}}`, payload[key]);
        }, template);
};

const studentListEl = document.getElementById('student-list');
const studentItemTemplate = document.getElementById('student-item-template').innerHTML;

const students = studentsMock.getStudentList(10).map(e => {
    e.avatarUrl = faker.image.abstract(256, 256, true);
    return e;
});

studentListEl
    .insertAdjacentHTML(
        'afterbegin',
        students.map(e => render(studentItemTemplate, e)).join('')
    );

