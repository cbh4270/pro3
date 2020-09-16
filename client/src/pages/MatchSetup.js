import React, { useContext, useEffect } from "react";
import "./matchSetup.css";
import history from "../utils/History";
import GameContext from "../utils/context/GameContext";
import Row from "react-bootstrap/Row";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";

//this function is to redirect the user to select players for each match
//the match number that we need to setup is set in the context
//this could also be done using props
export function MatchSetup() {
  //context and hooks
  const gameContext = useContext(GameContext);
  const { game, setMatchNum } = gameContext;
  useEffect(() => {}, []);

  //intenal functions
  const setupMatch = (matchNum) => {
    setMatchNum(matchNum);
    history.push("/playerSelect");
  };

  const startBattle = () => {
    //fist check if all matches are set:

    //set the matchNum to 1
    //so that the battle starts at the first match
    setMatchNum("1");
    history.push("/battle");
  };

  //raison d'etre
  return (
    <div className="matchSetup">
      <div id="title">FIGHTING GAME</div>
      <Container>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match1"]["player1"]}
          </Col>
          <Col className="justify-content-center p-1">
            <button
              id="match"
              variant="btn btn-success"
              onClick={() => setupMatch("1")}
            >
              MATCH 1
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match1"]["player2"]}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match2"]["player1"]}
          </Col>
          <Col className="justify-content-center p-1">
            <button
              id="match"
              variant="btn btn-success"
              onClick={() => setupMatch("2")}
            >
              MATCH 2
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match2"]["player2"]}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match3"]["player1"]}
          </Col>
          <Col className="justify-content-center p-1">
            <button
              id="match"
              variant="btn btn-success"
              onClick={() => setupMatch("3")}
            >
              MATCH 3
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match3"]["player2"]}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match4"]["player1"]}
          </Col>
          <Col className="justify-content-center p-1">
            <button
              id="match"
              variant="btn btn-success"
              onClick={() => setupMatch("4")}
            >
              MATCH 4
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match4"]["player2"]}
          </Col>
        </Row>
        <Row className="justify-content-center p-1">
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match5"]["player1"]}
          </Col>
          <Col className="justify-content-center p-1">
            <button
              id="match"
              variant="btn btn-success"
              onClick={() => setupMatch("5")}
            >
              MATCH 5
            </button>
          </Col>
          <Col className="justify-content-center p-1" id="playerTitle">
            {game["match5"]["player2"]}
          </Col>
        </Row>
      </Container>
      {/* <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("1")}
        >
          MATCH 1
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("2")}
        >
          MATCH 2
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("3")}
        >
          MATCH 3
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("4")}
        >
          MATCH 4
        </button>
      </form>

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => setupMatch("5")}
        >
          MATCH 5
        </button>
      </form> */}

      <form>
        <button
          id="match"
          variant="btn btn-success"
          onClick={() => startBattle()}
        >
          START MATCH
        </button>
      </form>
      {/* Need to show the matches that are created */}
    </div>
  );
}

export default MatchSetup;
