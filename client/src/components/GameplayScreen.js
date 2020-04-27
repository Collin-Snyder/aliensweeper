import React, { useState, useContext } from "react";
import Board from "./Board";
import GameHeader from "./GameHeader";
import { useInterval } from "../scripts/customHooks";
import { GameContext } from "../state/gameContext";

const GameplayScreen = () => {
  const [time, setTime] = useState(0);

  useInterval(() => {
    setTime(time + 1);
  }, 1000);

  return (
    <div className="gameplay">
      <GameHeader timer={time} />
      <Board />
    </div>
  );
};

export default GameplayScreen;
