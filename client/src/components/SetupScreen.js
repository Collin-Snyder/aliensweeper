import React, { useState } from "react";

const SetupScreen = ({ startGame }) => {
  const [boardSize, setBoardSize] = useState(10);
  const [mineCount, setMineCount] = useState(10);

  const handleSizeChange = (e) => {
    setBoardSize(e.target.value);
  };

  const handleMineChange = (e) => {
    setMineCount(e.target.value);
  };

  const submitGameInfo = () => {
    startGame(boardSize, mineCount);
  };

  return (
    <div className="setup">
      <div className="formContainer">
        <form className="setupForm" name="setup" action="#">
          <label htmlFor="size">Board Side Length: </label>
          <input
            type="number"
            name="size"
            id="size"
            min="10"
            max="50"
            value={boardSize}
            onChange={handleSizeChange}
          />
          <br></br>
          <label htmlFor="mines"># of Mines: </label>
          <input
            type="number"
            name="mines"
            id="mines"
            min="1"
            max={Math.floor((boardSize * boardSize) / 2)}
            value={mineCount}
            onChange={handleMineChange}
          />
          <br></br>
          
        </form>
        <button onClick={submitGameInfo}>Start Game</button> 
      </div>
    </div>
  );
};

export default SetupScreen;
