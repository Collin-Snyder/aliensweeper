import React, { useContext } from "react";
import { GameContext } from "../state/gameContext";
import Timer from "./Timer";

const GameHeader = () => {
  const [gameState, dispatch] = useContext(GameContext);
  return (
    <div className="gameHeader" style={{ display: "flex" }}>
      <div className="headerItem mineCount">{gameState.minesLeft}</div>
      <div className="headerItem smiley">☺︎</div>
      <Timer/>
    </div>
  );
};

export default GameHeader;
