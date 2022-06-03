// console.log(document);
// console.dir(document);

// Node Types (4/12)

// 1. #document
console.dir(document);

// 2. HTMLElement
console.dir(document.body.firstElementChild);

// 3. TextNode
console.dir(document.body.childNodes[0]);

// 4. CommentNode
// TBD

// heading is global variable created in HTML with element id
console.log(heading);

// document.body.children[2].onclick = () => {
//     document.body.firstElementChild.classList.toggle('hidden');
//     document.body.children[1].classList.toggle('hidden');
// };

const btnEl = document.getElementById('toggle-btn');
const mainEl = document.getElementById('main');
const hiddenEl = document.getElementById('hidden-block');

btnEl.onclick = () => {
    mainEl.classList.toggle('hidden');
    hiddenEl.classList.toggle('hidden');
};