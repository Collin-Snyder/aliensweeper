import React, { memo } from "react";
import Tile from "./Tile";

const Square = memo(
  ({
    id,
    mine,
    borderMines,
    visible,
    flagged,
    boardSize,
    handleClick,
    handleFlag,
  }) => {
    return (
      <div
        className={`square ${mine ? "mine" : ""}`}
        id={id}
        onClick={handleClick}
        onContextMenu={handleFlag}
        style={{
          width: `${boardSize > 25 ? 40 / boardSize : 35 / boardSize}vw`,
          height: `${boardSize > 25 ? 40 / boardSize : 35 / boardSize}vw`,
        }}
      >
        {visible ? (
          <h3 className={mine ? "mine" : ""}>
            {mine ? "X" : borderMines ? borderMines : ""}
          </h3>
        ) : flagged ? (
          <>
            <Tile type="cover" />
            <Tile type="flag" />
          </>
        ) : (
          <Tile type="cover" />
        )}
      </div>
    );
  }
);

export default Square;
