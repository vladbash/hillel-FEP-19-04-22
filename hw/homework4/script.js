const history = [12, 34, 55];
console.log(history);
// const globalVariableForDemo = 'test';

do {
    let operation;
    do {
        operation = prompt(`What you want to do? Choose a number of operation:
1. +
2. -
3. /
4. *
5. sin
6. cos
7. history`, '');
        if (operation === '') {
            alert('Wrong operation');
        }
        operation = +operation;
    } while (operation !== operation || operation <= 0 || operation > 7);

    let result;
    if (operation < 5) {
        let firstOperand;
        do {
            firstOperand = +prompt("Insert the first operand:");
        } while (firstOperand !== firstOperand);

        let secondOperand;
        do {
            secondOperand = +prompt("Insert the second operand: ");
        } while(secondOperand !== secondOperand);
        switch (operation) {
            case 1:
                result = `${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}`;
                break;
            case 2:
                result = `${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}`;
                break;
            case 3:
                result = `${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}`;
                break;
            case 4:
                result = `${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}`;
                break;

        }
    } else if (operation < 7) {
        let operand;
        do {
            operand = +prompt("Insert an operand:")
        } while (operand !== operand);
        if (operation == 5) {
            result = `sin(${operand}) is ${Math.sin(operand)}`;
        } else {
            result = `cos(${operand}) is ${Math.cos(operand)}`;
        }
    }
    if (operation == 7) {
        let historyResult = '';
        // for (let i = 0; i < history.length; i++) {
        //     historyResult += history[i] + '\n';
        // }
        for (const element of history) {
            historyResult += element + '\n';
        }
        console.log(historyResult);
        alert(historyResult);
    } else {
        history[history.length] = result;
        alert(`Result of your operation is ${result}`);
    }

} while (confirm('Do you want to repeat calculation?'));