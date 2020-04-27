import React, { useContext } from "react";
import Square from "./Square";
import { GameContext } from "../state/gameContext";

const Board = () => {
  const [gameState, dispatch] = useContext(GameContext);
  return (
    <div>
      {gameState.squares.map((square) => {
        <Square
          id={square.id}
          mine={square.mine}
          borderMines={square.borderMines}
          key={square.id}
        />;
      })}
    </div>
  );
};

export default Board;
