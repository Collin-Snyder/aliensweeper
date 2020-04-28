import React, { useContext } from "react";
import { GameContext } from "../state/gameContext";
import { makeBoard } from "../state/board";

const Smiley = () => {
  const [gameState, dispatch] = useContext(GameContext);

  const startNewGame = () => {
    dispatch({ type: "RESET" });
    let squares = makeBoard(gameState.size, gameState.mineCount);
    dispatch({
      type: "UPDATE_BOARD",
      payload: squares,
    });
    dispatch({
      type: "SET_MINES_LEFT",
      payload: gameState.mineCount,
    }); 
  };

  return (
    <div className="headerItem smiley" onClick={startNewGame}>
      {gameState.gameOutcome === "pending"
        ? "☺︎"
        : gameState.gameOutcome === "win"
        ? "😎"
        : "☹︎"}
    </div>
  );
};

export default Smiley;
