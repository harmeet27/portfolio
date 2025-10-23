import React from "react";
import "./Projects.css";
import { projects } from "../../data/projects.js";

class Projects extends React.PureComponent {
  handleClick = (projectId) => {
    this.props.history.push(`/work/${projectId}`);
  };

  renderProjectCard = (project) => {
    return (
      <div 
        className="netflix-card" 
        key={project.id}
        onClick={() => this.handleClick(project.id)}
      >
        <img src={project.icon} alt={project.title} />
        <div className="netflix-card-overlay">
          <div className="netflix-card-title">{project.title}</div>
          <div className="netflix-card-tech">{project.technology.join(" • ")}</div>
        </div>
      </div>
    );
  };

  renderFeaturedCard = (project) => {
    return (
      <div 
        className="netflix-card featured-card" 
        key={project.id}
        onClick={() => this.handleClick(project.id)}
      >
        <img src={project.icon} alt={project.title} />
        <div className="netflix-card-overlay">
          <div className="netflix-card-title">{project.title}</div>
          <div className="netflix-card-tech">{project.technology.join(" • ")}</div>
        </div>
      </div>
    );
  };

  render() {
    // Split projects into categories
    const featuredProjects = projects.slice(0, 3);
    const webProjects = projects.filter(p => p.technology.some(tech => tech.includes("React")));
    const otherProjects = projects.filter(p => !webProjects.includes(p));

    return (
      <div className="projects">
        <div className="netflix-section">
          <h2 className="section-title">Featured Projects</h2>
          <div className="netflix-row featured-row">
            {featuredProjects.map(this.renderFeaturedCard)}
          </div>
        </div>

        <div className="netflix-section">
          <h2 className="section-title">Web Development</h2>
          <div className="netflix-row">
            {webProjects.map(this.renderProjectCard)}
          </div>
        </div>

        {otherProjects.length > 0 && (
          <div className="netflix-section">
            <h2 className="section-title">Other Projects</h2>
            <div className="netflix-row">
              {otherProjects.map(this.renderProjectCard)}
            </div>
          </div>
        )}
      </div>
    );
  }
}

export default Projects;
