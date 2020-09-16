import React, { useContext, useReducer } from "react";
import userContext from "./UserContext";

function UserForm() {
  const userModel = useContext(userContext);

  class NameForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {value: ''};
  
      this.handleChange = this.handleChange.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChange(event) {
      this.setState({value: event.target.value});
    }
  
    handleSubmit(event) {
      alert('A name was submitted: ' + this.state.value);
      event.preventDefault();
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
          <div>Name</div>
          <label>
            Name:
            <input type="text" value={this.state.value} onChange={this.handleChange} />
          </label>
          <input type="submit" value="Submit" />
        </form>
      );
    }
  }

   
  return (
    <form className="form-group">
     
      <label htmlFor="name">Name: </label>
      <input className="form-control mb-4" id="name" {...userModel.name} />
      <label htmlFor="status">Nickname: </label>
      <input className="form-control mb-4" id="status" {...userModel.status} />
      <NameForm />
    </form>
  );
}

export default UserForm;