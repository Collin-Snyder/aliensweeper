import React, { useContext, memo } from "react";
import Square from "./Square";
import { GameContext } from "../state/gameContext";
import { clickSquare, flagSquare } from "../state/board";

const Board = memo(() => {
  const [gameState, dispatch] = useContext(GameContext);

  const handleClick = (e) => {
    let { flagIncrement, squares } = clickSquare(e.currentTarget.id);
    dispatch({ type: "UPDATE_BOARD", payload: squares });
    if (flagIncrement)
      dispatch({ type: "INCREMENT_MINES_LEFT", payload: flagIncrement });
    else if (flagIncrement === null)
      dispatch({ type: "SET_GAME_OUTCOME", payload: "loss" });
  };

  const handleFlag = (e) => {
    e.preventDefault();
    let { flagIncrement, squares } = flagSquare(e.currentTarget.id);
    dispatch({ type: "INCREMENT_MINES_LEFT", payload: flagIncrement });
    dispatch({ type: "UPDATE_BOARD", payload: squares });
  };

  return (
    <div className="board">
      {gameState.squares.map((square) => (
        <Square
          id={square.id}
          mine={square.mine}
          borderMines={square.borderMines}
          handleClick={handleClick}
          handleFlag={handleFlag}
          visible={square.visible}
          flagged={square.flagged}
          key={square.id}
        />
      ))}
    </div>
  );
});

export default Board;
