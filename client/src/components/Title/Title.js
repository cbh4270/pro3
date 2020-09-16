import React from "react";
import "./title.css";
import history from "../../utils/History";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function Title() {
  return (
    <div className="wrapper">
      <div id="title">Finish Them Wrestling</div>
      <div id="title">FTW</div>

      <form>
        <button
          id="start-button"
          variant="btn btn-success"
          onClick={() => {
            window.localStorage.clear();
            history.push("/matchSetup");
          }}
        >
          Start Game
        </button>
      </form>

      <form>
        <button
          id="create-button"
          variant="btn btn-success"
          onClick={() => history.push("/charCreate")}
        >
          Create Character
        </button>
      </form>
    </div>
  );
}

export default Title;
