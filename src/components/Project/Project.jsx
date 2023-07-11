import React from "react";
import { projects } from "../../data/projects.js";
import Card from "../Card/Card.js";
import './Project.css'

class Project extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      projectId: window.location.pathname.split("/")[2],
    };
  }

  render() {
    const projectObject = projects.find(
      (item) => item.id === this.state.projectId
    );
    return (
      <div className="projectBackGround">
        <Card
          data={projectObject}
          key={projectObject.title}
          hasDescription
          subTextClassName={"subTextClassName"}
          className="project"
        />
      </div>
    );
  }
}

export default Project;
