import React from "react";
import "./App.scss";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import ProjectDetail from "./containers/projects/ProjectDetail";

function App() {
  return (
    <Router basename="/">
      <Switch>
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/" component={Main} />
      </Switch>
    </Router>
  );
}

export default App;
