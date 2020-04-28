import React, { useState, useContext, useEffect } from "react";
import { useInterval, usePrev } from "../scripts/customHooks";
import { GameContext } from "../state/gameContext";

const Timer = () => {
  const [gameState, dispatch] = useContext(GameContext);
  // const [time, setTime] = useState(0);

  useInterval(() => {
    if (gameState.gameOutcome === "pending")
      dispatch({ type: "INCREMENT_TIMER" });
  }, 1000);

  return (
    <div className="headerItem timer">{gameState.timer.toString().padStart(3, "0")}</div>
  );
};

export default Timer;
