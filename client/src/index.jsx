import React from "react";
import ReactDOM from "react-dom";
import App from "./App.jsx";
import { GameContextProvider } from "./state/gameContext";

ReactDOM.render(
  <GameContextProvider>
    <App />
  </GameContextProvider>,
  document.getElementById("root")
);
