import React, { useState, useContext } from "react";
import Board from "./Board";
import GameHeader from "./GameHeader";
import { GameContext } from "../state/gameContext";

const GameplayScreen = () => {
  return (
    <div className="gameplay">
      <GameHeader />
      <Board />
    </div>
  );
};

export default GameplayScreen;
