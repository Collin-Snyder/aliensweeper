import Gameboard from "../scripts/gameboardMaker";

let board;

export const makeBoard = (size, mineCount) => {
  board = new Gameboard(size, mineCount);
  return board.squares;
};

export const clickSquare = (squareId) => {
  board.click(squareId);
  return board.squares;
};

export const flagSquare = (squareId) => {
  let mineIncrement = board.flag(squareId);
  return { mineIncrement, squares: board.squares };
};
