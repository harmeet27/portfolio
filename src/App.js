import React from "react";
import Navigation from "./components/Navigation/Navigation.jsx";
import Header from "./components/Header/Header.jsx";
import Projects from "./components/Projects/Projects.jsx";
import Project from "./components/Project/Project.jsx";
import { Redirect, Route, Switch } from "react-router-dom";
import Recommendations from "./components/Recommendations/Recommendation.jsx";
import Experience from "./components/Experience/Experience.jsx";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Navigation history={this.props.history}/>
        <Switch>
          <Route path="/" exact render={() => <Redirect to="/about" />} />
          <Route path="/about" component={Header} />
          <Route path="/work" component={Projects} exact />
          <Route path="/work/:id" component={Project} />
          <Route path="/testimonials" component={Recommendations} />
          <Route path="/experience" component={Experience} />
        </Switch>
      </div>
    );
  }
}

export default App;
