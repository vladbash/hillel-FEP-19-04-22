// const operation = +prompt(`What you want to do? Choose a number of operation:
// 1. +
// 2. -
// 3. /
// 4. *
// 5. sin
// 6. cos`);

// if (operation != operation) {
//     alert("Wrong operation!");
// } else {
//     let result;
//     if (operation <= 0) {
//         alert("Wrong operation!");
//     } else if (operation < 5) {
//         const firstOperand = +prompt("Insert the first operand:");
//         const secondOperand = +prompt("Insert the second operand: ");

//         if (operation == 1) {
//             result = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
//         } else if (operation == 2) {
//             result = `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`;
//         } else if (operation == 3) {
//             result = `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`;
//         } else if (operation == 4) {
//             result = `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`;
//         }
//     } else if (operation < 7) {
//         const operand = +prompt("Insert an operand:");
//         if (operation == 5) {
//             result = `sin(${operand}) is ${Math.sin(operand)}`;
//         } else {
//             result = `cos(${operand}) is ${Math.cos(operand)}`;
//         }
//     } else {
//         alert("Wrong operation!");
//     }
//     if (result != undefined)
//         alert(`Result of your operation is ${result}`);
// }


const operation = +prompt(`What you want to do? Choose a number of operation:
1. +
2. -
3. /
4. *
5. sin
6. cos`);
let result;
switch (operation) {
    default:
        result = 'operation is undefined';
        break;
    case 1:
        result = `sum`;
        break;
    case 2:
        result = `dif`;
        break;
    case 3:
        result = `mult`;
        break;
    case 4:
        result = `div`;
        break;
}

alert(result);

// if (operation != operation || operation <= 0 || operation > 6) {
//     alert("Wrong operation!");
// } else {
//     let result;
//     if (operation < 5) {
//         const firstOperand = +prompt("Insert the first operand:");
//         const secondOperand = +prompt("Insert the second operand: ");

//         // if (operation == 1) {
//         //     result = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
//         // } else if (operation == 2) {
//         //     result = `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`;
//         // } else if (operation == 3) {
//         //     result = `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`;
//         // } else if (operation == 4) {
//         //     result = `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`;
//         // }
//         switch (operation) {
//             case 1:
//                 result = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
//                 break;
//             case 2:
//                 result = `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`;
//                 break;
//             case 3:
//                 result = `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`;
//                 break;
//             case 4:
//                 result = `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`;
//                 break;
            
//         }
//     } else if (operation < 7) {
//         const operand = +prompt("Insert an operand:");
//         if (operation == 5) {
//             result = `sin(${operand}) is ${Math.sin(operand)}`;
//         } else {
//             result = `cos(${operand}) is ${Math.cos(operand)}`;
//         }
//     }
//     alert(`Result of your operation is ${result}`);
// }