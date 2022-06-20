// Display fields
const displayTotal = document.getElementById('display-total')
const displayCurrent = document.getElementById('display-current')

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
const subtraction = document.getElementById('substract');
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
    if (operator === "*") {
        return multiply(a,b);
    };
    if (operator === "/") {
        return divide(a,b);
    };
};

// Create the functions that populate the display when you click the number buttons
// Store the ‘display value’ in a variable somewhere for use in the next step.
let displayValue = 0;
const populate = (e) => {
    displayCurrent.textContent = e.target.outerText;
    displayValue = +displayCurrent.textContent;
}

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

// Store the first number that is input into the calculator when a user presses an operator,
let firstNumber = 0;
function saveFirstNumber() {
    firstNumber = displayValue;
}

// and also save which operation has been chosen
let operator = '';
function saveOperation(e) {
    console.log(e);
}
// save the operation there as a string somehow

// and then operate() on them when the user presses the “=” key.
function test() {
    saveFirstNumber();
    saveOperation();
}

function hehe() {
    let secondNumber = displayValue;
    console.log(operator);
    console.log(firstNumber);
    console.log(secondNumber);
    // operate(operator, firstNumber, displayValue);
}

addition.addEventListener('click', test)
equals.addEventListener('click', hehe);




// You should already have the code that can populate the display,
// so once operate() has been called, update the display with the ‘solution’ to the operation.

// This is the hardest part of the project. 
// You need to figure out how to store all the values and call the operate function with them.
// Don’t feel bad if it takes you a while to figure out the logic.