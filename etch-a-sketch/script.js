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
            column.addEventListener('mouseover', changeColor);
            createColumn.appendChild(column);
        };
    };
};

// Change grid size
gridSize.addEventListener('click', changeGridSize);
function changeGridSize() {
    let input = prompt('What grid size would you like?');
    if (input == null) {
        return;
    } else {
        createGrid(input);
    }
};

// Change color function
function changeColor() {
    if(currentColor === 'rainbow-mode') {
        this.style.backgroundColor = `hsl(${Math.random()*360}, 100%, 50%)`;
    } else if(currentColor === 'eraser') {
        this.style.backgroundColor = '#FFFFFF';
    } else {
        this.style.backgroundColor = currentColor;
    }
}

// Change the color to the color selector value
colorSelector.addEventListener('input', selectColor)
function selectColor() {
    currentColor = this.value;
};

// Click on rainbow mode to change the currentColor value to 'rainbow-mode'. This for the changeColor function above
rainbowMode.addEventListener('click', enableRainbowMode);
function enableRainbowMode() {
    currentColor = 'rainbow-mode';
}

// Reset board
boardReset.addEventListener('click', resetBoard);
function resetBoard() {
    let myNodeList = document.querySelectorAll('td');
    Array.from(myNodeList).forEach(el => {
            el.style.backgroundColor = '#FFFFFF';
    })
};

// Reset color
colorReset.addEventListener('click', resetColor);
function resetColor() {
    currentColor = '#000000';
    colorSelector.value = '#000000';
}

// Eraser
eraser.addEventListener('click', eraseColor);
function eraseColor() {
    currentColor = 'eraser';
}

// Continue using the previously selected color
colorMode.addEventListener('click', selectPreviousColor)
function selectPreviousColor() {
    currentColor = colorSelector.value;
};

createGrid(2);