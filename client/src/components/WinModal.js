import React, { useContext } from "react";
import { TimerContext } from "../state/timerContext";
import { GameContext } from "../state/gameContext";
import { makeBoard } from "../state/board";

const WinModal = ({ setScreen }) => {
  const [timer, setTimer] = useContext(TimerContext);
  const [gameState, dispatch] = useContext(GameContext);

  const startNewGame = () => {
    dispatch({ type: "RESET" });
    setTimer(0);
    let squares = makeBoard(
      parseInt(gameState.size),
      parseInt(gameState.mineCount)
    );
    dispatch({
      type: "UPDATE_BOARD",
      payload: squares,
    });
    dispatch({
      type: "SET_MINES_LEFT",
      payload: gameState.mineCount,
    });
  };

  return (
    <div className="modalBackground">
      <div className="modalContent">
        <h1 className="winh1">You win!</h1>
        <h2 className="winh2">Time: {timer}s</h2>
        <div className="button" onClick={startNewGame}>
          Play Again
        </div>
        <div
          className="button"
          onClick={() => {
            dispatch({ type: "RESET" });
            setScreen("setup");
          }}
        >
          Game Settings
        </div>
      </div>
    </div>
  );
};

export default WinModal;
