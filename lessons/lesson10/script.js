// // [...elements...]
// const arr = [12, 22, 56, 'test'];

// // via new Array(all elements)
// const arrayObj = new Array(12, 22, 45, 55);

// // via new Array(array length)
// const anotherArrayObj = new Array(5);

// // Array methods

// // toString() - returns string
// console.log('toString():', arr.toString());
// console.log('without toString():', arr + '');

// // join() - returns string
// console.log(`join('|'):`, arr.join('|'));
// console.log(`join(''):`, arr.join(''));
// console.log(`join():`, arr.join());

// // indexOf() - returns index of element
// console.log(`indexOf(22):`, arr.indexOf(22)); // 1
// console.log(`indexOf(42):`, arr.indexOf(42)); // -1

// // includes() - returns boolean result
// console.log(`includes(22):`, arr.includes(22)); // true
// console.log(`includes(42):`, arr.includes(42)); // false

// // push() - mutates source array and returns new length of one
// arr[arr.length] = 'new element';
// console.log('arr after arr[arr.length]', arr);
// arr.push('new element via push');
// console.log('arr after arr.push', arr);
// console.log(`arr.push(new element):`, arr.push(45));
// console.log(`arr.push(new element):`, arr.push('tail', 99, false, null));

// // pop() - mutates source array, deletes the last element and returns one
// console.log('pop():', arr.pop());
// console.log('arr after pop:', arr);

// // unshift() - mutates source array and puts a new element to the begging
// arr.unshift('begin');
// console.log('arr after unshift():', arr);
// console.log(`unshift('head'):`, arr.unshift('head'));
// console.log(`unshift('head'):`, arr.unshift('top', false, 89));
// console.log('arr after unshift():', arr);

// // shift() - mutates source array, deletes the first element and returns it
// console.log('arr.shift()', arr.shift());
// console.log('arr after shift()', arr);

// // concat() - concatenates a few arrays and returns new one
// console.log('arr.concat():', arr.concat(arrayObj));
// console.log('arr after concat:', arr);

// // splice(start, deleteCount, items) - mutates source array, deletes n elements starts from index and inserts new elements
// console.log('arr.splice():', arr.splice(3, 0, 'inserted', 'by', 'applying', 'method', 'splice'));
// console.log('arr after splice', arr);
// console.log('arr.splice():', arr.splice(1, 2));
// console.log('arr after splice', arr);

// // slice() - return subarray by params
// console.log('arr.slice():', arr.slice(4, 8));
// console.log('arr after slice', arr);
// console.log('arr.slice():', arr.slice(4));
// console.log('arr.slice():', arr.slice());

// HOF
// cb - callback
// function foo(cb) {
//     cb('hi from foo!');
// }

// foo(console.log);
// foo(alert);

// HOF Array methods
const arr = [42, 'foo', 'buz', `🥹`];

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i]);
// }

// forEach - applies callback for each array's element
function logElementMeta(element, index, array) {
    console.log(element);
}
arr.forEach(logElementMeta);

forEach(arr, function (element) {
    console.log('custom forEach:', element);
});

function forEach(array, cb) {
    for (let index = 0; index < array.length; index++) {
        cb(array[index], index, array);
    }
}

// map() - creates new array by applying cb for each element
const marks = '12,8,9,10,9'.split(',');

console.log(marks);

// const result = [];
// for (let index = 0; index < marks.length; index++) {
//     result.push(+marks[index]);
// }
// console.log(result);

// const result = marks.map(function(element, index, array) {
//     return +element;
// });

const result = marks.map(element => +element);

console.log('result of map():', result);
console.log('marks of map():', marks);

// filter() - filtrate array by condition and returns a new array
const filtered = result.filter(function (element, index, array) {
    return element >= 10;
});

console.log('result of filter():', filtered);

function filter(array, predicate) { // predicate is a function returns true or false
    const result = [];
    for (let index = 0; index < array.length; index++) {
        const conditionResult = predicate(array[index], index, array);
        if (conditionResult) {
            result.push(array[index]);
        }
    }
    return result;
}

// find() - finds and returns first element by condition/predicate
const firstGoodMark = result.find(element => element >= 10);

console.log('result of find():', firstGoodMark);

function find(array, predicate) {
    for (let index = 0; index < array.length; index++) {
        const element = array[index];
        const conditionResult = predicate(element, index, array);
        if (conditionResult) {
            return array[index];
        }
    }
}

// function findLast(array, predicate) {
//     for (let index = array.length - 1; index >= 0; index--) {
//         const element = array[index];
//         const conditionResult = predicate(element, index, array);
//         if (conditionResult) {
//             return array[index];
//         }
//     }
// }

find([8, 7, 9, 10, 12, 11], function(element, index) {
    return element >= 10 && index > 1;
});

// findIndex() - finds and returns first element's index by condition/predicate
const firstIndexGoodMark = result.findIndex(element => element >= 10);