import React, { useState, useEffect, useContext } from "react";
//components
import ControlledCarousel from "../components/ControlledCarousel";
//context
import GameContext from "../utils/context/GameContext";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//utils
import API from "../utils/API";
import history from "../utils/History";
//css imports
import "./playerSelect.css";

function PlayerSelect() {
  //state and context hooks
  const [errMessage, setErrMessage] = useState(null);
  const gameContext = useContext(GameContext);

  const {
    savedCharacters,
    setSavedCharacters,
    matchNum,
    game,
    setGame,
  } = gameContext;

  useEffect(() => {
    // console.log(`from Match ${fromMatch}: ${forPlayer}`);
    const getSavedCharacters = () => {
      if (!savedCharacters || savedCharacters.length === 0) {
        API.getSavedFightCharacters()
          .then((res) => {
            setSavedCharacters(res.data);
          })
          .catch((err) => console.log(err));
      }
    };

    getSavedCharacters();
    // eslint-disable-next-line
  }, []);

  //internal functions
  const checkIfDoneAndLeave = () => {
    let matchKey = "match" + matchNum;
    let matchObj = game[matchKey];
    console.log(JSON.stringify(matchObj));
    if (
      !matchObj["player1"] ||
      !matchObj["player2"] ||
      matchObj["player1"] === matchObj["player2"]
    ) {
      //pop up an error
      setErrMessage(
        " Warning !!! Both players need to be selected and you cannot wrestle yourself...!!!!"
      );
    } else {
      setErrMessage(null);
      history.push("/MatchSetup");
    }
  };

  //raison d'etre
  return (
    <div className="wrapper">
      <div id="title">SELECT PLAYER</div>
      <Container fluid>
        <Row className="justify-content-center">
          <button
            id="fight-button"
            variant="btn btn-success"
            onClick={() => checkIfDoneAndLeave()}
          >
            DONE
          </button>
        </Row>
        <Row className="justify-content-center">
          {errMessage && <h5 className="error">{errMessage}</h5>}
        </Row>

        <Row className="justify-content-center">
          <Col>
            <h1>Player 1</h1>
            <ControlledCarousel playerNum="1" />
          </Col>
          <Col>
            <h1>Player 2</h1>
            <ControlledCarousel playerNum="2" />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default PlayerSelect;
