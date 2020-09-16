import React from "react";

const PlayerContext = React.createContext({
  playerName: "",
  description: "",
  healthpoint: "",
  statepoint: "",
});

export default PlayerContext;
