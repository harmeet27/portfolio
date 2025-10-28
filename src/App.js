import React from "react";
import "./App.scss";
import { Switch, Route } from "react-router-dom";
import Main from "./containers/Main";
import ProjectDetail from "./containers/projects/ProjectDetail";

function App() {
  return (
    <div>
      <Switch>
        <Route path="/project/:id" component={ProjectDetail} />
        <Route path="/" component={Main} />
      </Switch>
    </div>
  );
}

export default App;
