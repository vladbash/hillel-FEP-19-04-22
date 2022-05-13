const firstOperand = +prompt('Insert the first number');
const secondOperand = Number(prompt('Insert the second number'));

console.log(typeof firstOperand); // number
console.log(typeof secondOperand); // number

const results = `Operations are finished!
Sum: ${firstOperand} + ${secondOperand} = ${firstOperand + secondOperand}
Diff: ${firstOperand} - ${secondOperand} = ${firstOperand - secondOperand}
Mult: ${firstOperand} * ${secondOperand} = ${firstOperand * secondOperand}
Div: ${firstOperand} / ${secondOperand} = ${firstOperand / secondOperand}
`;

alert(results);
console.log(results);