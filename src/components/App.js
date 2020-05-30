import React, { Component } from "react";
import { Redirect, Route, Router, Switch } from "react-router-dom";
import history from "../history";

import Home from "./layout/Home";
import Header from "./layout/Header";

class App extends Component {
  render() {
    return (
      <Router history={history}>
        <Header />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route render={() => <Redirect to={{ pathname: "/" }} />} />
        </Switch>
      </Router>
    );
  }
}

export default App;
