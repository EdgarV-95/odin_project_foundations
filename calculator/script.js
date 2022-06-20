// add
const add = (a, b) => a + b;

// subtract
const subtract = (a, b) => a - b;

// multiply
const multiply = (a, b) => a * b;

// divide
const divide = (a, b) => a / b;

// Create a new function operate that takes an operator and 2 numbers and then calls one of the above functions on the numbers.
const operate = (operator, a, b) => {
    return operator(a,b);
};

// Create the functions that populate the display when you click the number buttons…
// you should be storing the ‘display value’ in a variable somewhere for use in the next step.

const zero = document.getElementById('#zero');
const one = document.getElementById('#one');
const two = document.getElementById('#two');
const three = document.getElementById('#three');
const four = document.getElementById('#four');
const five = document.getElementById('#five');
const six = document.getElementById('#six');
const seven = document.getElementById('#seven');
const eight = document.getElementById('#eight');
const nine = document.getElementById('#nine');

const display = document.getElementById('.display')
display.addEventListener('click', populate)

const populate = () => {
    
}