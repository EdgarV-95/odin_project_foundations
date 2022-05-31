let gridSize = 16;

function createGrid() {
    let container = document.getElementById('container');

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('tr');
        row.id = 'row'+ i;

        container.appendChild(row);
        let column = document.getElementById('row'+ i);

        for (let j = 0; j < gridSize; j++) {
            let createColumn = document.createElement('td');
            createColumn.style.border = '1pt solid black;'
            column.appendChild(createColumn);
        }
    }
};

createGrid();