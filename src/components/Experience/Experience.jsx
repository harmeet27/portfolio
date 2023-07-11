import React from "react";
import "./experience.css";
// import Card from "../Card/Card";

import { experience } from "../../data/experience.js";

class Experience extends React.PureComponent {
  render() {
    return (
      <div className="timeline">
        {experience.map((logo) => {
          return (
              <div className="timeline-event">
                <div className="logo" ><img src={logo.icon} alt={logo.name}/></div>
                {/* <div> */}
                <span className="timeline-year">{logo.year} {logo.name} ({logo.position})</span>
                <div className="timeline-description">{logo.description}</div>
                {/* </div> */}
              </div>
          );
        })}
      </div>
    );
  }
}

export default Experience;
