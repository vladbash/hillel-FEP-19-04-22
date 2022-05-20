const DEFAULT_MARKS_AMOUNT = 6;

// let firstGroup = generateStudents(5);
// let anotherGroup = generateStudents(6);

// console.log(getBestStudent(firstGroup));
// console.log(getBestStudent(anotherGroup));

// firstGroup = addAvgMarkForStudents(firstGroup);

function generateStudents(amount) {
    const students = [];

    for(let i = 0; i < amount; i++) {
        students[i] = {
            name: prompt('Enter student name'),
            marks: getRandomMarks()
        };
    }

   return students;
}

function addAvgMarkForStudents(students) {
    for(let i = 0; i < students.length; i++) {
        // some generation code
        students[i].avg = 5; // TODO: add applying avg mark function 
    }
    return students;
}

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