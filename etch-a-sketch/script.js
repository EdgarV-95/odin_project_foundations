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

createGrid(32, 32);

let myNodeList = document.querySelectorAll('td');

function changeColor(e) {
    Array.from(myNodeList).forEach(el => {
        if (e.target == el) {
            e.target.style.backgroundColor = 'red';
        }
    })
}

document.addEventListener('mouseover', changeColor);

function resetColor() {
    Array.from(myNodeList).forEach(el => {
            el.style.backgroundColor = 'white';
        })
}

document.getElementById('reset').addEventListener('click', resetColor);