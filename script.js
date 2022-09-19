const drawingArea = document.querySelector('.drawing-area');
const start = document.querySelector('.start-btn');
const reset = document.querySelector('.reset-btn');
let size;

function createGrid(sz) {

    // Creates new grid
    for(let i = 0; i < sz; i++) {
        // Create columns
        const gridCol = document.createElement('div');
        gridCol.classList.add('grid');
        for(let j = 0; j < sz; j++) {
            // Create rows
            const gridRow = document.createElement('div')
            gridRow.classList.add('grid2');
            gridCol.append(gridRow);
        }
        drawingArea.append(gridCol);
    }
}

// Start button
start.addEventListener('click', () =>{
    resizeGrid();
    size = window.prompt("Enter amount", "1-64");
    while (size < 1 || size > 64 || isNaN(size)) {
        console.log(typeof size);
        size = window.prompt("Invalid size, must be 1-64:", "1-64");
    }
    createGrid(size);

    // Handles hover effect
    const grid = document.querySelectorAll('.drawing-area .grid .grid2');
    console.log(grid.length);
    grid.forEach((tile) => {
    tile.addEventListener('mouseover', () => {
        tile.classList.add('test');
    })
})
})

function resizeGrid() {
    for(let i = 0; i < size; i++) {
        const column = document.querySelectorAll('.grid');
        column.forEach(col => {col.remove();})
    }
}


// Reset button
reset.addEventListener('click', () => {
    // Creates new grid
    const grids = document.querySelectorAll('.grid2');
    grids.forEach((grid) => {
        grid.classList.remove('test');
    })
})



