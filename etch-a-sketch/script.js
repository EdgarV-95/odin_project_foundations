let container = document.getElementById('container');
let currentColor = document.getElementById("color-selector").value;
let gridSize = document.getElementById('grid-size');
let colorSelector = document.getElementById("color-selector");
let boardReset = document.getElementById('reset-board');
let colorReset = document.getElementById('reset-color');
let eraser = document.getElementById('eraser');
let colorMode = document.getElementById('color-mode');
let rainbowMode = document.getElementById('rainbow-mode');

// Creates custom grid where the row and column sizes are definable
function createGrid(gridSize) {
    // Empties the container
    container.innerHTML = ' ';

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('tr');
        row.id = 'row' + i;

        container.appendChild(row);
        let createColumn = document.getElementById('row'+ i);

        for (let j = 0; j < gridSize; j++) {
            column = document.createElement('td');
            column.id = 'column' + j;
            column.classList = 'grid-item';
            // Event listener that changes the color of every column it hovers over to the value of currentColor
            column.addEventListener('mouseover', function() {
                this.style.backgroundColor = currentColor;
            });
            createColumn.appendChild(column);
        };
    };
};

// Change grid size
gridSize.addEventListener('click', changeGridSize);
function changeGridSize() {
    let input = prompt('What grid size would you like?');
    createGrid(input);
}

// Change to different colors
colorSelector.addEventListener('input', selectColor)
function selectColor() {
    currentColor = this.value;
}

// Reset board
boardReset.addEventListener('click', resetBoard);
function resetBoard() {
    let myNodeList = document.querySelectorAll('td');
    Array.from(myNodeList).forEach(el => {
            el.style.backgroundColor = '#FFFFFF';
    })
}

// Reset color
colorReset.addEventListener('click', resetColor);
function resetColor() {
    colorSelector.value = '#000000'
    currentColor = '#000000';
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

// Rainbow mode
rainbowMode.addEventListener('click', startFunction)
function startFunction() {

    let all = document.querySelectorAll('td');
    for (let i = 0; i < all.length; i++) {
        all[i].addEventListener('mouseover', testFunc);
        function testFunc() {
            currentColor = randomColor();
        }
    }
    function randomColor() {
        var num = Math.round(0xffffff * Math.random());
        var r = num >> 16;
        var g = num >> 8 & 255;
        var b = num & 255;
        return 'rgb(' + r + ',' + g + ',' + b + ')';
    }
}

createGrid(2);