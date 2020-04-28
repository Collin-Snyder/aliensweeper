import React, { useState, useContext } from "react";
import "./styles/main.css";
import GameplayScreen from "./components/GameplayScreen";
import SetupScreen from "./components/SetupScreen";
import { GameContext } from "./state/gameContext";
import { makeBoard } from "./state/board";

const App = () => {
  const [gameState, dispatch] = useContext(GameContext);
  const [screen, setScreen] = useState("setup");

  const startGame = (boardSize, mineCount) => {
    console.log("startGame running");
    let squares = makeBoard(parseInt(boardSize), parseInt(mineCount));
    dispatch({
      type: "UPDATE_BOARD",
      payload: squares,
    });
    dispatch({ type: "SET_BOARD_SIZE", payload: boardSize });
    dispatch({
      type: "SET_MINE_COUNT",
      payload: mineCount,
    });
    dispatch({
      type: "SET_MINES_LEFT",
      payload: mineCount,
    });
    setScreen("gameplay");
  };

  return (
    <div className="app">
      <h1
        onClick={() => setScreen("setup")}
        className={`gameTitle ${screen === "setup" ? "big" : ""}`}
      >
        Aliensweeper
      </h1>
      {screen === "setup" ? (
        <SetupScreen startGame={startGame} />
      ) : (
        <GameplayScreen setScreen={setScreen} />
      )}
    </div>
  );
};

export default App;
