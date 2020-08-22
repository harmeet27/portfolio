import React from 'react';
import Navigation from './components/Navigation/Navigation';
import Header from './components/Header/Header';
import Projects from './components/Projects/Projects';
import About from './components/About/About';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navigation />
      <Header />
      <Projects />
      {/* <About /> */}
    </div>
  );
}

export default App;
