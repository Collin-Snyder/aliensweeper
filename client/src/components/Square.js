import React, { memo } from "react";

const Square = memo(({ id, mine, borderMines }) => {
  return (
    <div className="square" id={id}>
      {mine ?? borderMines ?? ""}
    </div>
  );
});

export default Square;
