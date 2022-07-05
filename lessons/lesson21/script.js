// function foo() {
//     console.log(arguments);
//     Array.from(arguments).forEach((e, i) => {
//         console.log(`Argument ${i+1}. ${e}`);
//     });
// }

// foo(true, 22, 42, null);

// REST OPERATOR

// const bar = (a, ...arguments) => {
//     console.log('a: ', a);
//     console.log('arguments: ', arguments);
// };

// bar(42, false, [], 45);

// const arr = [3.1415, Math.E, [], null, 42, 70];

// // // Long way
// // const PI = arr[0];
// // const E = arr[1];

// // Short way
// const [PI, E, ...demo] = arr;

// console.log(PI);
// console.log(E);
// console.log(demo);

// const student = {
//     name: 'John',
//     surname: 'Wick',
//     marks: [100, 100, 100, 100]
// };

// const { marks, ...person } = student;
// console.log(marks);
// console.log(person);

// SPREAD OPERATOR

// const arr1 = [42, 33, 90];
// const arr2 = [89, 32, 41];

// const demo = [...arr1, ...arr2];
// console.log(demo);

// const obj1 = {
//     name: 'Bob',
//     faculty: 'Math'
// };

// const obj2 = {
//     name: 'John',
//     surname: 'Dilon',
//     marks: [100, 98, 99, 100]
// };

// const student = {
//     ...obj1,
//     ...obj2
// };

// console.log(student);

const obj1 = {
    name: 'Bob',
    faculty: 'Math'
};

const obj2 = { ...obj1 };

console.log('obj1', obj1);
console.log('obj2', obj2);

console.log(obj1 === obj2); // true? false?