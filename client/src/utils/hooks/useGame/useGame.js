import { useState, useEffect } from "react";
const useGame = () => {
  let initialGameState = {
    match1: {
      player1: "",
      player2: "",
      matchResult: "",
    },
    match2: {
      player1: "",
      player2: "",
      matchResult: "",
    },
    match3: {
      player1: "",
      player2: "",
      matchResult: "",
    },
    match4: {
      player1: "",
      player2: "",
      matchResult: "",
    },
    match5: {
      player1: "",
      player2: "",
      matchResult: "",
    },
  };
  //game is an array of obejcts
  //see initial state set

  const initial_game =
    JSON.parse(window.localStorage.getItem("game")) || initialGameState;

  const [game, setGame] = useState(initial_game);

  const [savedCharacters, setSavedCharacters] = useState([]);

  const [matchNum, setMatchNum] = useState("");

  const setMatch = (matchnum, matchValue) => {
    //let matchnumber = "match" + matchnum;
    let newState = new Object({ ...game });
    newState[matchnum] = matchValue;
    setGame(newState);
  };
  const setIndividualMatchParameters = (matchnum, objKey, objKeyValue) => {
    let matchnumber = "match" + matchnum;
    let newState = new Object(...game);
    let newMatchState = newState[matchnumber];
    newMatchState[objKey] = objKeyValue;
    newState[matchNum] = newMatchState;
    setGame(newState);
  };

  const [match1, setMatch1] = useState({
    matchName: "",
    description: "",
    player1: "",
    player2: "",
    won: false,
    setupComplete: false,
  });

  useEffect(() => {
    window.localStorage.setItem("game", JSON.stringify(game));
  }, [game]);

  return {
    game,
    setGame,
    setMatch,
    setIndividualMatchParameters,
    matchNum,
    setMatchNum,
    savedCharacters,
    setSavedCharacters,
  };
};
export default useGame;
