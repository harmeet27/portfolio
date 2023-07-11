import React from "react";
import ReactPlayer from "react-player";

import "./Card.css";

const Card = (props) => {
  const {
    data: { description, title, technology, icon, video, id },
    hasDescription,
    showTitle = true,
    showTooltip,
    isThumbNail,
    onClick,
    subTextClassName,
  } = props;
  let renderIcon = icon && !video ? true : false;
  let renderVideo = video ? true : false;
  debugger;
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
          className={hasDescription ? "full-img" : "img"}
          id={id}
        />
      )}
      {renderVideo && (
        <ReactPlayer
          className="player"
          controls
          url={video}
        />
      )}
      {isThumbNail && <div className={subTextClassName}>{title}</div>}
      {hasDescription && (
        <div className={subTextClassName}>
          {showTitle ? <div className="title">{title}</div> : false}
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
