import React, { useContext } from "react";
import { GameContext } from "../state/gameContext";
import Timer from "./Timer";
import Smiley from "./Smiley";

const GameHeader = () => {
  const [gameState] = useContext(GameContext);

  return (
    <div className="gameHeader" style={{ display: "flex" }}>
      <div className="headerItem mineCount">{gameState.minesLeft}</div>
      <Smiley />
      <Timer />
    </div>
  );
};

export default GameHeader;
