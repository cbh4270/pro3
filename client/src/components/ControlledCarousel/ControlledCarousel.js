import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import Carousel from "react-bootstrap/Carousel";
import GameContext from "../../utils/context/GameContext";
import "./controlledCarousel.css";

ControlledCarousel.propTypes = {
  playerNum: PropTypes.string,
};

function ControlledCarousel(props) {
  const [index, setIndex] = useState(0);
  const gameContext = useContext(GameContext);
  const { savedCharacters, game, setGame, setMatch, matchNum } = gameContext;
  //const { playerIndex, setPlayerIndex } = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };

  useEffect(() => {
    let matchObjKey = "match" + matchNum;

    let playerObjKey = "player" + props.playerNum;
    let newState = new Object({ ...game });
    let newMatchObj = new Object({ ...newState[matchObjKey] });

    if (
      newMatchObj[playerObjKey] &&
      newMatchObj[playerObjKey].length > 0 &&
      savedCharacters &&
      savedCharacters.length > 0
    ) {
      let indexFound = savedCharacters.findIndex(
        (p) => p.name === newMatchObj[playerObjKey]
      );
      setIndex(indexFound);
    }
  }, []);

  const selectCharacter = (choosenOne) => {
    //   console.log("inside select char");
    //   console.log(JSON.stringify(choosenOne));
    //this code needs to refactored

    let matchKey = "match" + matchNum;
    let matchObj = game[matchKey];
    console.log(matchKey);
    console.log(JSON.stringify(matchObj));
    console.log(props.playerNum);
    let matchObjChanged = new Object({ ...matchObj });

    //get the player object

    if (props.playerNum === "1") {
      matchObjChanged["player1"] = choosenOne.name;
      matchObjChanged["health1"] = choosenOne.health;
      matchObjChanged["stamina1"] = choosenOne.stamina;
      matchObjChanged["finsihingMove1"] = choosenOne.finishingMove;
    } else if (props.playerNum === "2") {
      matchObjChanged["player2"] = choosenOne.name;
      matchObjChanged["health2"] = choosenOne.health;
      matchObjChanged["stamina2"] = choosenOne.stamina;
      matchObjChanged["finsihingMove2"] = choosenOne.finishingMove;
    } else {
      console.log(
        "Error : should not have anything other than 1 or 2 in props"
      );
    }
    setMatch(matchKey, matchObjChanged);
  };

  return (
    <Carousel activeIndex={index} onSelect={handleSelect} interval="40000000">
      {savedCharacters.length ? (
        savedCharacters.map((fightChar) => {
          return (
            <Carousel.Item key={fightChar._id}>
              <img
                className="carouselImage"
                src={fightChar.imgUrl}
                alt={fightChar.name}
              />
              <Carousel.Caption>
                <h3>{fightChar.name}</h3>
                <p>{fightChar.description}</p>
                <button
                  onClick={() => {
                    selectCharacter(fightChar);
                  }}
                >
                  Select Player
                </button>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })
      ) : (
        <h2 className="text-center">No Saved Characters</h2>
      )}
    </Carousel>
  );
}

export default ControlledCarousel;
