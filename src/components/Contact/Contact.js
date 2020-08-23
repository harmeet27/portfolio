import React from 'react';
import github from '../../github.svg';
import linkedin from '../../linkedin.svg';
import stackOverflow from '../../stack-overflow.svg';
import medium from '../../medium.svg';
import blogger from '../../blogger.svg';
import './Contact.css';


class Contact extends React.PureComponent{
 render(){
     return (
     <div className="contact">
        <h1>Around The Web</h1>
        <p><a href='https://github.com/harmeet27' rel="noopener noreferrer" target="_blank" className="link">
            <img className="icon github" alt="github" src={github}/></a> 
            <a href='https://www.linkedin.com/in/harmeet-kaur-8856ba44/' rel="noopener noreferrer" target="_blank" className="link">
            <img className="icon linkedin" alt="linkedin" src={linkedin}/></a> 
            <a href='https://stackoverflow.com/users/13875952/harmeet-kaur' rel="noopener noreferrer" target="_blank" className="link">
            <img className="icon stackOverflow" alt="stack-overflow" src={stackOverflow}/></a>
            <a href='https://medium.com/@harmeetkaur2793' rel="noopener noreferrer" target="_blank" className="link">
            <img className="icon medium" alt="medium" src={medium}/></a>
            <a href='https://khushi-mypoems.blogspot.com/' rel="noopener noreferrer" target="_blank" className="link">
            <img className="icon blogger" alt="blogger" src={blogger}/></a>
            </p>
     </div>
     );
 }

}

export default Contact;