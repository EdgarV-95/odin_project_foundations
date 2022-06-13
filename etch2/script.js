let board = document.querySelector('.board');
let gridSize = document.getElementById('grid-size');
let colorSelector = document.getElementById("color-selector");
let currentColor = document.getElementById("color-selector").value;
let boardReset = document.getElementById('reset-board');
let myNodeList = document.getElementsByClassName('grid-item');
let colorReset = document.getElementById('reset-color');
let eraser = document.getElementById('eraser');
let colorMode = document.getElementById('color-mode');
let rainbowMode = document.getElementById('rainbow-mode');

function createGrid(size) {
    // Empties the container
    board.innerHTML = ' ';

    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;

    for (let i = 0; i < (size*size); i++) {
        let cell = document.createElement('div');
        cell.classList = 'grid-item';
        cell.style.backgroundColor = 'white';
        // Change color of cells
        cell.addEventListener('mouseover', changeColor);
        board.insertAdjacentElement('beforeend', cell);
    }
}

// Change grid size
gridSize.addEventListener('click', changeGridSize);
function changeGridSize() {
    let input = prompt('What grid size would you like?');
    createGrid(input);
}

// Change color of cells
function changeColor() {
// if rainbow mode has been clicked use that
// if it hasn't been clicked then use normal mode
};

// Reset board
boardReset.addEventListener('click', resetBoard);
function resetBoard() {
    Array.from(myNodeList).forEach(el => {
            el.style.backgroundColor = '#FFFFFF';
    })
}

// Reset color
colorReset.addEventListener('click', resetColor);
function resetColor() {
    colorSelector.value = '#000000';
}

// Eraser
eraser.addEventListener('click', eraseColor);
function eraseColor() {
    currentColor = '#FFFFFF';
}

// Continue using the previously selected color
colorMode.addEventListener('click', selectPreviousColor)
function selectPreviousColor() {
    currentColor = colorSelector.value;
}

// // Rainbow mode
// rainbowMode.addEventListener('click', startFunction)
// function startFunction() {
//     for (let i = 0; i < myNodeList.length; i++) {
//         myNodeList[i].addEventListener('mouseover', testFunc);
//         function testFunc() {
//             currentColor = randomColor();
//         }
//     }
// }
// function randomColor() {
//     var num = Math.round(0xffffff * Math.random());
//     var r = num >> 16;
//     var g = num >> 8 & 255;
//     var b = num & 255;
//     return 'rgb(' + r + ',' + g + ',' + b + ')';
// }

createGrid(2);