import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import Recommendations from './components/Recommendations/Recommendation'
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props)
    this.aboutRef = React.createRef()  
    this.projectsRef = React.createRef()
    this.contactRef = React.createRef()
    this.recommendationsRef = React.createRef()
    this.state = {
      isDesktop: false
    };
    this.updatePredicate = this.updatePredicate.bind(this);
  }

  componentDidMount() {
    this.updatePredicate();
    window.addEventListener("resize", this.updatePredicate);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updatePredicate);
  }

  updatePredicate() {
    this.setState({ isDesktop: window.innerWidth > 750 });
  }

  scrollToMyRef = (ref) => window.scrollTo({ behavior: 'smooth', top: ref.current.offsetTop });


  handleTabClick = (tab) => {
    if(tab === 'work'){
      this.scrollToMyRef(this.projectsRef);
    } else if ( tab === 'contact') {
      this.scrollToMyRef(this.contactRef);
    } else if ( tab === 'about') {
      this.scrollToMyRef(this.aboutRef);
    } else if ( tab === 'recommendations') {
      this.scrollToMyRef(this.recommendationsRef);
    }
  }

  render(){
  return (
    <div className="App">
      <Navigation onClick={this.handleTabClick} isDesktop={this.state.isDesktop}/>
      <Header aboutRef={this.aboutRef} projectsRef={this.projectsRef}/>
      <Projects contactRef={this.contactRef} recommendationsRef={this.recommendationsRef}/>
      <Recommendations/>
    </div>
  );
  }
}

export default App;
