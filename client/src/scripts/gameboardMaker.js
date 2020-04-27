class Gameboard {
  constructor(width, height, mineCount) {
    this.squares = [];
    this.squareCount = width * height;
    this.width = width;
    this.height = height;
    this.mines = [];

    for (let s = 1; s <= this.squareCount; s++) {
      this.squares.push({
        id: s,
        row: Math.ceil(s / this.height),
        column:
          Math.floor(s % this.width) > 0
            ? Math.floor(s % this.width)
            : this.width,
        mine: false,
        borderMines: 0,
      });
    }

    this.squares.forEach((square) => {
      this.addBorders(square);
    });

    this.squares.forEach((square) => {
      this.addDiagonals(square);
    })

    for (let m = 1; m <= mineCount; m++) {
      let newMine;
      do {
        newMine = Math.floor(Math.random() * (this.squareCount - 1)) + 1;
      } while (this.mines.includes(newMine));
      this.mines.push(newMine);
    }

    this.mines.forEach((mine) => {
      this.addMine(mine);
    });

    this.get = this.get.bind(this);
    this.set = this.set.bind(this);
    this.addBorders = this.addBorders.bind(this);
    this.addDiagonals = this.addDiagonals.bind(this);
  }

  addBorders(square) {
    square.borders = {
      left: null,
      right: null,
      up: null,
      down: null,
      upleft: null,
      upright: null,
      downleft: null,
      downright: null,
    };

    if ((square.id - 1) % this.width !== 0)
      square.borders.left = this.squares[square.id - 2];

    if (square.id % this.width !== 0)
      square.borders.right = this.squares[square.id];

    if (square.id - this.width > 0)
      square.borders.up = this.squares[square.id - this.width - 1];

    if (square.id + this.width <= this.squareCount)
      square.borders.down = this.squares[square.id + this.width - 1];

    return square;
  }

  addDiagonals(square) {
    if (square.borders.up) {
      square.borders.upleft = square.borders.up.borders.left
        ? square.borders.up.borders.left
        : null;
      square.borders.upright = square.borders.up.borders.right
        ? square.borders.up.borders.right
        : null;
    }

    if (square.borders.down) {
      square.borders.downleft = square.borders.down.borders.left
        ? square.borders.down.borders.left
        : null;
      square.borders.downright = square.borders.down.borders.right
        ? square.borders.down.borders.right
        : null;
    }

    return square;
  }

  addMine(mine) {
    this.set(mine, "mine", true);
    let mineSquare = this.get(mine);
    mineSquare.borders.values.forEach((border) => {
      border.borderMines++;
    });
  }

  get(s) {
    if (!this.squares[s - 1]) {
      console.log("Invalid square id.");
      return undefined;
    }
    return this.squares[s - 1];
  }

  set(s, key, val) {
    if (!this.squares[s - 1]) {
      console.log("Invalid square id.");
      return undefined;
    }
    this.squares[s - 1][key] = val;
    return this.squares[s - 1];
  }
}

export default Gameboard;
