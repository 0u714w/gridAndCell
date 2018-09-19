class Grid {
    constructor(options) {
        this.row1 = document.write('<span class="row">X</span>');
        this.row2 = document.write('<span class="row">X</span>');
        this.row3 = document.write('<span class="row">X</span>');
    }

}

class Cell {
    constructor(options) {
        this.break = document.write('<br>')
        this.column1 = document.write('<span class="row">X</span>');
        this.column2 = document.write('<span class="row">X</span>');
        this.column3 = document.write('<span class="row">X</span>');
    }
}



let placeGrid = new Grid
let cellOne = new Cell
let cellTwo = new Cell