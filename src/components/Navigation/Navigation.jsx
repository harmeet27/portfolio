import React, { useState } from "react";
// import github from "../../assets/github.svg";
// import linkedin from "../../assets/linkedin.svg";
// import stackOverflow from "../../assets/stack-overflow.svg";
// import medium from "../../assets/medium.svg";
// import blogger from "../../assets/blogger.svg";
import download from "../../assets/download.png";
import cv from "../../assets/Harmeet_Kaur_2022.pdf";
import "./Navigation.css";

const Navigation = (props) => {
  const url = window.location.href.split("/");
  const [isActive, setActive] = useState(url[url.length - 1]);
  const handleClick = (url) => {
    setActive(url);
    props.history.push(`/${url}`);
  };

  // useEffect(() => {
  //   debugger;

  // }, [isActive, props.history])

  return (
    <React.Fragment>
      {/* <div className="background-image">
        <div className="menuList">
          <span className="close" onClick={() => window.history.go(-1)}>
            &times;
          </span>
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
      </div> */}
      <div className="navbar">
        <ul className="navbarList">
          <li onClick={() => handleClick("about")}>
            <a
              href="/about"
              className={`entry ${isActive === "about" ? "active" : ""}`}
            >
              About
            </a>
          </li>
          <li onClick={() => handleClick("work")}>
            <a
              href="/work"
              className={`entry ${isActive === "work" ? "active" : ""}`}
            >
              Work
            </a>
          </li>
          <li onClick={() => handleClick("testimonials")}>
            <a
              href="/testimonials"
              className={`entry ${isActive === "testimonials" ? "active" : ""}`}
            >
              Testimonials
            </a>
          </li>
          {/* <li onClick={() => handleClick("testimonials")}>
            <a
              href="/experience"
              className={`entry ${isActive === "experience" ? "active" : ""}`}
            >
              Experience
            </a>
          </li> */}
          <li className="download">
            <a
              className="downloadText"
              href={cv}
              target="_blank"
              rel="noopener noreferrer"
              download="harmeetkaur.pdf"
            >
              <img className="downloadImg" src={download} alt="download" />{" "}
              Resume
            </a>
          </li>
        </ul>
      </div>
    </React.Fragment>
  );
};

export default Navigation;
