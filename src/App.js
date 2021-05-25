import React from "react";
import Navigation from "./components/Navigation/Navigation";
import Header from "./components/Header/Header";
import Projects from "./components/Projects/Projects";
import Recommendations from "./components/Recommendations/Recommendation";
import "./App.css";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.aboutRef = React.createRef();
    this.projectsRef = React.createRef();
    this.contactRef = React.createRef();
    this.recommendationsRef = React.createRef();
    this.state = {
      isDesktop: false,
      activeTab: "about",
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentDidUpdate(prevprops) {
    if (this.props.location?.hash === "") {
      this.props.history.push("#about");
    } else {
      const tab = this.props.location?.hash.split("#");
      if (prevprops.location?.hash !== this.props.location?.hash) {
        this.handleTabClick(tab[1]);
      } else {
        if (tab && this.state.activeTab !== tab[1]) {
          this.handleTabClick(tab[1]);
        }
      }
    }
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 750 });
  }

  scrollToMyRef = (ref) =>
    window.scrollTo({ behavior: "smooth", top: ref.current.offsetTop });

  handleTabClick = (tab) => {
    let activeRef;
    let currentTab = tab;
    if (currentTab === "work") {
      activeRef = this.projectsRef;
    } else if (currentTab === "contact") {
      activeRef = this.contactRef;
    } else if (currentTab === "about") {
      activeRef = this.aboutRef;
    } else if (currentTab === "recommendations") {
      activeRef = this.recommendationsRef;
    }
    this.setState(
      {
        activeTab: tab,
      },
      () => this.scrollToMyRef(activeRef)
    );
  };

  render() {
    return (
      <div className="App">
        <Navigation
          onClick={this.handleTabClick}
          isDesktop={this.state.isDesktop}
          activeTab={this.state.activeTab}
        />
        <Header aboutRef={this.aboutRef} projectsRef={this.projectsRef} />
        <Projects
          contactRef={this.contactRef}
          recommendationsRef={this.recommendationsRef}
        />
        <Recommendations />
      </div>
    );
  }
}

export default App;
