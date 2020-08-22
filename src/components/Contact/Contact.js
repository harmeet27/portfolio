import React from 'react';
import github from '../../github.svg';
import linkedin from '../../linkedin.svg';
import facebook from '../../facebook.svg';
import medium from '../../medium.svg';
import blogger from '../../blogger.svg';
import './Contact.css';


class Contact extends React.PureComponent{
 render(){
     return (
     <div className="contact">
        <h1>Around The Web</h1>
        <p><a href='www.google.com' target="_blank" className="link">
            <img className="icon github" alt="github" src={github}/></a> 
            <a href='www.google.com' target="_blank" className="link">
            <img className="icon linkedin" alt="linkedin" src={linkedin}/></a> 
            <a href='www.google.com' target="_blank" className="link">
            <img className="icon facebook" alt="facebook" src={facebook}/></a>
            <a href='www.google.com' target="_blank" className="link">
            <img className="icon medium" alt="medium" src={medium}/></a>
            <a href='www.google.com' target="_blank" className="link">
            <img className="icon blogger" alt="blogger" src={blogger}/></a>
            </p>
     </div>
     );
 }

}

export default Contact;