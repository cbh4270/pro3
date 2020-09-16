import React, {
  useState,
  useEffect,
  useContext,
  useRef,
  Fragment,
} from "react";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import ProgressBar from "react-bootstrap/ProgressBar";
//use context
import GameContext from "../utils/context/GameContext";
//css
import "./Battle.css";

function Battle(props) {
  //retrieve  necessary parts from Game Context
  const gameContext = useContext(GameContext);
  const { matchNum, setMatchNum, game, setMatch } = gameContext;

  const isMountedRef = useRef(null);
  //state for fight logic

  const [totalRounds, setTotalRounds] = useState(0);
  const [results, setResults] = useState(["START BATTLE"]);
  const [player1Health, setPlayer1Health] = useState(100);
  const [player2Health, setPlayer2Health] = useState(100);
  const [player1Variant, setPlayer1Variant] = useState("success");
  const [player2Variant, setPlayer2Variant] = useState("success");
  const [currentMatchObj, setCurrentMatchObj] = useState({
    player1: "",
    player2: "",
    matchResult: "",
  });

  const [fightDisabled, setFightDisabled] = useState(false);
  const [nextFightDisabled, setNextFightDisabled] = useState(true);
  const [showMatchOutcome, setShowMatchOutcome] = React.useState(false);

  useEffect(() => {
    if (player1Health <= 50 && player1Health > 20) {
      setPlayer1Variant("warning");
    } else if (player1Health <= 20) {
      setPlayer1Variant("danger");
    } else {
      setPlayer1Variant("success");
    }
  }, [player1Health]);

  useEffect(() => {
    if (player2Health <= 50 && player2Health > 20) {
      setPlayer2Variant("warning");
    } else if (player2Health <= 20) {
      setPlayer2Variant("danger");
    } else {
      setPlayer2Variant("success");
    }
  }, [player2Health]);

  useEffect(() => {
    //get the match object from context and players from the db array
    debugger;
    isMountedRef.current = true;
    let matchObjKey = "match" + matchNum;
    let newState = new Object({ ...game });
    let newMatchObj = new Object({ ...newState[matchObjKey] });
    setCurrentMatchObj({ ...currentMatchObj, ...newMatchObj });
    console.log(JSON.stringify(currentMatchObj));

    // set health for the health bars
    if (newMatchObj && newMatchObj["health1"]) {
      setPlayer1Health(newMatchObj["health1"].toString());
    }
    if (newMatchObj && newMatchObj["health2"]) {
      setPlayer2Health(newMatchObj["health2"].toString());
    }
    return () => (isMountedRef.current = false);
  }, []);

  // //functions for fight logic
  // const setHealthForMatch = () => {
  //   debugger;

  //   // set health for the health bars
  //   setPlayer1Health(currentMatchObj["health1"].toString());
  //   setPlayer2Health(currentMatchObj["health2"].toString());
  // };

  const fight = (moveId) => {
    debugger;
    //for first game useEffect will do the  steps below
    //get players for the match from the context
    //set stamina and health for the players

    //start the fight
    addRound();
    opponentMove(moveId);
    console.log(results);

    //check if game over:
    gameOver();
  };

  const addRound = () => {
    setTotalRounds(totalRounds + 1);
  };

  //adds the counter action to punch
  const counter = (userMove) => {
    let resultMessage = "";
    let move = Math.floor(Math.random() * 5);
    if (move >= 3 && userMove === "attack") {
      resultMessage =
        currentMatchObj["player2"] +
        " counter was successful! " +
        currentMatchObj["player1"] +
        " took 10 damage";
      setResults([...results, resultMessage]);
      player1Health <= 10
        ? setPlayer1Health(0)
        : setPlayer1Health(player1Health - 10);
    } else if (move >= 3 && userMove === "counter") {
      resultMessage =
        currentMatchObj["player1"] +
        " counter was successful! " +
        currentMatchObj["player2"] +
        " took 10 damage";
      setResults([...results, resultMessage]);
      player2Health <= 10
        ? setPlayer2Health(0)
        : setPlayer2Health(player2Health - 10);
    } else if (move < 3 && userMove === "attack") {
      resultMessage =
        currentMatchObj["player2"] +
        " counter failed! " +
        currentMatchObj["player1"] +
        " is dealt 15 damage!";
      setResults([...results, resultMessage]);
      player2Health <= 15
        ? setPlayer2Health(0)
        : setPlayer2Health(player2Health - 15);
    } else if (move < 3 && userMove === "counter") {
      resultMessage =
        currentMatchObj["player1"] +
        " counter was not successful! " +
        currentMatchObj["player1"] +
        " is dealt 15 damage!";
      setResults([...results, resultMessage]);
      player1Health <= 15
        ? setPlayer1Health(0)
        : setPlayer1Health(player1Health - 15);
    }
  };

  //proccesses the moves
  const damageStep = (userMove, generatedMove) => {
    let resultMessage = "";
    if (userMove === "attack" && generatedMove === "attack") {
      resultMessage = "Both players took damage";
      setResults([...results, resultMessage]);
      player1Health <= 10
        ? setPlayer1Health(0)
        : setPlayer1Health(player1Health - 10);

      player2Health <= 10
        ? setPlayer2Health(0)
        : setPlayer2Health(player2Health - 10);
    } else if (userMove === "counter" && generatedMove === "counter") {
      resultMessage = "Defensive stances taken in vain";
      setResults([...results, resultMessage]);
    } else if (userMove === "attack" && generatedMove === "counter") {
      resultMessage =
        currentMatchObj["player2"] +
        " took a defensive stance and prepares to counter";
      setResults([...results, resultMessage]);
      counter(userMove, generatedMove);
    } else if (userMove === "counter" && generatedMove === "attack") {
      resultMessage =
        currentMatchObj["player1"] +
        " took a defensive stance and prepare to counter";
      setResults([...results, resultMessage]);
      counter(userMove, generatedMove);
    }
  };

  // Takes the moves of the player1 and generates one for player 2 and then runs the damage step

  const opponentMove = (moveId) => {
    let move = Math.floor(Math.random() * 4 + 1);
    let savedCompMove = "";
    let resultMessage = "";

    if (move <= 3) {
      savedCompMove = "attack";
    } else {
      savedCompMove = "counter";
    }

    resultMessage =
      currentMatchObj["player1"] +
      " move is " +
      moveId +
      " and " +
      currentMatchObj["player2"] +
      " move is " +
      savedCompMove +
      " on round " +
      totalRounds;
    setResults([...results, resultMessage]);
    damageStep(moveId, savedCompMove);
    //roundResults(res); //display results should take place through react renders
  };

  const gameOver = () => {
    let resultMessage = "";
    if (player1Health === 0 || player2Health === 0) {
      debugger;
      resultMessage = "GAME OVER!";
      setResults([...results, resultMessage]);
      resultMessage = "";
      setResults([...results, resultMessage]);
      console.log(results);
      setFightDisabled(true);
      setNextFightDisabled(false);
      //set match results
      debugger;
      let newCurrentMatchObject = new Object({ ...currentMatchObj });
      if (player1Health === 0 && player2Health === 0) {
        newCurrentMatchObject["matchResult"] = "tie";
      } else if (player1Health === 0) {
        newCurrentMatchObject["matchResult"] = "won";
      } else if (player2Health === 0) {
        newCurrentMatchObject["matchResult"] = "lost";
      }
      setShowMatchOutcome(true);
      let matchKey = "match" + matchNum;
      setMatch(matchKey, newCurrentMatchObject);
    }
  };

  const setupNextFight = () => {
    debugger;
    setShowMatchOutcome(false);
    //get next match players and stats
    let nextMatchNum = parseInt(matchNum) + 1;
    if (nextMatchNum <= 5) {
      //step 1 : increment match num
      setMatchNum(nextMatchNum.toString());
      let matchObjKey = "match" + nextMatchNum;

      //Step 2 : get the new player stats
      setCurrentMatchObj({ ...game[matchObjKey] });
      console.log(JSON.stringify(currentMatchObj));

      //PLAYER1
      //Step 3:check if previous games fought
      let reduceHealth = 0;
      let foughtPreviously = checkifFoughtPreviously(
        currentMatchObj["player1"]
      );
      //Step 4: set health for the health bars

      //if the player has played before then decrement health by
      // 25% of the stamina
      if (foughtPreviously) {
        reduceHealth = Math.floor(currentMatchObj["stamina1"] * 0.25);
        reduceHealth = currentMatchObj["health1"] - reduceHealth;
        setPlayer1Health(reduceHealth);
      } else {
        setPlayer1Health(currentMatchObj["health1"].toString());
        setPlayer1Variant("success");
      }

      //PLAYER2
      //Step 3:check if previous games fought
      reduceHealth = 0;
      foughtPreviously = checkifFoughtPreviously(currentMatchObj["player2"]);
      //Step 4: set health for the health bars

      //if the player has played before then decrement health by
      // 25% of the stamina
      if (foughtPreviously) {
        reduceHealth = Math.floor(currentMatchObj["stamina2"] * 0.25);
        reduceHealth = currentMatchObj["health2"] - reduceHealth;
        setPlayer2Health(reduceHealth);
      } else {
        setPlayer2Health(currentMatchObj["health2"].toString());
      }
      setFightDisabled(false);
      setResults([]);
      console.log(JSON.stringify(results));
    } else if (nextMatchNum === 6) {
      //display results
    }
  };

  const checkifFoughtPreviously = (checkingPlayer) => {
    //get current match num
    if (parseInt(matchNum) === 1) {
      return false;
    }
    let matchKey = "";
    for (let i = parseInt(matchNum) - 1; i >= 1; i--) {
      matchKey = "match" + matchNum;
      if (
        checkingPlayer === game[matchKey]["player1"] ||
        checkingPlayer === game[matchKey]["player2"]
      ) {
        return true;
      }
    } //for
    return false;
  };

  const Results = () => (
    <Fragment>
      <span style={{ color: "red" }}>
        {game["match" + matchNum]["player1"]}{" "}
        {game["match" + matchNum]["matchResult"]}{" "}
      </span>
    </Fragment>
  );
  return (
    <div className="wrapper">
      <div id="battletitle">BATTLE</div>
      <div id="battletitle2">
        MATCH{matchNum} {showMatchOutcome ? <Results /> : null}{" "}
      </div>
      <div id="battletitle2">
        {currentMatchObj["player1"]} vs {currentMatchObj["player2"]}
      </div>
      <div className="row justify-content-center">
        <button
          id="moves-button"
          disabled={fightDisabled}
          variant="btn btn-success"
          onClick={() => fight("attack")}
        >
          ATTACK
        </button>
        <button
          id="moves-button"
          disabled={fightDisabled}
          variant="btn btn-success"
          onClick={() => fight("counter")}
        >
          COUNTER
        </button>
        <button
          id="next-button"
          disabled={nextFightDisabled}
          variant="btn btn-success"
          onClick={() => setupNextFight()}
        >
          NEXT MATCH
        </button>
      </div>
      <Container>
        <Row id="progressbarRow" className="justify-content-center">
          <Col xs lg="6">
            <ProgressBar
              now={player1Health}
              variant={player1Variant}
              label={`${player1Health}%`}
            />
          </Col>
        </Row>{" "}
        {/* <Row id="progressbarRow" className="justify-content-center">
          <Col xs lg="6">
            <div class="progress">
              <div
                class="progress-bar"
                role="progressbar"
                style={` width: ${player1Health}%`}
                aria-valuenow={player1Health}
                aria-valuemin="0"
                aria-valuemax="100"
              >
                {`${player1Health}%`}
              </div>
            </div>
          </Col>
        </Row> */}
        <Row id="progressbarRow" className="justify-content-center">
          <Col xs lg="6">
            <ProgressBar
              now={player2Health}
              variant={player2Variant}
              label={`${player2Health}%`}
            />
          </Col>
        </Row>
      </Container>
      <Container fluid>
        <Row id="battleArea" className="justify-content-center">
          <Col xs lg="8">
            {/* <Form>
              <Form.Group controlId="battleArea">
                <Form.Label>Battle results</Form.Label>
                <Form.Control
                  as="textarea"
                  disabled
                  value={results}
                  placeholder="Start the BAAATTLE!!!!!"
                  onChange={(r) => setResults(r)}
                ></Form.Control>
              </Form.Group>
            </Form> */}
            <div className="battleareatext">
              {results.length >= 1 ? (
                results.map((resultLine, index) => {
                  return <p key={index}>{resultLine}</p>;
                })
              ) : (
                <h5 className="text-center">Start Battle !!</h5>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default Battle;
