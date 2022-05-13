// // IIFE -> immediately invoked functional expression
// (function() {
//     /*
//         some code!!!
//     */
// })();

// (() => {
//     /*
//         some code!!!
//     */
// })();

// Hoisting (всплытие)

// foo();

// function foo() {}

// // console.log(buz);
// console.log(b);

// const a = 'new';

// var b = 42;

// var bar = () => {
//     console.log('hello');
// };

// bar();
// ...

// Scopes

// Global / Local

// Global
// const SOME_MAGICAL_VALUE = 42;

// function foo() {
//     console.log(SOME_MAGICAL_VALUE);
// }

// foo();

// // Local
// function bar() {
//     const ANOTHER_MAGICAL_VALUE = 24;
//     console.log(ANOTHER_MAGICAL_VALUE);
// }

// bar();

// console.log(ANOTHER_MAGICAL_VALUE);

// // Local -> 1. Functional

// function functionalScopeDemo() {
//     console.log('some message');
//     if (true) {
//         var someVariable = 'hello';
//     }
//     console.log(someVariable);
// }

// functionalScopeDemo();

// // Local -> 2. Block

// function blockScopeDemo() {
//     console.log('block message');
//     if (true) {
//         let someVariable = 'hello';
//         console.log('parent block: ', someVariable);
//         if (true) {
//             let someVariable = true;
//             console.log('nested block: ', someVariable);
//         }
//     }
//     if (true) {
//         let someVariable = 42;
//         console.log('another block: ', someVariable);
//     }
//     console.log(someVariable);
// }

// blockScopeDemo();

// 
'use strict';

function foo() {
    var a = 42;
    b = 42;
    c = 42;
    console.log(a);
    console.log(b);
    console.log(c);
}

foo();

console.log(c);
console.log(b);
console.log(a);