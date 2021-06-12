import React from "react";
import ReactPlayer from "react-player";

import "./Card.css";

const Card = (props) => {
  const {
    data: { description, title, technology, icon, video },
    hasDescription,
    showTitle = true,
    showTooltip,
    isThumbNail,
    onClick,
  } = props;
  let renderIcon = icon && !video ? true : false;
  let renderVideo = video ? true : false;
  if (isThumbNail && video) {
    renderIcon = true;
    renderVideo = false;
  }
  return (
    <div
      className={`${props.className} card`}
      onClick={onClick ? () => onClick(props.data) : () => {}}
      title={showTooltip ? title : undefined}
    >
      {renderIcon && (
        <img
          src={icon}
          alt={title}
          className={hasDescription ? "img" : "full-img"}
        />
      )}
      {renderVideo && (
        <ReactPlayer
          className="player"
          width="100%"
          height="100%"
          controls
          url={video}
        />
      )}
      {isThumbNail && <p>{title}</p>}
      {hasDescription && (
        <div>
          {showTitle ? <h1 className="title">{title}</h1> : false}
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
