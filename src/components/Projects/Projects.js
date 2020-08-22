import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import About from '../About/About';
import Contact from '../Contact/Contact';

import { projects } from "../../data/projects.js";

class Projects extends React.PureComponent {
  renderProjects = () => {
    return projects.map((project, i) => {
      return (
        <div className="projectRow">
          {i % 2 === 0 && <Card data={project} className="left" />}
          {i % 2 !== 0 && <Card data={project} className="right" />}
        </div>
      );
    });
  };
  render() {
    return(
    <div>
    <div className="projects">
      <div className="title">Work Projects</div>
      {this.renderProjects()}
    </div>
    <About/>
    <Contact />
    </div>
    )
  }
}

export default Projects;
