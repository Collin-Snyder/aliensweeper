export const transformers = {
  CREATE_BOARD: createBoard,
  __default__: (state) => state,
};

const createBoard = (state, action) => {
  let newState = { ...state };
  newState.squares = action.payload;
  return newState;
};
