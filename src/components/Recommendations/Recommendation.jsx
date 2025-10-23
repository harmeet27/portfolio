import React from "react";
import "./Recommendation.css";
import { recommendations } from "../../data/recommendations.js";

class Recommendations extends React.PureComponent {
  render() {
    return (
      <div className="recommendationContainer">
        <h2 className="recommendation-title">Testimonials</h2>
        <div className="testimonials-grid">
          {recommendations.map((recommendation, i) => (
            <div className="testimonial-card" key={i}>
              <img 
                src={recommendation.icon} 
                alt={recommendation.title} 
                className="testimonial-image" 
              />
            </div>
          ))}
        </div>
      </div>
    );
  }
}

export default Recommendations;
