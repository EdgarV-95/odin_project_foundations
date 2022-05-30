let container = document.getElementById('container');

let gridSize = 16;

function createGrid() {
    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('div');
        row.classList.add('row-test')
        let textA = document.createTextNode('ROW ');
        row.appendChild(textA);
        for(let j = 1; j < gridSize; j++) {
            let column = document.createElement('span');
            column.classList.add('column-test')
            let textB = document.createTextNode('COLUMN ');
            column.appendChild(textB);
            row.appendChild(column);
        };
        container.appendChild(row);
    };
};

let rowColors = document.getElementsByClassName('row-test');
let columnColors = document.getElementsByClassName('column-test');

// rowColors.forEach(element => {
//     element.addEventListener('mouseover', changeColor)
// });

// columnColors.forEach(element => {
//     element.addEventListener('mouseover', changeColor)
// });

// function changeColor(e) {
//     e.style.color = 'blue';
// }

createGrid();