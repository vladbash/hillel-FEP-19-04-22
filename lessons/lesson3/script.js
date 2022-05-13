// let someValue = 'value' // ASI - automatic semicolon insertion
// console.log(someValue)
// someValue = someValue + 1
// console.log(someValue)

// Demo with semicolon
// alert('Hello');
// [1, 2, 3].map(function(e) {
//     console.log(e);
//     return +e;
// });

// Demo with semicolons
// alert('Hello')
// [1, 2, 3].map(function(e) {
//     console.log(e)
//     return +e
// })

// Object (reference type)

// const studentName = 'John Doe';
// const studentAge = 21;
// const studentFaculty = 'Math';
// const studentAvgMark = 85;

// const student2Name = 'John Doe';
// const student2Age = 21;
// const student2Faculty = 'Math';
// const student2AvgMark = 85;

// const student = {
//     name: 'John Doe', // property - key: value
//     age: 21,
//     faculty: 'Math',
//     avgMark: 85
// };

// const student2 = {
//     name: 'James Kirk',
//     age: 45,
//     faculty: 'Math',
//     avgMark: 95
// };

// console.log(student);

// // get value by dot (.)
// console.log(student.name);
// console.log(student2.name);

// // get value by brakes []
// console.log(student['age']);
// console.log(student2['age']);

// // set value by dot (.)
// student.age = 22;
// console.log(student.age);

// // set value by brakes []
// student2['age'] = 96;
// console.log(student2['age']);

// // get not declare property
// console.log(student.citizen); // undefined

// // set not declare property
// student.citizen = 'UA';
// console.log(student.citizen);
// console.log(student);

// const demoObj = {};

// demoObj.field1 = 12;

// console.log(demoObj.field2);

// demoObj.field2 = 'test';

// console.log(demoObj.field2);

// console.log(demoObj);

// const someVar = 42;
// someVar = 24;

// const someObj = {
//     name: 'Test'
// };
// // someObj = {};

// someObj.name = 'tseT';

// delete
// const student = {
//     name: 'John Doe', // property - key: value
//     age: 21,
//     faculty: 'Math',
//     avgMark: 85
// };

// // console.log(student);

// // delete student.name;

// // console.log(student);

// // name -> fullName

// student.fullName = student.name;
// delete student.name;

// console.log(student);

// Array

// const marks = [95, 90, 97, 100, 85, 60];
// /**
//  * [
//  *  0: 95, // element - index: value
//  *  1: 90,
//  *  2: 97,
//  *  ...,
//  *  n: ...
//  * ]
//  */
// console.log(marks);
// console.log(marks.length);

// // get by index
// console.log(marks[1]);
// console.log(marks['1']); // '1' -> 1
// console.log(marks['1sdkjksd']); // '1sdkjksd' -> NaN
// console.log(marks[marks.length - 1]);

// // set by index
// marks[2] = 900;
// marks[marks.length] = 89;
// console.log(marks);
// marks[marks.length] = 89;
// console.log(marks);

// // delete by index
// delete marks[1];
// console.log(marks);
// console.log(marks[1]);

// // 
// marks[14] = 67;
// console.log(marks);

// different types
// const demoArray = [123, true, 'Lorem ipsum', null, { name: 'Alex' }];

// console.log(demoArray);

// const demoObject = {
//     name: 'John',
//     marks: [23, 45, 22, 47],
//     faculty: {
//         location: 'Odesa',
//         students: 905,
//         est: 1912
//     },
//     some: null
// };

// demoArray[5] = demoObject;

// console.log(demoObject.marks[1]); // 45
// console.log(demoObject.faculty.location); // 'Odesa'

// console.log(demoArray);