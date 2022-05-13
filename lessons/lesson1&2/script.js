// Это алерт с приветствием!
/*
тут много текста
который не видит браузер
*/
// alert('Hello students! (from file)');

// // Declaration
// var name;
// // Initialization
// name = 'Alex';
// Declaration + Initialization
// var name = 'Alex';

// let name = 'Alex';

// name = 'Bob';

// const pi = 3.1439;

// // !!!ASSIGMENT ERROR!!!
// // pi = 3;

// // !!!DON'T USE SUCH METHOD OF VAR DECLARATION!!!
// student = 'John';

// alert(student);

// 1. we can use for naming - azAZ09$_
// 2. don't use number in the begin (e.g. name1, n1ame, (not) 1name)

// 3. Styling:

// // camelCase (default)
// let studentName = 'Jack';
// let heighOfMainBlock = 12;

// // snakeCase
// let student_name = 'Dilan';
// let heigh_of_main_block = 14;

// // pascalCase
// let StudentName = 'Jeniffer';
// let HeighOfMainBlock = 22;

// kebabCase
// let student-name = 'Bob';
// let heigh-of-main-block = 23;

// 4. Declaration
// 1
// let studentName, studentAge, studentGroup;
// let studentName = 'Barry',
//     studentAge = 19,
//     studentGroup;

// // 2
// let name = 'Tony';
// let age = 22;

// // 5. Operations

// let studentInfo = 'name: ' + studentName + ' age: ' + studentAge;

// let studentGroupStart = 'Your group starts in: ' + prompt('Put month');
// alert(studentGroupStart);

// alert('Your group starts in: ' + prompt('Put month'));

// HW hints

// alert(studentInfo); // window.alert();
// prompt('Some text');

// ES6 / ES2015
// let / const

// ES5 / ES5.1 / ES3

// // variable
// var userName = 'Alex'; 

// // constant
// var USER_ID = 123;

// 6. Data types

// ES5

// Primitives
// String
// let stringValue = 'text 123'; // 'I'm ' <-- demo with string escaping
// let anotherStringValue = "text value"; // "I'm "

// // ES6
// let thirdStringValue = `text value`; // template string

// // let userName = 'Alex';
// // let someStringValue = 'test';

// // alert('Hello, ' + userName + '! Nice to meet you! ' + someStringValue + '!!!');

// // alert(`Hello, ${userName}! Nice to meet you! ${someStringValue}!!!`);

// // Number
// let numberValue = 42;
// let anotherNumberValue = 12.5;
// let thirdNumberValue = -42;

// // Boolean
// let boolValue = true;
// let anotherBoolValue = false;

// // Null
// let nullValue = null;

// // alert('stringValue: ' + stringValue);

// // stringValue = 68;

// // alert('stringValue: ' + stringValue);

// // Undefined
// let undefinedValue;

// // alert(undefinedValue);

// let anotherUndefinedValue = undefined;

// DON'T USE var
// var someVariable = 42;

// var someVariable = 'test';

// alert(someVariable);

// console.log('numberValue has type: ' + typeof numberValue);
// console.log('stringValue has type: ' + typeof stringValue);
// console.log('boolValue has type: ' + typeof boolValue);
// console.log('undefinedValue has type: ' + typeof undefinedValue);
// console.log('nullValue has type: ' + typeof nullValue);

// Operators

// Unary, Binary, Ternary

// Binary: operand1 operator operand2

// Number: -,+,/,*,etc.
// const firstNumber = 12;
// const secondNumber = 42;

// const sum = firstNumber + secondNumber;
// const dif = firstNumber - secondNumber;

// console.log('sum: ' + sum);
// console.log('dif: ' + dif);

// // String: +
// const firstString = 'Hello ';
// const secondString = 'world!';

// const concatString = firstString + secondString;

// console.log(concatString);

// Unary: operand operator, operator operand
// E.g.: ,=

//

// Явное
// Number

// string to number
// // console.log(typeof '32');
// const stringToNumber = Number('32');
// // console.log(stringToNumber);
// // console.log(typeof stringToNumber);
// const anotherStringToNumber = Number('djshd');
// console.log(anotherStringToNumber); // Not a Number (NaN)
// const nanValue = NaN;
// const infinityValue = Infinity;

// const negativeZeroValue = -0;

// "12lkd342"
// "12987"
// "0987"
// const stringValueByUser = prompt("Insert num value:");
// const anotherNumExample = parseInt(stringValueByUser);
// alert(`value: ${anotherNumExample}
// type: ${typeof anotherNumExample}
// source type: ${typeof stringValueByUser}`);

// // boolean to number
// const boolToNumber = Number(true); // true - 1, false - 0

// // null to number
// const nullToNumber = Number(null); // null - 0

// // undefined to number
// const undefinedToNumber = Number(undefined); // undefined - NaN

// Неявное
// -,*,/,** - все, кроме бинарного +

// const stringToNumber = '10' - '5';
// const anotherStringToNumber = 42 - '13';

// console.log(stringToNumber);
// console.log(anotherStringToNumber);

// const firstString = '560';
// const secondString = '289';
// const thirdStringToNumber = firstString + secondString; // Number(firstString) - Number(secondString) | -> 560 - 289 | -> 271

// const anotherStringOperation = +firstString + +secondString;

// console.log(anotherStringOperation);
// console.log(typeof anotherStringOperation);

// console.log(thirdStringToNumber);
// console.log(typeof thirdStringToNumber);
// console.log(typeof firstString);
// console.log(typeof secondString);

// // String
// // Явное
// // Number to String
// const numToString = String(42);
// console.log(typeof numToString);
// console.log(numToString);

// const anotherNumToString = String(NaN);
// console.log(typeof anotherNumToString);
// console.log(anotherNumToString);

// // Boolean to String
// const boolToString = String(true);
// console.log(typeof boolToString);
// console.log(boolToString);

// // null to String
// const nullToString = String(null);
// console.log(typeof nullToString);
// console.log(nullToString);

// // undefined to String
// const undefinedToString = String(undefined);
// console.log(typeof undefinedToString);
// console.log(undefinedToString);

// Неявное
// Оператор + (конкатанации)

// const numToString = '48' + 23; // -> '48' + '23' -> '4823'
// console.log(typeof numToString);
// console.log(numToString);

// const boolToString = true + ''; // -> 'true'

// Boolean
// const numToBool = Boolean(0); // false
// const secNumToBool = Boolean(123); // true
// const negativeNumToBool = Boolean(-100); // true

// const stringToBool = Boolean("Lorem ipsum"); // true
// const secStringToBool = Boolean(""); // false

// const nullToBool = Boolean(null); // false
// const undefinedToBool = Boolean(undefined); // false

// !
// true -> !true -> false

// const numToBool2 = !0; // !0 -> !false -> true
// const numToBool2 = !!0; // !!0 -> !!false -> !(!false) -> !true -> false

// const undefinedToBool2 = !!undefined; // !!undefined -> !!false -> !(!false) -> !true -> false

// Null
// Null() - doesn't exist

// Undefined
// Undefined() - doesn't exist
