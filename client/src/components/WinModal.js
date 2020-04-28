import React, { useContext } from "react";
import { TimerContext } from "../state/timerContext";

const WinModal = () => {
  const [timer] = useContext(TimerContext);
  return (
    <div className="modalBackground">
      <div className="modalContent">
        <h1 className="winh1">You win!</h1>
        <h2 className="winh2">Time: {timer}s</h2>
      </div>
    </div>
  );
};

export default WinModal;
