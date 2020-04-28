

const updateBoard = (state, action) => {
  let newState = { ...state };
  newState.squares = action.payload;
  return newState;
};

const setMineCount = (state, action) => {
  let newState = { ...state };
  newState.mineCount = action.payload;
  return newState;
};

const setMinesLeft = (state, action) => {
  let newState = { ...state };
  newState.minesLeft += action.payload;
  return newState;
};

const setGameOutcome = (state, action) => {
  let newState = { ...state };
  newState.gameOutcome = action.payload;
  return newState;
};

const reset = (state, action) => {
  let newState = { ...state };
  newState.squares = [];
  newState.mineCount = 0;
  newState.minesLeft = 0;
  newState.gameOutcome = "pending";
  return newState;
};

export const transformers = {
  UPDATE_BOARD: updateBoard,
  SET_MINE_COUNT: setMineCount,
  SET_MINES_LEFT: setMinesLeft,
  SET_GAME_OUTCOME: setGameOutcome,
  RESET: reset,
  __default__: (state) => state,
};
