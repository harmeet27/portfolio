import React, { useContext } from "react";
import "./recommendations.scss";
import { recommendationSection } from "../../portfolio";
import { Fade } from "react-reveal";
import StyleContext from "../../contexts/StyleContext";

export default function Recommendations() {
  const { isDark } = useContext(StyleContext);

  if (!recommendationSection.display) {
    return null;
  }

  return (
    <>
    <h1 className="recommendation-title">Recommendations</h1>
    <div id="recommendations">
      {recommendationSection.recommendations.map((rc, i) => (
        <div
          key={i}
          className={
            isDark
              ? "dark-mode recommendation-card recommendation-card-dark"
              : "recommendation-card recommendation-card-light"
          }
        >
          <Fade bottom duration={1000} distance="20px">
            <i className="fas fa-quote-right"></i>

            {rc.image && (
              <div className="recommendation-image">
                <img src={rc.image} alt={rc.name} className="card-image" />
              </div>
            )}

            <div className="recommendation-detail">
              <h5
                className={isDark ? "dark-mode card-title" : "card-title"}
              >
                {rc.name}
              </h5>
              <p
                className={
                  isDark ? "dark-mode card-subtitle" : "card-subtitle"
                }
              >
                {rc.designation} - {rc.company}
              </p>
              <p
                className={
                  isDark ? "dark-mode card-subtitle" : "card-subtitle"
                }
              >
                {rc.recommendation}
              </p>
            </div>
          </Fade>
        </div>
      ))}
    </div>
    </>
  );
}
