export const transformers = {
  CREATE_BOARD: createBoardTransformer,
  __default__: (state) => state,
};

const createBoardTransformer = (state, action) => {
  let newState = { ...state };
  newState.board = action.payload;
  return newState;
};
