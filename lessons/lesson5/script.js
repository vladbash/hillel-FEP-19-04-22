// &&

// const number = +prompt('Insert random number: ');

// if (number >= 42 && number <= 96 && number != 52) {
//     alert('Magic happened! You are lucky!');
// } else {
//     alert('Try again later!');
// }

// const someValue = 42 && 32 && undefined;
// console.log(someValue);

// const a = 5;
// const b = 12;

// a > 3 && b > 8 && alert('Some message!');

// const someObj = {
//     name: 'John Doe',
//     citizen: {
//         country: 'UA'
//     }
// };

// delete someObj.citizen;

// const country = someObj.citizen && someObj.citizen.country;
// console.log(country);

// Don't use & (binary operations) - use && (logical operations)

// ||

// const someObj = {
//     name: 'John Doe',
//     citizen: {
//         country: 'UA'
//     }
// };

// // delete someObj.citizen.country;

// const country = someObj.citizen.country || 'PL';

// console.log(country);

// const number = +prompt('Insert random number: ');

// console.log(number <= 42 || number >= 96);

// if (number >= 42 || number <= 96) {
//     alert('Magic happened! You are lucky!');
// } else {
//     alert('Try again later!');
// }

// switch 

// const operation = +prompt(`What you want to do? Choose a number of operation:
// 1. +
// 2. -
// 3. /
// 4. *
// 5. sin
// 6. cos`);
// let result;
// switch (operation) {
//     default:
//         result = 'operation is undefined';
//         break;
//     case 1:
//         result = `sum`;
//         break;
//     case 2:
//         result = `dif`;
//         break;
//     case 3:
//         result = `mult`;
//         break;
//     case 4:
//         result = `div`;
//         break;
// }

// alert(result);

// const a = 42;

// switch(true) {
//     case a > 42:
//         console.log('a is grater then 42');
//         break;
//     case a < 21:
//         console.log('a is less then 21');
//         break;
//     default:
//         console.log('a equals ' + a);
// }

// ternary operator

// const a = 12;
// const b = 45;

// let c;
// if (a > b) {
//     c = a;
// } else {
//     c = b;
// }

// const c = a > b ? a : b;
// const c = a ? a : b; // -> a || b

// loops (while, do/while, for, for/in, for/of)

// let num = +prompt('Insert a number: ');

// while (num !== num) {
//     num = +prompt('Please, insert correct number: ');
// }

// let num;

// do {
//     num = +prompt('Insert a number: ');
// } while (num !== num);

// const val = confirm('Yes/No');
// alert(val);