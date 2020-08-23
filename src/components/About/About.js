import React from 'react';
import './About.css';

class About extends React.PureComponent{
 render(){
     return (
     <div className="about" ref={this.props.contactRef}>
        <h1>Contact</h1>
        <p><span>Email: harmeetkaur2793@gmail.com</span></p>
     </div>
     );
 }

}

export default About;