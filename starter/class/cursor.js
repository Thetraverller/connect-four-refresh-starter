const Screen = require("./screen");

class Cursor {

  constructor(numRows, numCols) {
    this.numRows = numRows;
    this.numCols = numCols;

    this.row = 0;
    this.col = 0;

    this.gridColor = 'black';
    this.cursorColor = 'yellow';

  }

  resetBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.gridColor);
  }

  setBackgroundColor() {
    Screen.setBackgroundColor(this.row, this.col, this.cursorColor);
    Screen.render();
  }

  left() {
    this.resetBackgroundColor();
    // Move cursor left
    if (this.col > 0) {
      this.col -= 1;
    }

    this.setBackgroundColor();
  }

  right() {
    this.resetBackgroundColor();
    // Move cursor right
    if (this.col < this.numCols - 1) {
      this.col += 1;
    }

    this.setBackgroundColor();
  }

  up() {
    this.resetBackgroundColor();
    // Move cursor left
    if (this.row > 0) {
      this.row -= 1;
    }

    this.setBackgroundColor();
  }

  down() {
    this.resetBackgroundColor();
    // Move cursor right
    if (this.row < this.numRows - 1) {
      this.row += 1;
    }

    this.setBackgroundColor();
  }

}


module.exports = Cursor;
