import React from "react";
import "./Recommendation.css";
import Card from "../Card/Card";
import SideNav from "../SideNav/SideNav";

import { recommendations } from "../../data/recommendations.js";

class Recommendations extends React.PureComponent {
    renderRc = () => {
    return recommendations.map((recommendation, i) => {
      return (
        <div className="rcRow" key={recommendation.title}>
            <Card data={recommendation} className="testimonial" key={recommendation.title} />
        </div>
      );
    });
  };
  render() {
    return (
        <div className="recommendation">
          <div className="title">Testimonials</div>
          <div className="recEntry">{this.renderRc()}</div>
          <SideNav history={this.props.history}/>
        </div>
    );
  }
}

export default Recommendations;
