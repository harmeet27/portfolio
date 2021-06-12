import React from "react";
import github from "../../assets/github.svg";
import linkedin from "../../assets/linkedin.svg";
import stackOverflow from "../../assets/stack-overflow.svg";
import medium from "../../assets/medium.svg";
import blogger from "../../assets/blogger.svg";
import "./Navigation.css";

const Navigation = (props) => {
  return (
    <React.Fragment>
      <div className="background-image">
        <div className="menuList">
          <span className="close" onClick={() => window.history.go(-1)}>
            &times;
          </span>
          <ul className="ulList">
            <li className="menuItem" onClick={() => props.history.push('/about')}>
              <a href="/about" className="entry">
                About
              </a>
            </li>
            <li className="menuItemPink" onClick={() => props.history.push('/work')}>
              <a href="/work" className="entry">
                Work
              </a>
            </li>
            <li className="menuItem" onClick={() => props.history.push('/testimonials')}>
              <a href="/testimonials" className="entry">
              Testimonials
              </a>
            </li>
          </ul>
          <div className="contact">
            <h2>Let's Connect !</h2>
            <p>
              <a
                href="https://github.com/harmeet27"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                <img className="icon github" alt="github" src={github} />
              </a>
              <a
                href="https://www.linkedin.com/in/harmeet-kaur-8856ba44/"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                <img className="icon linkedin" alt="linkedin" src={linkedin} />
              </a>
              <a
                href="https://stackoverflow.com/users/13875952/harmeet-kaur"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                <img
                  className="icon stackOverflow"
                  alt="stack-overflow"
                  src={stackOverflow}
                />
              </a>
              <a
                href="https://medium.com/@harmeetkaur2793"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                <img className="icon medium" alt="medium" src={medium} />
              </a>
              <a
                href="https://khushi-mypoems.blogspot.com/"
                rel="noopener noreferrer"
                target="_blank"
                className="link"
              >
                <img className="icon blogger" alt="blogger" src={blogger} />
              </a>
            </p>
            <div>harmeetkaur2793@gmail.com</div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
