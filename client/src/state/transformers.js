const updateBoard = (state, action) => {
  let newState = { ...state };
  newState.squares = action.payload;
  return newState;
};

const setBoardSize = (state, action) => {
  let newState = { ...state };
  newState.size = action.payload;
  return newState;
};

const setMineCount = (state, action) => {
  let newState = { ...state };
  newState.mineCount = action.payload;
  return newState;
};

const incrementMinesLeft = (state, action) => {
  let newState = { ...state };
  newState.minesLeft += action.payload;
  return newState;
};

const setMinesLeft = (state, action) => {
  let newState = { ...state };
  newState.minesLeft = action.payload;
  return newState;
};

const setGameOutcome = (state, action) => {
  let newState = { ...state };
  newState.gameOutcome = action.payload;
  return newState;
};

const incrementTimer = (state, action) => {
  let newState = { ...state };
  newState.timer++;
  return newState;
};

const reset = (state, action) => {
  let newState = { ...state };
  newState.squares = [];
  newState.gameOutcome = "pending";
  newState.timer = 0;
  return newState;
};

export const transformers = {
  UPDATE_BOARD: updateBoard,
  SET_BOARD_SIZE: setBoardSize,
  SET_MINE_COUNT: setMineCount,
  INCREMENT_MINES_LEFT: incrementMinesLeft,
  SET_MINES_LEFT: setMinesLeft,
  SET_GAME_OUTCOME: setGameOutcome,
  INCREMENT_TIMER: incrementTimer,
  RESET: reset,
  __default__: (state) => state,
};
