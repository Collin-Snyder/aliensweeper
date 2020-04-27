import React, { useState, useContext } from "react";
import "./styles/main.css";
import GameplayScreen from "./components/GameplayScreen";
import SetupScreen from "./components/SetupScreen";
import { GameContext } from "./state/gameContext";
import Gameboard from "./scripts/gameboardMaker";

let board;

const App = () => {
  const [gameState, dispatch] = useContext(GameContext);
  const [screen, setScreen] = useState("setup");

  const startGame = (boardSize, mineCount) => {
    console.log("startGame running")
    board = new Gameboard(boardSize, mineCount);
    dispatch({
      type: "CREATE_BOARD",
      payload: board.squares
    });
    setScreen("gameplay");
  };

  return (
    <div className="app">
      <h1>Minesweeper</h1>
      {screen === "setup" ? (
        <SetupScreen startGame={startGame} />
      ) : (
        <GameplayScreen />
      )}
    </div>
  );
};

export default App;
