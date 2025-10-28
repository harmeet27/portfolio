import React from "react";
import "./experience.css";

import { experience } from "../../data/experience.js";

class Experience extends React.PureComponent {
  render() {
    return (
      <div className="timeline">
        <h2 className="timeline-title">Professional Experience</h2>
        <div className="timeline-container">
          {experience.map((item, index) => {
            return (
              <div className="timeline-event" key={index}>
                <div className="logo">
                  <img src={item.icon} alt={item.name}/>
                </div>
                <div className="timeline-content">
                  <span className="timeline-year">{item.year} • {item.name} • {item.position}</span>
                  <div className="timeline-description">{item.description}</div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
}

export default Experience;
