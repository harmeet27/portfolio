import React from "react";
import "./Header.css";
import speaker from "../../assets/volume.png";
import speakerOff from "../../assets/speakerOff.png";
import audio from "../../assets/name.mp3";

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
    window.removeEventListener("resize", this.updatePredicate);
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
        <div className="header">
          <div className="netflix-hero">
            <div className="hero-background"></div>
            <div className="hero-vignette"></div>
            <div className="hero-content">
              <div className="helloText">Hello, it's me</div>
              <div className="nameText">
                Harmeet <span className="dot">.</span>
                <button className="minimal" onClick={this.togglePlay}>
                  {!this.state.isPlaying ? (
                    <img className="speaker" alt="speaker off" src={speakerOff} />
                  ) : (
                    <img className="speaker" alt="speaker" src={speaker} />
                  )}
                  <span>Hear my name</span>
                </button>
              </div>
              <div className="tagLine">
                Web Developer | Technophile | Writer | Foodie | HodoPhile
              </div>
              <p className="aboutMe">
                An enthusiastic software developer currently shaping the future of
                software development by building user-interfaces that
                promote user interaction with information and data. While
                traveling around the world.
              </p>
              <div className="hero-buttons">
                <button className="netflix-button">View Projects</button>
                <button className="netflix-button-secondary">Contact Me</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
