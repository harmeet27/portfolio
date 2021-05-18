import React from "react";
import "./Header.css";
import profile from "../../assets/profile.png";
import programmer from "../../assets/programmer.svg";
import tech from "../../assets/tech.svg";
import writer from "../../assets/writer.svg";
import foodie from "../../assets/foodie.svg";
import backpack from "../../assets/backpack.svg";
import speaker from "../../assets/speakerOn.gif";
import speakerOff from "../../assets/speakerOff.png";
import audio from "../../assets/MyName.mp3";
import cv from "../../assets/Harmeet_Kaur_2021.pdf";

class Header extends React.PureComponent {
  state = {
    isPlaying: false,
  };

  audio = new Audio(audio);

  componentDidMount() {
    this.audio.addEventListener("ended", () =>
      this.setState({ isPlaying: false })
    );
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ isPlaying: false })
    );
  }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      this.state.isPlaying ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return (
      <div className="header" ref={this.props.aboutRef}>
        <img src={profile} alt="profile" className="profile" />
        <span className="nameContainer">
          <h1 className="name"> HI!, I am Harmeet.</h1>
          {
            <button className="minimal" onClick={this.togglePlay}>
              {!this.state.isPlaying ? (
                <img className="speaker" alt="speaker off" src={speakerOff} />
              ) : (
                <img className="speaker" alt="speaker" src={speaker} />
              )}
            </button>
          }
        </span>
        <a
          href={cv}
          target="_blank"
          rel="noopener noreferrer"
          download="harmeetkaur.pdf"
        >
          <button className="cv">Download CV</button>
        </a>
        <br />
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
