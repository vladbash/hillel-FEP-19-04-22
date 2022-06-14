// Element queries

// // 1. Element by id
// const mainEl = document.getElementById('main');

// console.dir(mainEl);

// // 2. Elements!!! by className | returns HTMLCollection
// const hiddenEls = document.getElementsByClassName('hidden');

// console.dir(hiddenEls);

// // 3. Elements!!! by tagName | returns HTMLCollection
// const ulEls = document.getElementsByTagName('ul');

// console.dir(ulEls);

// // 4. Elements!!! by name | returns NodeList
// const studentsEls = document.getElementsByName('students');
// const classStudentsEls = document.getElementsByClassName('list');

// console.dir(studentsEls);
// console.dir(classStudentsEls);

// // 5. Node by query
// const studentNode = document.querySelector('.hidden');

// console.dir(studentNode);

// // 6. Nodes by query
// const studentNodes = document.querySelectorAll('.hidden');

// console.dir(studentNodes);

// // Pseudo-Array to Array - Array.from()
// const uls = Array.from(ulEls);
// uls.forEach(e => e.classList.add('hidden'));

// Element manipulations

const mainEl = document.getElementById('main');

// 1. Remove from DOM
// mainEl.remove();

// 2. Attach to DOM

// 2.1 prepend -> insert/move element/node to begin of childNodes/children
// setTimeout(() => {
//     document.body.prepend(mainEl);
// }, 1000);

// 2.2 append -> insert/move element/node to end of childNodes/children
// setTimeout(() => {
//     document.body.append(mainEl);
// }, 3000);

// 3. Clone Element / Node
// const anotherMainEl = mainEl.cloneNode(true);

// setTimeout(() => {
//     document.body.append(anotherMainEl);
// }, 5000);

// 4. insert on concrete position
// const mainChildEl = mainEl.children[0].cloneNode(true);
// mainEl.insertBefore(mainChildEl, mainEl.childNodes[7]);

// console.dir(mainChildEl);
// console.dir(mainEl);

// 5. create element
// const newEl = document.createElement('span');
// newEl.innerText = 'Some new span element';
// newEl.classList.add('color-yellow');

// console.log(newEl);
// console.dir(newEl);

// mainEl.append(newEl);

// 6. innerHTML (anti-pattern)
// mainEl.innerHTML = `${mainEl.innerHTML}
// <span>New Span via innerHTML</span>`;

// 6.1 create element (doesn't work)
// const newEmptyEl = document.createElement('span');
// newEmptyEl.outerHTML = `New Span via outerHTML`;

// mainEl.append(newEmptyEl);

// 6.2 insertAdjacentHTML
// mainEl.insertAdjacentHTML('afterbegin', `<span>insertAdjacentHTML span</span>`);
// mainEl.insertAdjacentHTML('beforebegin', `<span>insertAdjacentHTML span</span>`);
// mainEl.insertAdjacentHTML('beforeend', `<span>insertAdjacentHTML span</span>`);
// mainEl.insertAdjacentHTML('afterend', `<span>insertAdjacentHTML span</span>`);

// 6.3 insertAdjacentElement
mainEl.insertAdjacentElement('afterbegin', document.createElement('a'));

// 6.4 insertAdjacentText
mainEl.insertAdjacentText('afterend', 'Some text inserted via insertAdjacentText');

// mainEl.insertAdjacentText('beforeend', `<span>insertAdjacentHTML insertAdjacentText</span>`);
// mainEl.innerText = `<span>insertAdjacentHTML insertAdjacentText</span>`;
