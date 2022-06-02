// Creates custom grid where the row and column sizes are definable
function createGrid(gridSize) {
    let container = document.getElementById('container');
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

            column.addEventListener('mouseover', changeColor);
            function changeColor() {
                this.style.backgroundColor = currentColor;
            };
            createColumn.appendChild(column);
        };
    };
};

createGrid(12);


document.getElementById('grid-size').addEventListener('click', func);
function func() {
    let input = prompt('What grid size would you like?');
    createGrid(input);
}

// Selects all td elements and saves it in variable
// let myNodeList = document.querySelectorAll('td');

// // Change color from default
// function changeColor(e) {
//     Array.from(myNodeList).forEach(el => {
//         if (e.target == el) {
//             e.target.style.backgroundColor = currentColor;
//         }
//     })
// }
// document.addEventListener('mouseover', changeColor);

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