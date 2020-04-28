import React, { useContext, memo } from "react";
import Square from "./Square";
import { GameContext } from "../state/gameContext";
import { clickSquare, flagSquare } from "../state/board";

const Board = memo(() => {
  const [gameState, dispatch] = useContext(GameContext);

  const handleClick = (e) => {
    let { flagIncrement, squares, win } = clickSquare(e.currentTarget.id);
    dispatch({ type: "UPDATE_BOARD", payload: squares });
    if (flagIncrement)
      dispatch({ type: "INCREMENT_MINES_LEFT", payload: flagIncrement });
    else if (flagIncrement === null)
      dispatch({ type: "SET_GAME_OUTCOME", payload: "loss" });

    if (win) dispatch({ type: "SET_GAME_OUTCOME", payload: "win" });
  };

  const handleFlag = (e) => {
    e.preventDefault();
    let { flagIncrement, squares, win } = flagSquare(e.currentTarget.id);
    dispatch({ type: "UPDATE_BOARD", payload: squares });
    dispatch({ type: "INCREMENT_MINES_LEFT", payload: flagIncrement });
    if (win) dispatch({ type: "SET_GAME_OUTCOME", payload: "win" });
  };

  return (
    <div
      className="board"
      style={{
        gridTemplateColumns: `repeat(${gameState.size}, 1fr)`,
        gridTemplateRows: `repeat(${gameState.size}, 1fr)`,
      }}
    >
      {gameState.squares.map((square) => (
        <Square
          id={square.id}
          mine={square.mine}
          borderMines={square.borderMines}
          handleClick={handleClick}
          handleFlag={handleFlag}
          visible={square.visible}
          flagged={square.flagged}
          boardSize={gameState.size}
          loss={gameState.gameOutcome === "loss"}
          key={square.id}
        />
      ))}
    </div>
  );
});

export default Board;
