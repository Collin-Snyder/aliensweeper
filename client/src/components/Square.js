import React, { memo, useState } from "react";
import Tile from "./Tile";

const Square = memo(
  ({ id, mine, borderMines, visible, flagged, handleClick, handleFlag }) => {
    return (
      <div
        className="square"
        id={id}
        onClick={handleClick}
        onContextMenu={handleFlag}
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
