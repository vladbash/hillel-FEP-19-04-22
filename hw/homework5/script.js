// // IIFE -> immediately invoked functional expression
// (function() {
//     let students = generateStudents(+prompt('How many students in your group?'));
//     do {

//         /*
//             some code!!!
//         */
//     } while(confirm('Do you want to continue?'));
// })();

// (() => {
//     let students = generateStudents(+prompt('How many students in your group?'));
//     do {

//         /*
//             some code!!!
//         */
//     } while(confirm('Do you want to continue?'));
// })();

let students = generateStudents(+prompt('How many students in your group?'));
do {
    console.log(students);
    /*
        some code!!!
    */
} while (confirm('Do you want to continue?'));