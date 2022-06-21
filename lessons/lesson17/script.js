// Array.isArray()
// const arr = new Array(12, 13, 14);

// console.log(Array.isArray(arr)); // true

// const a = 5;

// console.log(Array.isArray(a)); // false

// const obj = {};

// console.log(Array.isArray(obj)); // false

// Array.from()

// HTMLCollection, NodeList

// const elements = document.getElementsByTagName('div');

// // Doesn't work
// // elements.forEach(e => {
// //     e.classList.add('container');
// // });

// // Works
// const elementsArray = Array.from(elements);
// elementsArray.forEach(e => {
//     e.classList.add('container');
// });

// // Array.of()

// const demoArray = [12, 34, 55, 32, 45, 34];

// const arr = Array.of(12, 34, 55, 32, 45, 34);
// console.log(arr);

// # target, currentTarget

// const mainEl = document.getElementById('main');

// mainEl.addEventListener('click', e => {
//     console.log(e);
//     // target - элемент на котором произошло событие
//     e.target.classList.add('hidden');
//     // currentTarget - элемент, к которому привязан ивент-хендлер
//     e.currentTarget.classList.add('hidden');
// });

// const hrefDemoEl = document.getElementById('demo-href');

// hrefDemoEl.addEventListener('click', e => {
//     console.log('href clicked');
//     e.preventDefault();
//     window.location.href = 'https://ithillel.ua';
// });


// Closures / Замыкания

// lexical environment
// function main() {
//     let a = 12;
//     let b = 23;

//     let obj = {
//         name: 'Alex',
//         city: 'Texas'
//     };

//     console.log(a, b, obj);
// }

// main();
// main();

// 
// closured function
// function main() {
//     let a = 42;

//     const bar = () => {
//         let b = 84;
//         console.log(b / a);
//     };

//     return bar;
// }

// // LE main()
// const foo = main();
// console.log(typeof foo);

// foo();

// Demo 2.
// const add = function(a) {
//     return function(b) {
//         return a + b;
//     }
// };

// const addTo5 = add(5);

// console.log(addTo5(14));
// console.log(addTo5(1));
// console.log(addTo5(42));
// console.log(addTo5(98));
// console.log(addTo5(300));

// const addTo10 = add(10);

// console.log(addTo10(10));
// console.log(addTo10(100));

// // 
// console.log(add(14)(10));

// Demo 3.

// const studentsMock = (function() {
//     const generateMarksArray = (qtt, min, max) => new Array(qtt).fill(min).map(() => faker.datatype.number({ min, max }));

//     const getStudent = () => ({
//         name: faker.name.findName(),
//         specialty: faker.name.jobTitle(),
//         marks: generateMarksArray(10, 20, 100),
//     });

//     const getStudentList = qtt => new Array(qtt).fill(null).map(getStudent);

//     return {
//         getStudent,
//         getStudentList
//     };
// })();

// Demo 4. Curry

// function foo(a, b, c) {
//     console.log(a, b, c);
// }

// function curry(cb) {
//     // return cb
//     return a => b => c => cb(a, b, c);
// }

// const curriedFoo = curry(foo);

// foo('normal:', 24, 'Bob');
// curriedFoo('curried:')(42)('Alex');

// const arr = [12, 22, 44];

// console.log(arr
//     .join('|')
//     .replaceAll('2', '$')
//     .split('|')
//     .map(e => Number.isNaN(+e) ? e : +e)
// );