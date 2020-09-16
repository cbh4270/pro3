import React, { useEffect, useContext } from "react";
import API from "../utils/API";
import { Container } from "../components/Grid";
import FightCharacter from "../components/FightCharacter/FightCharacter";
import GameContext from "../utils/context/GameContext";

import "./CharacterSelect.css";

export function CharacterSelect() {
  const gameContext = useContext(GameContext);

  const {
    savedCharacters,
    setSavedCharacters,
    playersForMatch1,
    setPlayersForMatch1,
  } = gameContext;

  const selectCharacter = (playerNum, choosenOne) => {
    console.log("inside select char");
    console.log(choosenOne);

    if (playersForMatch1 && playersForMatch1.length <= parseInt(playerNum)) {
      let newarray = playersForMatch1;
      newarray[playerNum - 1] = choosenOne;
      setPlayersForMatch1(newarray);
    } else {
      let newarray = [];
      newarray[0] = choosenOne;
      setPlayersForMatch1(newarray);
    }
  };

  useEffect(() => {
    // const { fromMatch, forPlayer } = props.location.state;

    // console.log(`from Match ${fromMatch}: ${forPlayer}`);
    const getSavedCharacters = () => {
      API.getSavedFightCharacters()
        .then((res) => {
          setSavedCharacters(res.data);
          console.log(res.data[1]);
        })
        .catch((err) => console.log(err));
    };

    getSavedCharacters();
    // eslint-disable-next-line
  }, []);

  return (
    <Container fluid>
      <h2>"Select Characters" </h2>
      <div className="row">
        {savedCharacters.length ? (
          savedCharacters.map((fightChar) => {
            console.log(fightChar.id);
            return (
              <FightCharacter
                key={fightChar.id}
                fightId={fightChar.id}
                name={fightChar.name}
                imgUrls={fightChar.imgUrl}
                description={fightChar.description}
                selectCharacterfn={selectCharacter}
              />
            );
          })
        ) : (
          <h2 className="text-center">No Saved Characters</h2>
        )}
      </div>
    </Container>
  );
}

export default CharacterSelect;
