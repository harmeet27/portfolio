import React from "react";
import "./Header.css";
import profile from "../../profile.jpg";
import programmer from "../../programmer.svg";
import tech from "../../tech.svg";
import writer from "../../writer.svg";
import foodie from "../../foodie.svg";
import backpack from "../../backpack.svg";

class Header extends React.PureComponent {
  render() {
    return (
      <div className="header" ref={this.props.aboutRef}>
        <img src={profile} alt="profile" className="profile" />
        <h1>HI!, I am Harmeet</h1>
        <span className="tagLine" ref={this.props.projectsRef}>
          <img className="icon" alt="web" src={programmer} /> Web Developer |
          <img className="icon" alt="tech" src={tech} /> Technophile |
          <img className="icon" alt="tech" src={writer} /> Writer |
          <img className="icon" alt="tech" src={foodie} /> Foodie |
          <img className="icon" alt="tech" src={backpack} /> HodoPhile
        </span>
      </div>
    );
  }
}

export default Header;
