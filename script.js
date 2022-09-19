const drawingArea = document.querySelector('.drawing-area');
const size = window.prompt("Enter amount", "1-64");



function createGrid() {
    for(let i = 0; i < size; i++) {
        // Create columns
        const gridCol = document.createElement('div');
        gridCol.classList.add('grid');
        for(let j = 0; j < size; j++) {
            const gridRow = document.createElement('div')
            gridRow.classList.add('grid2');
            gridCol.append(gridRow);
        }
        drawingArea.append(gridCol);
    }
}

createGrid()