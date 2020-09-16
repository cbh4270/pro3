import React, { useState } from "react";
import "./Counter.css";

function Counter() {
  // Set the initial count state to zero, 0
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // Create handleIncrement event handler
  const handleIncrement = () => {
    setCount(prevCount => prevCount + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement = () => {
    setCount(prevCount => prevCount - 1);
  };


  

  // Create handleIncrement event handler
  const handleIncrement2 = () => {
    setCount2(prevCount2 => prevCount2 + 1);
  };

  //Create handleDecrement event handler
  const handleDecrement2 = () => {
    setCount2(prevCount2 => prevCount2 - 1);
  };
  return (
    <div className= "both-counters">
      <div className= "counter-section">
      <h1>ATTACk</h1>
        <button onClick={handleIncrement}>+</button>
        <h2>{count}</h2>
        <button onClick={handleDecrement}>-</button>
      </div>
      {/* <button onClick={() => setCount(0),setCount2(0)}>Reset</button> */}
      <div className= "counter-section">
      <h1>Defense</h1>
        <button onClick={handleIncrement2}>+</button>
        <h2>{count2}</h2>
        <button onClick={handleDecrement2}>-</button>
      </div>
      
    </div>
  );
}

export default Counter;