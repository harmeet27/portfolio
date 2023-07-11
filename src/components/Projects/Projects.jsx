import React from "react";
import "./Projects.css";
import Card from "../Card/Card";

import { projects } from "../../data/projects.js";

class Projects extends React.PureComponent {
  handleClick = (project) => {
    console.log('here', project);
    this.props.history.push(`/work/${project}`);
  };

  

  render() {
    return (
      <div className="projects">
        <div className="projectList">

          {projects.map((proj) => {
            return (
              <Card
                data={proj}
                key={proj.title}
                className="thumbnail"
                subTextClassName="subText"
                showTooltip
                onClick={() => this.handleClick(proj.id)}
                isThumbNail
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Projects;
