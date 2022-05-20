// // Primitives
// let a = 12;
// let b = a;

// console.log('a = ', a, ' b = ', b);
// b = 3;
// console.log('a = ', a, ' b = ', b);

// // Objects

// let obj = {
//     name: 'Alex',
//     age: 22
// };

// let anotherObj = obj;

// console.log('obj = ', obj);
// console.log('anotherObj = ', anotherObj);

// anotherObj.name = 'Bob';

// console.log('obj = ', obj);
// console.log('anotherObj = ', anotherObj);

// anotherObj = {
//     prop1: 'value'
// };

// console.log('obj = ', obj);
// console.log('anotherObj = ', anotherObj);

// function doSmt(o) {
//     console.log(o);
//     o.someProp = 'value';
//     // o = null;
//     delete o.name;
// }


// const obj = {
//     name: 'obj',
//     isSystem: true
// };

// const obj2 = {
//     content: 'test'
// };

// doSmt(obj); // o = obj;
// doSmt(obj2); // o = obj2;

// console.log(obj);
// console.log(obj2);

// Methods 

// 1. as own functional expression
// const obj = {
//     name: 'obj__name',
//     getName: function() {
//         return this.name;
//     }
// };

// console.log(obj.getName());

// const secObj = {
//     name: 'obj',
//     getName: () => 'obj'
// };

// console.log(secObj.getName());

// // 2. as generated with existing function functional expression 

// function doSth() {
//     console.log(`I'm working!`);
// }

// const newObj = {
//     doSomething: doSth
// };

// const doSomething = doSth;
// doSomething();

// newObj.doSomething();

// // 3. as own method

// const objWithMethod = {
//     prop: {
//         name: 'Alex'
//     },
//     getProp() {
//         return this.prop;
//     }
// };

// console.log(objWithMethod['getProp']());
// console.log(objWithMethod.getProp());


// Boxing

let str = 'Hello lel Hillel';

console.log(str[1]);
console.log(str.length);

// cases
// toUpperCase() - returns new string

console.log('toUpperCase():', str.toUpperCase());
console.log('source:', str);

// toLowerCase() - returns new string

console.log('toLowerCase():', str.toLowerCase());
console.log('source:', str);

// checking
// indexOf() - returns first index of substring

console.log('indexOf():', str.indexOf('lel')); // 6
console.log('indexOf():', str.indexOf('12')); // -1
console.log('source:', str);

if (str.indexOf('lel') > -1) {
    console.log('lel is in str');
}

// lastIndexOf() - returns first index of substring

console.log('lastIndexOf():', str.lastIndexOf('lel')); // 13
console.log('lastIndexOf():', str.lastIndexOf('12')); // -1
console.log('source:', str);

// includes() - returns boolean

console.log('includes():', str.includes('lel')); // true
console.log('includes():', str.includes('12')); // false
console.log('source:', str);

if (str.includes('lel')) {
    console.log('lel is in str');
}

// string into array
// split() - splitting string into array / returns array

console.log('split():', str.split());
console.log(`split(''):`, str.split(''));
console.log(`split(' '):`, str.split(' '));

// replace() - returns new string

console.log(`replace('Hello', 'Hi'):`, str.replace('Hello', 'Hi'));
console.log('source:', str);

console.log('Hello Hello'.replace('Hello', 'Hi'));
console.log('Hello Hello'.replaceAll('Hello', 'Hi'));
console.log('Hello Hello'.replace(/Hello/g, 'Hi'));

// trim() - return new string

const strWithWhiteSpaces = '  some string   ';
console.log('trim():', strWithWhiteSpaces.trim());
console.log('trimStart():', strWithWhiteSpaces.trimStart());
console.log('trimEnd():', strWithWhiteSpaces.trimEnd());

