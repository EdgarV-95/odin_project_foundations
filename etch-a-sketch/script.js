let container = document.getElementById('container');
let currentColor = document.getElementById("color-selector").value;
let gridSize = document.getElementById('grid-size');
let colorSelector = document.getElementById("color-selector");
let boardReset = document.getElementById('reset-board');
let colorReset = document.getElementById('reset-color');
let eraser = document.getElementById('eraser');
let rainbow = document.getElementById('rainbow');

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
            let column = document.createElement('td');
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
colorSelector.oninput = selectColor;
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

createGrid(2);