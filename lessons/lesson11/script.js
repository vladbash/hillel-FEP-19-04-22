// function main() {
//     let obj = {};

//     function foo() {
//         return {
//             age: 22,
//             name: 'Alex'
//         };
//     }

//     function buz(arg) {
//         console.log(arg);
//     }

//     Object.defineProperty(obj, 'name', {
//         writable: false,
//         value: 'Test'
//     });

//     const local = foo();
//     buz(local);

// }

// main();

// function getAvgMark(anyMarksArray) {
//     /* returns avg mark based on anyMarksArray */
// }

// const marks = generateMarks(10); // [12, 11, 9, 9, 7, ...]
// getAvgMark(marks);

// const names = ['Alex', 'John', 'Jenny', 'Sandra'];
// const students = names.map(e => {
//     return {
//         name: e
//     };
// });

// console.log(names);
// console.log(students);

// const doSmt = function(arg) {
//     const newValue = `arg: ${arg}`;
//     return newValue;
// };

// const arrowDoSmt = (arg) => {
//     const newValue = `arrow arg: ${arg}`;
//     return newValue;
// };

// const arrowDoSmt = (arg) => {
//     return `arrow arg: ${arg}`;
// };

// const arrowDoSmt = (arg) => `arrow arg: ${arg}`;

// const arrowDoSmt = arg => `arrow arg: ${arg}`;

// console.log(doSmt('Test'));
// console.log(arrowDoSmt('Test'));

// const marks = [12, 11, 9, 9, 7, 12, 10, 4]; // [{ system: 12, value: 10 }, ....] // [{ system: 100, value: 93 }, ....]

// const sum = marks.reduce((result, element) => {
//     return result + element;
// }, 10);

// console.log(sum);

// const goodMarks = marks.reduce((result, mark) => {
//     if (mark > 9) {
//         result.push(mark);
//     }
//     return result;
// }, []);

// console.log(goodMarks);

// function createStudent(name, surname) {
//     return {
//         name: name,
//         surname: surname,
//         marks: [12, 11, 9, 9, 7, 12, 10, 4]
//     };
// }

// const student = createStudent('Ahmed', 'Jaffa');
// console.log(student);

// student.name = 'Alex';
// console.log(student);

// const name = prompt('Enter your name');

// const MARKS_SYSTEM = {
//     TWELVE: 12,
//     HUNDRED: 100
// };

// const descriptedMarks = marks.reduce((result, mark) => {
//     result.push({
//         system: MARKS_SYSTEM.TWELVE,
//         value: mark
//     });
//     return result;
// }, []);

// console.log(descriptedMarks);

// function reduce(array, cb, initialValue) {
//     let result = initialValue;
//     for (let index = 0; index < array.length; index++) {
//         result = cb(result, array[index], index, array);
//     }
//     return result;
// }

// Call stack

// function foo() { // 
//     return 12; // | < 12
// }

// function bar(num) { // num = 10
//     return num + foo(); // 10 + foo() -> 10 + 12 -> 22 | < 22 
// }

// function buz(first, second) { // first = 2, second = 5
//     return bar(first * second) + bar(first / second); // bar(2 * 5) -> bar(10) -> 22 | < 22
// }

// const result = buz(2, 5); // < 22
// console.log(result); // 22

function recurseFoo(num) {
    // if (num <= 0) return num;
    return num > 0 ? num + recurseFoo(--num) : num;
} 

console.log(recurseFoo(12));


const myFunc = function someFunc(num) {
    return num > 0 ? num + someFunc(--num) : num;
};

console.log(myFunc(12));

const students = [{ name: 'Alex', marks: [12, 3, 4, 9, 12] }];

for (let i = 0; i < students.length; i++) {
    let marksSum = 0;
    for (let j = 0; j < students[i].marks.length; j++) {
        marksSum += students[i].marks[j];
    }
    students[i].avgMark = marksSum / students[i].marks.length;
}

console.log(students);