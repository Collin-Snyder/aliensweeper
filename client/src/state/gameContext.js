import React, { createContext, useReducer } from "react";

export const GameContext = createContext();

const initialState = {
    board: [],
    mineCount: 0,
};

const reducer = () => {};

export const GameContextProvider = ({ children }) => {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={[gameState, dispatch]}>
      {children}
    </GameContext.Provider>
  );
};
