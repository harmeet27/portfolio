import React from "react";
import "./Projects.css";
import Card from "../Card/Card";
import About from "../About/About";
import Contact from "../Contact/Contact";

import { projects } from "../../data/projects.js";

class Projects extends React.PureComponent {
  constructor(props) {
    super(props);
    this.overlayRef = React.createRef();
    this.state = {
      projectDetails: false,
      projectContent: {},
    };
  }
  openDialog = (proj) => {
    document.getElementsByTagName("body")[0].classList.add("overflow-hidden");
    this.setState({
      projectDetails: true,
      projectContent: proj,
    });
  };

  closeDialog = (e) => {
    e.stopPropagation();
    document
      .getElementsByTagName("body")[0]
      .classList.remove("overflow-hidden");
    this.setState({
      projectDetails: false,
      projectContent: {},
    });
  };

  handleOutsideClick = (event) => {
    if (
      this.overlayRef &&
      this.overlayRef.current.className === event.target.className
    ) {
      this.closeDialog(event);
    }
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
                  onClick={this.openDialog}
                  isThumbNail
                />
              );
            })}
          </div>
        </div>
        {this.state.projectDetails ? (
          <div className="projectDetails">
            <div
              className="projectModalContainer"
              ref={this.overlayRef}
              onClick={this.handleOutsideClick}
            >
              <div className="projectModalContent">
                <span className="close" onClick={this.closeDialog}>
                  &times;
                </span>
                <Card
                  data={this.state.projectContent}
                  key={this.state.projectContent.title}
                  className="projectTech"
                  hasDescription
                />
              </div>
            </div>
          </div>
        ) : (
          false
        )}
        <About contactRef={this.props.contactRef} />
        <Contact recommendationsRef={this.props.recommendationsRef} />
      </React.Fragment>
    );
  }
}

export default Projects;
