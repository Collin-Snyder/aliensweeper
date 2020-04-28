import Gameboard from "../scripts/gameboardMaker";

let board;

export const makeBoard = (size, mineCount) => {
  board = new Gameboard(size, mineCount);
  return board.squares;
};

export const clickSquare = (squareId) => {
  let flagIncrement = board.click(squareId);
  let win = board.checkForWin();
  return { flagIncrement, squares: board.squares, win };
};

export const flagSquare = (squareId) => {
  let flagIncrement = board.flag(squareId);
  let win = board.checkForWin();
  return { flagIncrement, squares: board.squares, win };
};
