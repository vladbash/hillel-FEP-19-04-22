// // context / this (good)

// const student = {
//     name: 'Bob',
//     surname: 'Malcovich',
//     getFullName() {
//         return this.name + ' ' + this.surname;
//     }
// };

// console.log(student.getFullName());

// student.surname = 'McQueen';

// console.log(student.getFullName());

// // w/o context (bad)
// const student2 = {
//     name: 'John',
//     surname: 'Walker',
//     getFullName() {
//         return student2.name + ' ' + student2.surname;
//     }
// };

// console.log(student2.getFullName());

// student2.surname = 'McAdams';

// console.log(student2.getFullName());

// universal function/method

// const getFullName = function() {
//     return `${this.name} ${this.surname}`;
// };

// const student = {
//     name: 'Tony',
//     surname: 'Smt',
//     getFullName: getFullName
// };
// console.log(student.getFullName());

// const secondStudent = {
//     name: 'Ezekiel',
//     surname: 'McSaint',
//     getFullName: getFullName
// };
// console.log(secondStudent.getFullName());

// 1. inline function applying

// const getFullName = function() {
//     return `${this.name} ${this.surname}`;
// };

// const student = {
//     name: 'Tony',
//     surname: 'Smt',
//     getFullName: getFullName
// };

// console.log(student.getFullName());

// const secondStudent = {
//     name: 'Bob',
//     surname: null,
//     getFullName: student.getFullName,
//     applyGettingInfo: function(cb) {
//         const fullName = cb();
//         return fullName;
//     }
// };

// console.log(secondStudent.getFullName());

// // context losing

// const res = secondStudent.applyGettingInfo(student.getFullName);
// console.log(res);

// 2. apply / call

function doSmt(arg, name) {
    console.log('starting doing smt');
    console.log('function args', arg, name);
    console.log('getting context', this);
    console.log('finishing doing smt');
}


// 2.1. apply

// doSmt.apply({ name: 'cyber object' }, [42, '77']);
// doSmt.apply(document, [42, '77']);

// 2.2. call

// doSmt.call({ length: 22 }, 'text', 'HTML');

// Demo
// const liEls = document.getElementsByTagName('li');

// // const arr = [12, 33, 44, 23];
// // const forEach = arr.forEach;

// // forEach.call(liEls, (e, i) => {
// //     e.classList.add('item');
// //     e.innerText = i;
// // });

// Array.prototype.forEach.apply(liEls, [(e, i) => {
//     e.classList.add('item');
//     e.innerText = i;
// }]);

// 3. bind

const doSmtBound = doSmt.bind({
    someProp: 42
});

doSmtBound();

doSmtBound.apply({
    length: 12
}, ['text', null]);

// 4. new