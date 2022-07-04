// Display fields
const displayTotal = document.getElementById('display-total');
const displayCurrent = document.getElementById('display-current');

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
    if (operator === "*") {
        return multiply(a, b);
    };
    if (operator === "/") {
        return divide(a, b);
    };
};

// Create the functions that populate the display when you click the number buttons
// Store the ‘display value’ in a variable somewhere for use in the next step.
let storedValue = '';
let toggleOption = true;
const populate = (e, kbd) => {
    // Handle divide by 0;
    if (displayCurrent.textContent === 'Cannot divide by 0') {
        clearCalc();
    };

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
        toggleOption = false;
    };

    if (e === 'empty') {
        displayCurrent.textContent += kbd;
        storedValue += kbd;
    } else {
        displayCurrent.textContent += e.target.textContent;
        storedValue += e.target.textContent;
    };
};

// Make the calculator work! 
// You’ll need to store the first number that is input into the calculator when a user presses an operator, and also save which operation has been chosen
// And then operate() on them when the user presses the “=” key.
let firstNumber = '';
let operator = '';
const saveNumberAndOperator = (e, kbd) => {
    // Happens when there already has been a calculation and result has a value
    if (result.length === undefined) {
        firstNumber = result;
        operator = '';
        storedValue = '';
        if (e === 'empty') {
            operator = kbd;
        } else {
            operator = e.target.textContent;
        };
        displayTotal.textContent = `${firstNumber} ${operator} `;
        displayCurrent.textContent = `${firstNumber}`;
        storedValue = '';

    // Happens when an operand is used to calculate a result for the first time. Note that this is also requires the 2nd if statement in populate() to make it work
    // If toggleOption === false then it means there has already been an operand calculation and this will ensure following ones will also be executed
    } else if ((firstNumber.length > 0 && operator.length > 0 && storedValue.length > 0) || toggleOption === false) {
        calculate();
        if (e === 'empty') {
            operator = kbd;
        } else {
            operator = e.target.textContent;
        };
        firstNumber = result;

    // Default
    } else {
        if (e === 'empty') {
            operator = kbd;
        } else {
            operator = e.target.textContent;
        };
        firstNumber = storedValue;
        displayTotal.textContent = `${firstNumber} ${operator} `;
        displayCurrent.textContent = `${firstNumber}`;
        storedValue = '';
    };
};

let result = '';
let calculate = () => {
    // Handle divide by 0
    if (operator === '/' && storedValue === '0') {
        displayCurrent.textContent = 'Cannot divide by 0';
        return;
    } else {
        // Handles the scenario when '=' is pressed first 
        if (firstNumber === '' && storedValue === '') {
            return;
        };

        result = operate(operator, +firstNumber, +storedValue);

        // Rounds answers with long decimals
        result = parseFloat(result.toFixed(2));

        displayTotal.textContent = `${firstNumber} ${operator} ${storedValue}`;
        displayCurrent.textContent = result;
    };
};

// Add decimal button
const addDecimal = () => {
    if (displayCurrent.textContent.includes('.')) return;
    displayCurrent.textContent += '.';
    storedValue += '.';
};

// Clear everything
const clearCalc = () => {
    storedValue = '';
    firstNumber = '';
    result = '';
    toggleOption = true;
    displayCurrent.textContent = '';
    displayTotal.textContent = '';
};

// Remove last
const backspace = () => {
    if (result.length === 0) {
        displayCurrent.textContent = displayCurrent.textContent.slice(0, -1);
        storedValue = storedValue.slice(0, -1);
    };
};

// Digits
const digits = document.querySelectorAll('.digit');
digits.forEach(digit => {
    digit.addEventListener('click', populate);
});

// Operations
const operations = document.querySelectorAll('.operation');
operations.forEach(operation => {
    if (operation.value === '=') {
        operation.addEventListener('click', calculate);
    } else if(operation.value === 'clear') {
        operation.addEventListener('click', clearCalc);
    } else if (operation.value === 'delete') {
        operation.addEventListener('click', backspace);
    } else if (operation.value === '.') {
        operation.addEventListener('click', addDecimal);
    } else {
        operation.addEventListener('click', saveNumberAndOperator);
    };
});

// Keyboard support
const keyBoardSupp= (e) => {
    if (e.key >= 0 && e.key <= 9) {
        return populate('empty', e.key);
    };;
    if (e.key === '+' || e.key === '-' || e.key === '*' || e.key === '/') {
        return saveNumberAndOperator('empty', e.key);
    };
    if (e.key === '=' || e.key === 'Enter') {
        return calculate();
    };
    if (e.key === '.') {
        return addDecimal();
    };
    if (e.key === 'Escape') {
        return clearCalc();
    };
    if (e.key === 'Backspace') {
        return backspace();
    };
};

window.addEventListener('keydown', keyBoardSupp);

// // Just for testing
// document.getElementById('print').addEventListener('click', () => {
//     console.log(`First number: ${firstNumber} | Operator: ${operator} | Second number/StoredValue: ${storedValue} | Result: ${result}`);
// });