const updateBoard = (state, action) => {
  let newState = { ...state };
  newState.squares = action.payload;
  return newState;
};

const setBoardSize = (state, action) => {
  let newState = { ...state };
  newState.size = parseInt(action.payload);
  return newState;
};

const setMineCount = (state, action) => {
  let newState = { ...state };
  newState.mineCount = parseInt(action.payload);
  return newState;
};

const incrementMinesLeft = (state, action) => {
  let newState = { ...state };
  newState.minesLeft += parseInt(action.payload);
  return newState;
};

const setMinesLeft = (state, action) => {
  let newState = { ...state };
  newState.minesLeft = parseInt(action.payload);
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
  newState.gameOutcome = "pending";
  return newState;
};

export const transformers = {
  UPDATE_BOARD: updateBoard,
  SET_BOARD_SIZE: setBoardSize,
  SET_MINE_COUNT: setMineCount,
  INCREMENT_MINES_LEFT: incrementMinesLeft,
  SET_MINES_LEFT: setMinesLeft,
  SET_GAME_OUTCOME: setGameOutcome,
  RESET: reset,
  __default__: (state) => state,
};
