import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import About from "../About/About";
import Contact from "../Contact/Contact";

import { projects } from "../../data/projects.js";

class Projects extends React.PureComponent {
  renderProjects = () => {
    return projects.map((project, i) => {
      return (
        <div className="projectRow" key={project.title}>
          {i % 2 === 0 && (
            <Card data={project} className="left" key={project.title} />
          )}
          {i % 2 !== 0 && (
            <Card data={project} className="right" key={project.title} />
          )}
        </div>
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="projects">
          <div className="title">Projects</div>
          {this.renderProjects()}
        </div>
        <About contactRef={this.props.contactRef} />
        <Contact />
      </React.Fragment>
    );
  }
}

export default Projects;
