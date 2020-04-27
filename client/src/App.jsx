import React, { useState, useContext } from "react";
import "./styles/main.css";
import GameplayScreen from "./components/GameplayScreen";
import SetupScreen from "./components/SetupScreen";

const App = () => {
  const [screen, setScreen] = useState("setup");

  const startGame = () => {
    setScreen("gameplay");
  }

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
