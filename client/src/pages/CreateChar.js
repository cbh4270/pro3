import React, { useState, useEffect, useContext, useReducer } from "react";
//components
import Carousel from "../components/Carousel/Carousel";
import Counter from "../components/User/Counter";

//context
import GameContext from "../utils/context/GameContext";
//utils
import API from "../utils/API";
import history from "../utils/History";
//css imports
import "./CreateChar.css";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import UserInput from "../components/User/UserInput";

// const imageArray = ["https://www.wwe.com/f/styles/wwe_1_1_l/public/all/2020/01/Bobby_Lashley_Pro--e616d36efc1e4b1919a8d771bc2e11ad.png"]

function CreateChar() {
  const [userState,setUserState] = useState({
    "name": '',
    "description": "User Created Character",
    "imgUrl": '',
    "health":'',
    "stamina": '',

  })
  
  const saveCharacter = () => {
   console.log(userState)
  const character = {
      "name": userState.name,
      "description": "User Created Character",
      "imgUrl": "https://www.wwe.com/f/styles/wwe_1_1_540__composite/public/all/2019/12/Corey_Graves_Pro--fab149c2bfbf286ba1577b275b0d9ffa.png",
      "health": userState.health,
      "stamina": userState.stamina,
    }
    API.createNewCharacter(character).then(res=>{
      console.log(res)
    })

    
  }
 
 const handleInputChange = event => {
   const {name,value}= event.target
   setUserState({
     ...userState,
     [name]:value

   })
   console.log(value)
 }
//  const handleInputCarousel = index => {
    
//     setUserState({
//       ...userState,
//       imgUrl: imageArray[index]
//     })
//     console.log(imageArray[index])
//  }
  return (
   
    <div className="wrapper">
      <div id="title">Create a Character</div>
      <div className="create-content"></div>

      <div className="row">
        <div className="col-4">
          <section className="p1-section">
            <h1>your image</h1>
            <Carousel playerNum="1"  />
          </section>
        </div>

        <div className="col-6 counters">
          
          <UserInput userState= {userState} handleInputChange={handleInputChange}/>
          <Counter />
         

          <button
            id="sc-button"
            variant="btn btn-success"
                onClick={() => {saveCharacter()
                  
                  history.push("/matchSetup")}}
>
            Save and Continue
          </button>
        </div>
      </div>
    </div>
    
  );
}

export default CreateChar;