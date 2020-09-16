import React from "react";
import GameContext from "../src/utils/context/GameContext";
import Routes from "./Routes";
import useGame from "./utils/hooks/useGame/useGame";

function App() {
  return (
    <GameContext.Provider value={useGame()}>
      <Routes></Routes>
    </GameContext.Provider>
  );
}

export default App;
