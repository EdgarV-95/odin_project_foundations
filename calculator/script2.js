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
        return add(a, b);
    };
    if (operator === "-") {
        return subtract(a, b);
    };
    if (operator === "x") {
        return multiply(a, b);
    };
    if (operator === "/") {
        return divide(a, b);
    };
};

// Create the functions that populate the display when you click the number buttons
// Store the ‘display value’ in a variable somewhere for use in the next step.

let storedValue = '';
let testVar = true;
const populate = (e) => {
    // This is for making sure the display starts from empty when an operand has been clicked and first number is saved
    if (operator.length > 0 && storedValue === '') {
        displayCurrent.textContent = '';
    };

    // This is for showing the result after the calculation has been done with an operand instead of the equals symbol.
    if (result.length === undefined) {
        displayCurrent.textContent = '';
        storedValue = '';
        displayTotal.textContent = `${result} ${operator}`;
        result = '';
        testVar = false;
        // Something needs changing here
    }
    displayCurrent.textContent += e.target.textContent;
    storedValue += e.target.textContent;
};

// Make the calculator work! 
// You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen
// And then operate() on them when the user presses the “=” key.

let firstNumber = '';
let operator = '';
const saveNumberAndOperator = (e) => {
    // Happens when there already has been a calculation and result has a value
    if (result.length === undefined) {
        console.log('1st func')
        firstNumber = result;
        operator = '';
        storedValue = '';
        operator = e.target.textContent;
        displayTotal.textContent = `${firstNumber} ${operator} `;
        displayCurrent.textContent = `${firstNumber}`;
        storedValue = '';

    // Happens when an operand is used to calculate a result for the first time. Note that this is also requires the 2nd if statement in populate() to make it work
    } else if (firstNumber.length > 0 && operator.length > 0 && storedValue.length > 0) {
        console.log('2nd func');
        calculate();
        firstNumber = result;

    // Happens when an operand is used to calculate a result for 2nd or multiple times.
    } else if (testVar === false) {
        console.log('3rd func');
        calculate();

    // Default
    } else {
        console.log('4th func');
        operator = e.target.textContent;
        firstNumber = storedValue;
        displayTotal.textContent = `${firstNumber} ${operator} `;
        displayCurrent.textContent = `${firstNumber}`;
        storedValue = '';
    };
};

let result = '';
let calculate = () => {
    result = operate(operator, +firstNumber, +storedValue);
    displayTotal.textContent = `${firstNumber} ${operator} ${storedValue}`;
    displayCurrent.textContent = result;
};


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
addition.addEventListener('click', saveNumberAndOperator);
subtraction.addEventListener('click', saveNumberAndOperator);
multiplication.addEventListener('click', saveNumberAndOperator);
division.addEventListener('click', saveNumberAndOperator);

// Equals
equals.addEventListener('click', calculate);

clear.addEventListener('click', () => {
    console.log(`First number: ${firstNumber} | Operator: ${operator} | Second number/StoredValue: ${storedValue} | Result: ${result}`);
});