import React, { createContext, useReducer } from "react";
import { transformers } from "./transformers";

export const GameContext = createContext();

const initialState = {
  squares: [],
  mineCount: 0,
  minesLeft: 0,
};

const reducer = (state = initialState, action) => {
  const transformer = transformers[action.type] ?? transformers.__default__;
  return transformer(state, action);
};

export const GameContextProvider = ({ children }) => {
  const [gameState, dispatch] = useReducer(reducer, initialState);

  return (
    <GameContext.Provider value={[gameState, dispatch]}>
      {children}
    </GameContext.Provider>
  );
};
