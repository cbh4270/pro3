import React from "react";

const MatchContext = React.createContext({
  matchName: "",
  description: "",
  player1: "",
  player2:"",
  won: false,
});

export default MatchContext;