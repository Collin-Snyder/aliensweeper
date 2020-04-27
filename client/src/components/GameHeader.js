import React, { useContext } from "react";
import { GameContext } from "../state/gameContext";

const GameHeader = ({ timer }) => {
  const [gameState, dispatch] = useContext(GameContext);
  return (
    <div className="gameHeader" style={{ display: "flex" }}>
      <div className="mineCount">{gameState.minesLeft}</div>
      <div className="smiley">☺︎</div>
      <div className="timer">{timer}</div>
    </div>
  );
};

export default GameHeader;
