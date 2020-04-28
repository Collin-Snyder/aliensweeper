import React, { useState, useContext } from "react";
import Board from "./Board";
import GameHeader from "./GameHeader";
import WinModal from "./WinModal";
import { GameContext } from "../state/gameContext";

const GameplayScreen = () => {
  const [gameState] = useContext(GameContext);
  return ( 
    <div className="gameplay">
      {gameState.gameOutcome === "win" ? <WinModal /> : <></>}
      <GameHeader />
      <Board />
    </div>
  );
};

export default GameplayScreen;
