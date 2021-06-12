import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import SideNav from "../SideNav/SideNav";

import { projects } from "../../data/projects.js";

class Projects extends React.PureComponent {
  handleClick = (project) => {
    this.props.history.push(`/work/${project}`);
  };

  render() {
    return (
      <React.Fragment>
        <div className="projects">
          <div className="title">My Work</div>
          <div className="projectList">
            {projects.map((proj) => {
              return (
                <Card
                  data={proj}
                  key={proj.title}
                  className="thumbnail"
                  showTooltip
                  onClick={() => this.handleClick(proj.id)}
                  isThumbNail
                />
              );
            })}
          </div>
        </div>
        <SideNav history={this.props.history} />
      </React.Fragment>
    );
  }
}

export default Projects;
