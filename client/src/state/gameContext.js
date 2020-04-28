import React, { createContext, useReducer } from "react";
import { transformers } from "./transformers";

export const GameContext = createContext();

const initialState = {
  squares: [],
  size: 0,
  mineCount: 0,
  minesLeft: 0,
  gameOutcome: "pending",
};

const reducer = (state = initialState, action) => {
  let transformer = transformers[action.type] ?? transformers.__default__;
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
