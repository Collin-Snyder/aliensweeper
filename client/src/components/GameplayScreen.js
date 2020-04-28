import React, { useContext } from "react";
import Board from "./Board";
import GameHeader from "./GameHeader";
import WinModal from "./WinModal";
import { GameContext } from "../state/gameContext";
import { TimerContextProvider } from "../state/timerContext";

const GameplayScreen = () => {
  const [gameState] = useContext(GameContext);
  return (
    <div className="gameplay">
      <TimerContextProvider>
        {gameState.gameOutcome === "win" ? <WinModal /> : <></>}
        <GameHeader />
      </TimerContextProvider>
      <Board />
    </div>
  );
};

export default GameplayScreen;
