import React from "react";
const UserContext = React.createContext({
  name: {
    value: "",
    onChange: () => {},
  },
  image: "",
  description: {
    value: "",
    onChange: () => {},
  },
  health: {
    value: "",
    onChange: () => {},
  },
  stamina: {
    value: "",
    onChange: () => {},
  },
});
export default UserContext;