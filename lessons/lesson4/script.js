// Bad
// alert ("hello");
// console.log ("hello from console");

// Good
// alert("hello");
// console.log("hello from console");

// String

// \n - new line
// \t - tab
// \ - no action needed
// const demoString = "lorem \tipsum \netc";
// const anotherDemoString = 'it\'s party time';

// const demoTemplateString = `lorem 
// ipsum
// etc
// ${demoString}
// `;

// console.log(demoString);
// console.log(demoTemplateString);
// console.log(anotherDemoString);

// Array
// const demoArray = ['test', true, 12, null, { name: 'alex' }];

// console.log(typeof demoArray);

// // console.log(demoArray[1]); // true

// // console.log(demoArray.length); // 5

// // String
// const demoString = "lorem ipsum";

// console.log(typeof demoString);

// console.log(demoString[7]);
// console.log(demoString.length);

// Object
// const demoObject = {
//     name: 'Alex',
//     age: 17,
//     marks: [12, 2, 7],
//     address: {
//         city: 'Odesa',
//         country: {
//             full: 'Ukraine',
//             short: 'UA'
//         }
//     },
// };

// console.log(demoObject.name);
// console.log(demoObject["age"]);

// 
// const a = 42;
// const obj = {
//     value: 54
// };

// const str = `{
//     value: 54
// }`;
// console.log(str);

// obj + ''; // [object Object]
// String(obj); // [object Object]

// const result = a + obj;
// console.log(result); // 42[object Object]

// const secondResult = a - obj; // 42 - '[object Object]' -> 42 - NaN -> NaN
// console.log(secondResult);

// const boolObj = Boolean(obj); // Boolean('[object Object]') -> true
// console.log(boolObj);

// Number({}); // NaN
// Boolean({}); // true

// Array
// const demoArray = [12, 42, 55, 'test'];

// const tempValue = demoArray + '';

// console.log(tempValue);
// console.log(typeof tempValue);
// console.log(typeof demoArray);

// const secondTempValue = +demoArray; // +'12,42,55,test' -> NaN
// console.log(secondTempValue); // NaN
// console.log(typeof secondTempValue); // Number

// // const anotherDemoArray = [472];

// // const thirdTempValue = +anotherDemoArray; // +'472' -> 472
// // console.log(thirdTempValue); // 472
// // console.log(typeof thirdTempValue); // Number

// const anotherDemoArray = [472, 65];

// const thirdTempValue = +anotherDemoArray; // +'472,65' -> NaN
// console.log(thirdTempValue); // NaN
// console.log(typeof thirdTempValue); // Number

// Boolean
// console.log(Boolean([])); // true
// console.log(Boolean([0])); // true

// console
// const demoNumber = 23;
// const demoString = 'demo';
// const demoBool = false;
// const demoNull = null;
// const demoUndefined = undefined;
// const demoObj = { name: 'Bob' };

// console.log(typeof console);
// console.log(typeof console.log);
// console.info('some info message');
// console.log('some log message');

// console.warn('some warn message');
// console.error('some error message');

// demoBool = true;

// const users = [
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'dadmin', pass: '12345', name: 'John Doe' },
//     { login: 'badmin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
//     { login: 'admin', pass: '12345', name: 'John Doe' },
// ];

// console.log(users);

// console.table(users);

// Logical operators
// >,<,>=,<=,==,===,!=,!==

// const a = 5;
// const b = 6;

// console.log(a > b); // false
// console.log(a < b); // true
// console.log(a <= b); // true
// console.log(a >= b); // false

// console.log(a == b); // false
// console.log(a != b); // true

// console.log(a === b); // false
// console.log(a !== b); // true

// const c = 42;
// const d = '42';

// console.log(c == d); // number == string -> number == number -> 42 == 42 -> true
// console.log(c === d); // number === string -> false | number === number -> 42 === 42 -> true

// ==
// https://dorey.github.io/JavaScript-Equality-Table/
// number == other type (string, boolean, object) -> number == number -> value == value
// console.log(1 == true); // 1 == 1 -> true
// console.log(0 == null); // false
// console.log(0 == undefined); // false

// console.log(NaN == NaN); // false
// console.log(NaN === NaN); // false
// console.log(undefined == undefined); // true
// console.log(undefined === undefined); // true
// console.log(null == null); // true
// console.log(null === null); // true

// const someVar = NaN;
// console.log(someVar == someVar); // false
// console.log(someVar != someVar); // true

const demoValue = prompt('What\'s your name?');

// if (demoValue == 'Alex') {
//     alert('Nice to meet you, Alex');
// } else {
//     alert('I don\'t know you!');
// }

// if (demoValue == 'Alex')
//     alert('Nice to meet you, Alex');
// else
//     alert('I don\'t know you!');

// if (demoValue == 'Alex') {
//     alert('Nice to meet you, Alex');
//     console.log('Nice to meet you, Alex');
// }
// else
//     alert('I don\'t know you!');

// if (demoValue == 'Alex')
//     console.log('Nice to meet you, Alex');
// else {
//     if (demoValue == 'Bob')
//         console.log('Nice to meet you, Bob');
//     else {
//         alert('I don\'t know you!');
//     }
// }

// if (demoValue == 'Alex')
//     console.log('Nice to meet you, Alex');
// else if (demoValue == 'Bob')
//     console.log('Nice to meet you, Bob');
// else if (demoValue == 'John')
//     console.log('Nice to meet you, John');
// else {
//     alert('I don\'t know you!');
// }

// Lecture 5
// && ||
// switch
// loops - while,do/while,for
// break, continue