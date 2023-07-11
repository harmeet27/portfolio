import React from "react";
import "./Header.css";
// import programmer from "../../assets/programmer.svg";
// import tech from "../../assets/tech.svg";
// import writer from "../../assets/writer.svg";
// import foodie from "../../assets/foodie.svg";
// import backpack from "../../assets/backpack.svg";
import speaker from "../../assets/volume.png";
import speakerOff from "../../assets/volume.png";
import audio from "../../assets/name.mp3";
// import portrait from "../../assets/home.jpg";
// import SideNav from "../SideNav/SideNav";
// import cv from "../../assets/Harmeet_Kaur_2022.pdf";
// import Navigation from "../Navigation/Navigation";

class Header extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
      isDesktop: false,
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  audio = new Audio(audio);

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
    this.audio.addEventListener("ended", () =>
      this.setState({ isPlaying: false })
    );
  }

  componentWillUnmount() {
    this.audio.removeEventListener("ended", () =>
      this.setState({ isPlaying: false })
    );
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 750 });
  }

  togglePlay = () => {
    this.setState({ isPlaying: !this.state.isPlaying }, () => {
      this.state.isPlaying ? this.audio.play() : this.audio.pause();
    });
  };

  render() {
    return (
      <div className="homePage">
        <div className="header" ref={this.props.aboutRef}>
          <div
            className={`nameContainer ${
              !this.state.isDesktop ? "nameContainerMobile" : ""
            }`}
          >
            <div className="helloText">Hello, it's me</div>
            <div
              className={this.state.isDesktop ? "nameText" : "nameTextMobile"}
            >
              Harmeet <span className="dot">.</span>
              <button className="minimal" onClick={this.togglePlay}>
                {!this.state.isPlaying ? (
                  <img
                    className={
                      this.state.isDesktop ? "speaker" : "speakerMobile"
                    }
                    alt="speaker off"
                    src={speakerOff}
                  />
                ) : (
                  <img
                    className={
                      this.state.isDesktop ? "speaker" : "speakerMobile"
                    }
                    alt="speaker"
                    src={speaker}
                  />
                )}
              </button>
            </div>
            <span className="tagLine" ref={this.props.projectsRef}>
              Web Developer | Technophile | Writer | Foodie | HodoPhile
            </span>
            <p className="aboutMe">
              An enthusiastic software developer currently shaping the future of
              software development by building user-interfaces that
              promote user interaction with information and data. While
              traveling around the world.
            </p>
          </div>
          <div className="imageContainer">
            <div className="image" />
          </div>
          {/* <span className="nameContainer">
            <h1 className={this.state.isDesktop ? "name" : "nameMobile"}>
              HI!, I am Harmeet.
            </h1>
            {
              <button className="minimal" onClick={this.togglePlay}>
                {!this.state.isPlaying ? (
                  <img
                    className={
                      this.state.isDesktop ? "speaker" : "speakerMobile"
                    }
                   alt="speaker off"
                    src={speakerOff}
                  />
                ) : (
                  <img
                    className={
                      this.state.isDesktop ? "speaker" : "speakerMobile"
                    }
                    alt="speaker"
                    src={speaker}
                  />
                )}
              </button>
            } 
            <div
              className={
                this.state.isDesktop ? "description" : "descriptionMobile"
              }
            >
              <span className="tagLine" ref={this.props.projectsRef}>
                <img
                  className={this.state.isDesktop ? "icon" : "iconMobile"}
                  alt="web"
                  src={programmer}
                />{" "}
                Web Developer |
                <img
                  className={this.state.isDesktop ? "icon" : "iconMobile"}
                  alt="tech"
                  src={tech}
                />{" "}
                Technophile |
                <img
                  className={this.state.isDesktop ? "icon" : "iconMobile"}
                  alt="tech"
                  src={writer}
                />{" "}
                Writer |
                <img
                  className={this.state.isDesktop ? "icon" : "iconMobile"}
                  alt="tech"
                  src={foodie}
                />{" "}
                Foodie |
                <img
                  className={this.state.isDesktop ? "icon" : "iconMobile"}
                  alt="tech"
                  src={backpack}
                />{" "}
                HodoPhile
              </span>
            </div>
            </span>*/}
        </div>
      </div>
    );
  }
}

export default Header;
