// unary operators

// increment (++)
// let a = 42;
// // a = a + 1; // 42 + 1 = 43
// // console.log(a);
// // a += 1; // 43 + 1 = 44
// // console.log(a);

// // a++; // 44 + 1 = 45
// // console.log(a);
// // console.log(a++); // 45 -> 46

// const b = 98 + a++;

// // console.log(b);
// // console.log(a);

// console.log(a++); // suffix -> log 42 -> 42 + 1 -> a equals 43 
// console.log(a); // 43
// console.log(++a); // prefix -> 43 + 1 -> a equals 44 -> log 44 

// decrement (--)
// let c = 78;

// c = c - 1; // 77
// c -= 1; // 76

// c--; // 75

// console.log(c--); // suffix -> log 75 -> 75 - 1 -> c equals 74
// console.log(c); // 74
// console.log(--c); // prefix -> 74 - 1 -> c equals 73 -> log 73

// loop for

// let a = 10;

// while(a > 0) {
//     console.log(a--);
// }

// for (let i = 0; i < 5; ++i) {
//     console.log(`Iteration ${i}`);
// }

// const arr = [12, 56, 47, 'something new', false];

// for (let i = 0; i < arr.length ; i++) {
//     arr[i] = `Index: ${i} Value: ${arr[i]}`;
// }

// for (let i = 0; i < arr.length ; i++) {
//     console.log(arr[i]);
// }

// break

// const arr = [847, 848459, 48459, 5764, 89, 587, 857, 98, 27];

// for (let i = 0; i < arr.length; i++) {
//     if (arr[i] < 100) {
//         console.log(arr[i]);
//         break;
//     }
// }

// let i = 0;
// do {
//     if (arr[i] < 100) {
//         console.log('In while loop: ', arr[i]);
//         break;
//     }
//     i++;
// } while(i < arr.length);

// loop: for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] < 100) {
//     //     continue;
//     // }
//     switch(arr[i]) {
//         case 89:
//             break loop;
//     }
//     console.log(arr[i]);
// }

// {
//     loop: for (let i = 0; i < arr.length; i++) {
//         // if (arr[i] < 100) {
//         //     continue;
//         // }
//         switch(arr[i]) {
//             case 89:
//                 break loop;
//         }
//         console.log(arr[i]);
//     }
// }

// continue

// for (let i = 0; i < arr.length; i++) {
//     // if (arr[i] < 100) {
//     //     continue;
//     // }
//     switch(arr[i]) {
//         case 89:
//             continue;
//     }
//     console.log(arr[i]);
// }

// for..in
// const arr = [12, 56, 47, 'something new', false];

// for (const i in arr) {
//     console.log(i, arr[i]);
// }

// const obj = {
//     name: 'John',
//     surname: 'Doe',
//     marks: [12, 10, 11, 9]
// };

// for (const key in obj) {
//     console.log(`key ${key} value ${obj[key]}`);
// }

// for..of

// console.log('for..of');

// for (const el of arr) {
//     console.log(el);
// }

// for (const el of obj) {
//     console.log(el);
// }