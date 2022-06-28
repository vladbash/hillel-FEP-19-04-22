const closureCalculate = value => {
    let result = value;
    const calculator = {
        add(num) {
            console.log(`[add] result = ${result} num = ${num}`);
            result += num;
        },
        subtract(num) {
            console.log(`[subtract] result = ${result} num = ${num}`);
            result -= num;
        },
        multiply(num) {
            console.log(`[multiply] result = ${result} num = ${num}`);
            result *= num;
        },
        divide(num) {
            console.log(`[divide] result = ${result} num = ${num}`);
            result /= num;
        },
        getResult() {
            return result;
        }
    };

    return calculator;
};

const cal42 = closureCalculate(42);
const calc13 = closureCalculate(13);

cal42.add(100);
calc13.add(98);
cal42.multiply(300);
calc13.divide(14);
cal42.divide(13);
calc13.subtract(8);

const res = cal42.getResult();
console.log(res);

console.log(calc13.getResult());