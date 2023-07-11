import React from "react";
import "./Recommendation.css";
import Card from "../Card/Card";

import { recommendations } from "../../data/recommendations.js";

class Recommendations extends React.PureComponent {
  renderRc = () => {
    return recommendations.map((recommendation, i) => {
      return (
        <tr className="rcRow" key={i}>
          <td>
            <Card
              data={recommendation}
              className="testimonial"
              key={recommendation.title}
            />
          </td>
        </tr>
      );
    });
  };
  render() {
    return (
      <div className="recommendationContainer">
        <div className="title">
          People I've worked with have said some nice things...
        </div>
        <table className="recommendation">
          {this.renderRc()}
        </table>
      </div>
    );
  }
}

export default Recommendations;
