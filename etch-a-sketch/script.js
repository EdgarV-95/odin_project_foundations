let gridSize = 32;

function createGrid() {
    let container = document.getElementById('container');

    for (let i = 0; i < gridSize; i++) {
        let row = document.createElement('tr');
        row.id = 'row' + i;

        container.appendChild(row);
        let createColumn = document.getElementById('row'+ i);

        for (let j = 0; j < gridSize; j++) {
            let column = document.createElement('td');
            column.id = 'column' + j;
            column.classList = 'grid-item';
            createColumn.appendChild(column);
        };
    };
};

createGrid();

document.addEventListener('mouseover', changeColor)

function changeColor(e) {
    let myNodeList = document.querySelectorAll('td');
    Array.from(myNodeList).forEach(el => {
        if (e.target == el) {
            e.target.style.backgroundColor = 'red';
        }
    })
}