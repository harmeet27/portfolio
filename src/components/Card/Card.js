import React from 'react';
import './Card.css';

const Card = (props) => {
  const { description, title, technology, icon } = props.data;
  return (
      <div className={`card ${props.className}`}>
        {icon && <img src={icon} alt={title} className="img"/>}
        <div>
        <h1>{title}</h1>
        {description}
        <div className="technologies">
         <div className="label">Technologies Used:</div>
        {technology.map((tech) => {
          return <div className="tag" key={tech}>{tech}</div>
        })}</div>
        </div>
      </div>
  )
}

export default Card;