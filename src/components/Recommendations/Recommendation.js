import React from "react";
import "./Recommendation.css";
import Card from "../Card/Card";

import { recommendations } from "../../data/recommendations.js";

class Recommendations extends React.PureComponent {
    renderRc = () => {
    return recommendations.map((recommendation, i) => {
      return (
        <div className="rcRow" key={recommendation.title}>
          {i % 2 === 0 && (
            <Card data={recommendation} className="left" key={recommendation.title} />
          )}
          {i % 2 !== 0 && (
            <Card data={recommendation} className="right" key={recommendation.title} />
          )}
        </div>
      );
    });
  };
  render() {
    return (
        <div className="recommendation">
          <div className="title">Recommendations</div>
          {this.renderRc()}
        </div>
    );
  }
}

export default Recommendations;
