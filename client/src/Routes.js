import React, { Component } from "react";
import { Router, Switch, Route } from "react-router-dom";
import CreateChar from "./pages/CreateChar";
import Title from "./components/Title/Title";
import MatchSetup from "./pages/MatchSetup";
import PlayerSelect from "./pages/PlayerSelect";
import Battle from "./pages/Battle";
import history from "./utils/History";

export default class Routes extends Component {
  render() {
    return (
      <Router history={history}>
        <Switch>
          <Route path="/" exact component={Title} />
          <Route path="/title" exact component={Title} />
          <Route path="/charCreate" exact component={CreateChar} />
          <Route path="/matchSetup" exact component={MatchSetup} />
          <Route path="/playerSelect" exact component={PlayerSelect} />
          <Route path="/battle" exact component={Battle} />
        </Switch>
      </Router>
    );
  }
}
