import React from 'react';
import './Header.css';
import profile from '../../profile.jpg';

class Header extends React.PureComponent{
 render(){
     return (
     <div className="header" ref={this.props.aboutRef}>
         <img src={profile} alt="profile" className="profile"/>
        <h1>HI!, I am Harmeet</h1>
        <p>Web Developer | Technophile | Writer | Foodie | HodoPhile</p>
     </div>
     );
 }

}

export default Header;