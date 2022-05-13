// function doSmt() {
//     console.log('do');
//     console.log('something');
// }

// doSmt();
// doSmt();
// doSmt();
// doSmt();
// doSmt();
// doSmt();
// doSmt();

// let value;
// console.log(value);

// Function with one argument
// function printMyMessage(message) {
//     console.log(`Your message is: ${message}`);
// }

// printMyMessage('Hello from 21th line!');
// printMyMessage('Second call');
// printMyMessage();

// Function with a lot of arguments
// function sumDigits(first, second) {
//     console.log(`operation sum ${first} + ${second} equals ${first + second}`);
// }

// sumDigits(12, 44);
// sumDigits(42, 4);
// sumDigits(29, -5);
// sumDigits(25);
// sumDigits();


// Don't do!!!!
// let first = 12, second = 1;
// function sumDigits() {
//     console.log(`operation sum ${first} + ${second} equals ${first + second}`);
// }

// first = 12, second = 44;
// sumDigits();

// first = 42, second = 4;
// sumDigits(42, 4);

// first = 29, second = -5;
// sumDigits(29, -5);

// first = 25, second = undefined;
// sumDigits(25);

// first = undefined, second = undefined;
// sumDigits();

// function formatString(stringValue) {
//     const result = `--- ${stringValue} ---`;
//     return result;
// }

// function formatString(stringValue) {
//     return `--- ${stringValue} ---`;
// }

// const someVariable = formatString('Hello from function');
// console.log(someVariable);

// const secondDemoVar = formatString('second variable value');
// console.log(secondDemoVar);

// function doSmtWithoutResult(arg1, arg2) {
//     console.log(arg1, arg2);
// }

// const someResult = doSmtWithoutResult(45, 12);
// console.log(someResult);

// function formatString(stringValue) {
//     if (stringValue.length) {
//         return `--- ${stringValue} ---`;
//     }
//     console.log('log after return');
//     return `--- ${stringValue} ---`;
// }

// console.log(formatString('some string'));
// console.log(formatString());

// function printSymbols(word) {
//     for (const index in word) {
//         if (+word[index] === +word[index]) {
//             return +word[index];
//         }
//        console.log(word[index]);
//     }
// }

// printSymbols('Hel1lo');
// printSymbols('fooo6oooo');
// printSymbols('demo 123');

// function doSmt() {
//     const a = 15, b = 25, c = 33;
//     return [a, b, c];
//     return a + b + c;
// }

// console.log(doSmt());

// Function types

// Function declaration

applyDeclaration();

function applyDeclaration() {
    console.log('applyDeclaration was called');
}

// Function expression

const doSomeExpression = function () {
    console.log('doSomeExpression was called');
    return 'some value';
};

console.log(typeof doSomeExpression);

doSomeExpression();

// expression demo
{
    function calculateSmt(first, second, operation) {
        if (first !== first) {
            console.error('first is not number');
            return;
        }
        if (second !== second) {
            console.error('second is not number');
            return;
        }
        if (typeof operation !== 'function') {
            console.error('operation is not function');
            return;
        }
        return operation(first, second);
    }

    // console.log(calculateSmt(42, 44, function (a, b) {
    //     return a + b;
    // }));
}

// one more functional expression
const doSmtMore = function doSmtMore() {
    console.log('doSmtMore was applied');
    // doSmtMore();
};

doSmtMore();

// (ES6) arrow function

const doSomeArrow = (first, second, etc) => {
    const result = first + second + etc;
    console.log(`result is ${result}`);
    return result;
};

doSomeArrow(12, 42, 12);

// demo

const a = 0, b = 43;

if (a >= b) {
    console.log('a gt b');
}