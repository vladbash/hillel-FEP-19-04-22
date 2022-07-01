// // context / this (good)

// const student = {
//     name: 'Bob',
//     surname: 'Malcovich',
//     getFullName() {
//         return this.name + ' ' + this.surname;
//     }
// };

// console.log(student.getFullName());

// student.surname = 'McQueen';

// console.log(student.getFullName());

// // w/o context (bad)
// const student2 = {
//     name: 'John',
//     surname: 'Walker',
//     getFullName() {
//         return student2.name + ' ' + student2.surname;
//     }
// };

// console.log(student2.getFullName());

// student2.surname = 'McAdams';

// console.log(student2.getFullName());

// universal function/method

// const getFullName = function() {
//     return `${this.name} ${this.surname}`;
// };

// const student = {
//     name: 'Tony',
//     surname: 'Smt',
//     getFullName: getFullName
// };
// console.log(student.getFullName());

// const secondStudent = {
//     name: 'Ezekiel',
//     surname: 'McSaint',
//     getFullName: getFullName
// };
// console.log(secondStudent.getFullName());

// 1. inline function applying

// const getFullName = function() {
//     return `${this.name} ${this.surname}`;
// };

// const student = {
//     name: 'Tony',
//     surname: 'Smt',
//     getFullName: getFullName
// };

// console.log(student.getFullName());

// const secondStudent = {
//     name: 'Bob',
//     surname: null,
//     getFullName: student.getFullName,
//     applyGettingInfo: function(cb) {
//         const fullName = cb();
//         return fullName;
//     }
// };

// console.log(secondStudent.getFullName());

// // context losing

// const res = secondStudent.applyGettingInfo(student.getFullName);
// console.log(res);

// 2. apply / call

// function doSmt(arg, name) {
//     console.log('starting doing smt');
//     console.log('function args', arg, name);
//     console.log('function args in arguments ', arguments);
//     console.log('getting context', this);
//     console.log('finishing doing smt');
// }

// const arrowDemo = () => {
//     console.log('arrowDemo arguments ', arguments);
// };

// arrowDemo(12, 42, false);


// 2.1. apply

// doSmt.apply({ name: 'cyber object' }, [42, '77']);
// doSmt.apply(document, [42, '77']);

// 2.2. call

// doSmt.call({ length: 22 }, 'text', 'HTML');

// Demo
// const liEls = document.getElementsByTagName('li');

// // const arr = [12, 33, 44, 23];
// // const forEach = arr.forEach;

// // forEach.call(liEls, (e, i) => {
// //     e.classList.add('item');
// //     e.innerText = i;
// // });

// Array.prototype.forEach.apply(liEls, [(e, i) => {
//     e.classList.add('item');
//     e.innerText = i;
// }]);

// 3. bind

// const doSmtBound = doSmt.bind({
//     someProp: 42
// });

// doSmtBound();

// doSmtBound.apply({
//     length: 12
// }, ['text', null]);

// const obj = {
//     age: 24,
//     beep: doSmtBound
// };

// obj.beep();

// const newBoundFunc = doSmt.bind({
//     prop: 'bound context'
// }, 'default arg', false);

// newBoundFunc(42);

// 4. new

// const obj = {
//     someProp: 42
// };

// function Student(name, surname, age, faculty) {
//     this.name = name;
//     this.surname = surname;
//     this.age = age;
//     this.faculty = faculty;

//     this.getInfo = () => {
//         return `
// Name: ${this.name} ${this.surname}
// Faculty: ${this.faculty}
// Age: ${this.age}`;
//     };
// }

// // student value is object
// const student = new Student('Tony', 'Kent', 22, 'Math');
// console.log(student);

// // anotherStudent is undefined
// const anotherStudent = Student('Bob', 'Scott', 28, 'Biology');
// console.log(anotherStudent);

// const num = Number('42');
// console.log(typeof num); // number

// const num2 = new Number('42');
// console.log(typeof num2); // object
// console.log(num2);

// function Number_(value) {
//     this.value = +value;
//     this.initialValue = value;
//     return +value;
// }

// const a = Number_('42');
// console.log(a, typeof a);

// const b = new Number_('42');
// console.log(b, typeof b);

function User(login, email, password) {
    this.login = login;
    this.email = email;
    this.password = password;

    this.checkPassword = password => {
        return this.password === password;
    };

    // return {
    //     login,
    //     email,
    //     role: 1
    // };
}

const newUser = new User('admin', 'admin@admin.com', '1234');
console.log(newUser);

// console.log(typeof null); // object

console.log(newUser instanceof User); // true
console.log(newUser instanceof Number); // false
console.log(newUser instanceof Object); // true (__proto__)

function Burger(toppings) {}

const cheeseBurger = new Burger(/* cheese */);
cheeseBurger.getPrice(); // number price;
cheeseBurger.getCal(); // number calories;
cheeseBurger.addTopping(); // adding topping
