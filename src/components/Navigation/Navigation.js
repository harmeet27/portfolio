import React from 'react';
import './Navigation.css';
import svg from '../../my-logo.svg'

class Navigation extends React.PureComponent{
  render(){
      return (
      <nav className="navBar">
        <img src={svg} alt="Harmeet27.com" className="logo"/>
      </nav>
      );
  }
}

export default Navigation;