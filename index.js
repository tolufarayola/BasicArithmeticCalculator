// Code for a Simple Arithmetic calculator

// Input numbers and operator
const value1 = parseFloat(prompt('Enter first number: '));
const operator = prompt('Enter operator (+ , - , * , / ): ');
const value2 = parseFloat(prompt('Enter second number: '));

let result;


if (operator == '+') {
    result = value1 + value2;
}
else if (operator == '-') {
    result = value1 - value2;
}
else if (operator == '*') {
    result = value1 * value2;
}
else {
    result = value1 / value2;
}

// Evaluate and Display Result
console.log(`${value1} ${operator} ${value2} = ${result}`);