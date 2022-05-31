// const studentsMock = (() => {
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
// })(); // IIFE

// const generateMarksArray = function (qtt, min, max) {
//     const marks = new Array(qtt)
//         .fill(min)
//         .map(() => faker.datatype.number({ min, max }));
//     return marks;
// };

// const arr = [];
// arr.join().map();

// Q&A session

// Q1: for in / for of / [].forEach(function() {})

// const demoArray = [12, 22, 98, 948, 932, 678];

// for (let i = 0; i < demoArray.length; i++) {
//     const element = demoArray[i];
//     console.log(element);
// }

// // for..in 
// for (const index in demoArray) {
//     console.log(demoArray[index]);
// }

// const student = studentsMock.getStudent();

// for (const key in student) {
//     console.log(`${key} : ${student[key]}`);
// }

// // for..of
// for (const element of demoArray) {
//     console.log('for..of: ', element);
// }

// for (const prop of student) {
//     console.log(prop);
// }

// demoArray.forEach((element, index, array) => {
//     console.log('forEach: ', element, index, array);
// });

// Q2: Global Objects - Array, Object, console, window (browser), Number, String, Boolean

// Q3: 
// const students = [12, 23];
// function setAvgMarkForStudent(students) { 
//     /* some logic here */
//     if (true){
//         console.log(students);
//     }
//     return true;
// }

// function getBestStudent(students) { /* some logic here */ }

// let myGroup = studentsMock.getStudentList(10);

// myGroup = setAvgMarkForStudent(myGroup);


// Q4: callbacks

// function applyMath(a, b, doSmt) {
//     console.log('applyMath was applied');
//     return doSmt(a, b);
// }

// const result = applyMath(12, 37, Math.max);
// console.log('result after applying applyMath: ', result);

// [12, 29, 98, 0].forEach(console.log);

// Q5: var/let/const

// var - functional scope
// function doSmt() {
//     if (true) {
//         if (true) {
//             var someVariable = 42;
//             let someLetVar = 24;
//         }
//     }

//     console.log(someVariable);
//     console.log(someLetVar);
// }

// doSmt();

// var - re-declaration
// (() => {
//     // var
//     var someVariable = 42;
//     console.log(someVariable);
//     let array = new Array(someVariable);
//     for (let index = 0; index < array.length; index++) {
//         const element = array[index];
//     }

//     var someVariable = {};
//     console.log(someVariable);

//     // let array = 42;
// })();

// var - hoisting
// (() => {
//     console.log(someVar); // undefined
//     var someVar = 42;

//     console.log(name); // Error (temporal dead zone)
//     let name = 'Alex';
// })();

