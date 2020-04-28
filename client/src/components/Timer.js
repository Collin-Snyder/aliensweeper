import React, { useContext } from "react";
import { useInterval } from "../scripts/customHooks";
import { GameContext } from "../state/gameContext";
import { TimerContext } from "../state/timerContext";

const Timer = () => {
  const [timer, setTimer] = useContext(TimerContext);
  const [gameState, dispatch] = useContext(GameContext);

  useInterval(() => {
    if (gameState.gameOutcome === "pending") setTimer(timer + 1);
  }, 1000);

  return (
    <div className="headerItem timer">{timer.toString().padStart(3, "0")}</div>
  );
};

export default Timer;
