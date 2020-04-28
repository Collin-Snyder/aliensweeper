import React, { memo } from "react";

const Tile = memo(({ type, boardSize }) => {
  return (
    <div className={`tile ${type}`} style={{fontSize: `${boardSize > 20 ? 25 / boardSize : 20 / boardSize}vw`}}>
      {type === "flag" ? <i class="fas fa-biohazard"></i> : <></>}
    </div>
  );
});

export default Tile;
