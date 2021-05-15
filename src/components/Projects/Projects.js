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
            <Card data={project} className="left" key={project.title} hasDescription />
          )}
          {i % 2 !== 0 && (
            <Card data={project} className="right" key={project.title} hasDescription />
          )}
        </div>
      );
    });
  };
  render() {
    return (
      <React.Fragment>
        <div className="projects">
          <div className="title">My Work</div>
          {this.renderProjects()}
        </div>
        <About contactRef={this.props.contactRef} />
        <Contact recommendationsRef={this.props.recommendationsRef}/>
      </React.Fragment>
    );
  }
}

export default Projects;
