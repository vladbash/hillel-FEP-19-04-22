const DEFAULT_MARKS_AMOUNT = 6;

function getRandomMarks() {
    const marks = [];
    for(let i = 0; i < DEFAULT_MARKS_AMOUNT; i++) {
        // some generation code
    }
    return marks;
}

function getBestStudent(students) { // [{ name: 'John Doe', marks: [10, 12, 5, 7, 8, 10], avgMark: 8.7  }, ...]
    let bestStudent = students[0];
    for (let i = 1; i < students.length; i++) {
        if (bestStudent.avgMark < students[i].avgMark)
            bestStudent = students[i];
    }
    return bestStudent;
}

let students = [];

function main() {
    let students = generateStudents(+prompt('How many students in your group?'));
    do {
        
        /*
            some code!!!
        */
    } while(confirm('Do you want to continue?'));
}
main();

// IIFE -> immediately invoked functional expression
(function() {
    let students = generateStudents(+prompt('How many students in your group?'));
    do {
        
        /*
            some code!!!
        */
    } while(confirm('Do you want to continue?'));
})();

(() => {
    let students = generateStudents(+prompt('How many students in your group?'));
    do {
        
        /*
            some code!!!
        */
    } while(confirm('Do you want to continue?'));
})();