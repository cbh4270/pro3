import React from "react";
import "./UserInput.css";



function UserInput(props) {
  const [state, setState] = React.useState({
    CharName: "",
    NickName: "",
   
    
 
  });

  function handleChange(evt) {
    const value =
      evt.target.type === "checkbox" ? evt.target.checked : evt.target.value;
    setState({
      ...state,
      [evt.target.name]: value
    });
  }

  return (
      
    <div className="app col-5">
        
      <form>
        <label>
          <div className="heading">Character Name</div>
          <input
            type="text"
            name="name"
            value={props.userState.name}
            onChange={props.handleInputChange}
          />
        </label>
        <
        <br></br>
        <br></br>
      
      

      </form>
      
      
    </div>
    
    
    
  );
}

export default UserInput;