// Display fields
const displayTotal = document.getElementById('display-total');
const displayCurrent = document.getElementById('display-current');

// Digits
const zero = document.getElementById('zero');
const one = document.getElementById('one');
const two = document.getElementById('two');
const three = document.getElementById('three');
const four = document.getElementById('four');
const five = document.getElementById('five');
const six = document.getElementById('six');
const seven = document.getElementById('seven');
const eight = document.getElementById('eight');
const nine = document.getElementById('nine');

// Operations
const addition = document.getElementById('add');
const subtraction = document.getElementById('subtract');
const multiplication = document.getElementById('multiply');
const division = document.getElementById('divide');
const equals = document.getElementById('equal');
const clear = document.getElementById('clear');

// Add
const add = (a, b) => a + b;

// Subtract
const subtract = (a, b) => a - b;

// Multiply
const multiply = (a, b) => a * b;

// Divide
const divide = (a, b) => a / b;

// Create a new function that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = (operator, a, b) => {
    if (operator === "+") {
        return add(a,b);
    };
    if (operator === "-") {
        return subtract(a,b);
    };
    if (operator === "x") {
        return multiply(a,b);
    };
    if (operator === "/") {
        return divide(a,b);
    };
};

// Create the functions that populate the display when you click the number buttons
// Store the ‘display value’ in a variable somewhere for use in the next step.
// If an operator has been already pressed then clear the display content so a new number can be entered
// Show every added number on the display
let storedValue = [];
const populate = (e) => {
    if (result !== 'used') {
        displayCurrent.textContent += e.target.innerText;
        storedValue.push(e.target.innerText);
    } else {
        displayCurrent.textContent += e.target.innerText;
        result = '';
        storedValue.push(e.target.innerText);
    }

};

// Store the first number that is input into the calculator when a user presses an operator
let firstNumber = '';
function saveFirstNumber() {
    displayCurrent.textContent = firstNumber;
    firstNumber = storedValue.join('');
};

// Saves the chosen operation inside 'operator'
// Calls saveFirstNumber() to save the value of the number entered
// Clear out displayCurrent so the next value won't concatinate
let operator = '';
function saveFirstNumberAndOperator(e) {
    if (firstNumber.length == 0) {
        saveFirstNumber();
        operator = e.target.innerText;
        storedValue = [];
        displayCurrent.textContent = `${firstNumber} ${operator} `
    } else {
        firstNumber = result;
        operator = e.target.innerText;
        storedValue = [];
        result = 'used';
        displayCurrent.textContent = `${firstNumber} ${operator} `;
        displayTotal.textContent = '';
    };

};

// Store the value of the second number
let secondNumber = '';
function saveSecondNumber() {
    secondNumber = storedValue.join('');
};

// and then operate() on them when the user presses the “=” key.
// You should already have the code that can populate the display,
// so once operate() has been called, update the display with the ‘solution’ to the operation.
let result = '';
function calculateFirst() {
    saveSecondNumber();
    result = operate(operator, +firstNumber, +secondNumber);
    displayCurrent.textContent = `${firstNumber} ${operator} ${secondNumber}`;
    displayTotal.textContent = result;
};

// This is the hardest part of the project. 
// You need to figure out how to store all the values and call the operate function with them.
// Don’t feel bad if it takes you a while to figure out the logic.

function nextCalc() {
    if (result.length == 0) {
        calculateFirst() 
    } else {
        displayCurrent.textContent = result;
        displayTotal.textContent = '';
        firstNumber = result;
        saveSecondNumber();
        newResult = operate(operator, +firstNumber, +secondNumber);
    }
}

// find a way to give result when pressing operations not just equals

// Digit button event listeners
zero.addEventListener('click', populate);
one.addEventListener('click', populate);
two.addEventListener('click', populate);
three.addEventListener('click', populate);
four.addEventListener('click', populate);
five.addEventListener('click', populate);
six.addEventListener('click', populate);
seven.addEventListener('click', populate);
eight.addEventListener('click', populate);
nine.addEventListener('click', populate);

// Operation button event listeners
addition.addEventListener('click', saveFirstNumberAndOperator);
subtraction.addEventListener('click', saveFirstNumberAndOperator);
multiplication.addEventListener('click', saveFirstNumberAndOperator);
division.addEventListener('click', saveFirstNumberAndOperator);
equals.addEventListener('click', nextCalc);

clear.addEventListener('click', test);
function test() {
    console.log(`first number: ${firstNumber}`);
    console.log(`operator: ${operator}`);
    console.log(`second number: ${secondNumber}`);
    console.log(`result: ${result}`);
    console.log('storedValue: ' + storedValue);
}
