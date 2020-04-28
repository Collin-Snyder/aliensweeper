const updateBoard = (state, action) => {
  let newState = { ...state };
  newState.squares = action.payload;
  return newState;
};

const setMineCount = (state, action) => {
  let newState = {...state};
  newState.mineCount = action.payload;
  return newState;
}

const setMinesLeft = (state, action) => {
  let newState = {...state};
  newState.minesLeft += action.payload;
  return newState;
}

export const transformers = {
  UPDATE_BOARD: updateBoard,
  SET_MINE_COUNT: setMineCount,
  SET_MINES_LEFT: setMinesLeft,
  __default__: (state) => state,
};
