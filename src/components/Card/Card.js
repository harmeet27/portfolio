import React from "react";
import ReactPlayer from "react-player";

import "./Card.css";

const Card = (props) => {
  const {
    data: { description, title, technology, icon, video },
    hasDescription,
  } = props;
  return (
    <div className={`card ${props.className}`}>
      {icon && (
        <img
          src={icon}
          alt={title}
          className={hasDescription ? "img" : "full-img"}
        />
      )}
      {video && (
        <ReactPlayer
          className="player"
          width="100%"
          height="100%"
          controls
          url={video}
        />
      )}
      {hasDescription && (
        <div>
          <h1>{title}</h1>
          {description}
          <div className="technologies">
            <div className="label">Technologies Used:</div>
            {technology.map((tech) => {
              return (
                <div className="tag" key={tech}>
                  {tech}
                </div>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
};

export default Card;
