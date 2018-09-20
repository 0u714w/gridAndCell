class Grid {
    constructor(options) {
        this.row1 = document.write('<span class="row">X</span>');
        this.row2 = document.write('<span class="row">X</span>');
        this.row3 = document.write('<span class="row">X</span>');

    }

}

class Cell {
    constructor(rowIndex, colIndex, cellClasses) {
        this.break = document.write('<br>')
        this.column1 = document.write('<span class="row">X</span>');
        this.column2 = document.write('<span class="row">X</span>');
        this.column3 = document.write('<span class="row">X</span>');
        this.rowIndex = rowIndex;
        this.colIndex = colIndex;
        this.cellClasses = cellClasses;
    }
}


const newGrid = new Grid({
    rows: 3,
    columns: 3,
});

let cellOne = new Cell
let cellTwo = new Cell