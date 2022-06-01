// Creates custom grid where the row and column sizes are definable
function createGrid(rowSize, columnSize) {
    let container = document.getElementById('container');

    for (let i = 0; i < rowSize; i++) {
        let row = document.createElement('tr');
        row.id = 'row' + i;

        container.appendChild(row);
        let createColumn = document.getElementById('row'+ i);

        for (let j = 0; j < columnSize; j++) {
            let column = document.createElement('td');
            column.id = 'column' + j;
            column.classList = 'grid-item';
            createColumn.appendChild(column);
        };
    };
};

createGrid(12,12)

// Selects all td elements and saves it in variable
let myNodeList = document.querySelectorAll('td');

// Change color from default
function changeColor(e) {
    Array.from(myNodeList).forEach(el => {
        if (e.target == el) {
            e.target.style.backgroundColor = currentColor;
        }
    })
}
document.addEventListener('mouseover', changeColor);

// Change to various colors
let currentColor = document.getElementById("color-selector").value;
document.getElementById("color-selector").oninput = function() {
    currentColor = this.value;
}

// Reset colors
function resetColor() {
    Array.from(myNodeList).forEach(el => {
            el.style.backgroundColor = 'white';
        })
    document.getElementById("color-selector").value = '#000000'
    currentColor = '#000000';
}
document.getElementById('reset-btn').addEventListener('click', resetColor);