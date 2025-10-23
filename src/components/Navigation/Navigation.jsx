import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import download from "../../assets/download.png";
import cv from "../../assets/Harmeet_Kaur_2022.pdf";
import "./Navigation.css";

const Navigation = (props) => {
  const url = window.location.href.split("/");
  const [isActive, setActive] = useState(url[url.length - 1]);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  
  const handleClick = (url) => {
    setActive(url);
    props.history.push(`/${url}`);
  };

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className={`instagram-nav ${isScrolled ? "scrolled" : ""} ${isOpen ? "open" : ""}`}>
      <div className="nav-container">
        <div className="nav-logo">
          <Link to="/">
            <span className="logo-text">HARMEET KAUR</span>
          </Link>
        </div>

        <div className="nav-actions">
          <Link to="/" className="nav-icon">
            <i className="icon-home">🏠</i>
          </Link>
          <Link to="/about" className="nav-icon">
            <i className="icon-profile">👤</i>
          </Link>
          <Link to="/work" className="nav-icon">
            <i className="icon-work">💼</i>
          </Link>
          <Link to="/experience" className="nav-icon">
            <i className="icon-experience">📈</i>
          </Link>
          <Link to="/testimonials" className="nav-icon">
            <i className="icon-testimonials">💬</i>
          </Link>
          <a href={cv} target="_blank" rel="noopener noreferrer" className="nav-icon">
            <i className="icon-resume">📄</i>
          </a>
        </div>

        <div className="mobile-menu-button" onClick={toggleMenu}>
          <div className={`menu-icon ${isOpen ? "open" : ""}`}>
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
      </div>

      <div className={`mobile-menu ${isOpen ? "open" : ""}`}>
        <Link to="/" className="mobile-nav-link" onClick={toggleMenu}>
          <i className="icon-home">🏠</i> Home
        </Link>
        <Link to="/about" className="mobile-nav-link" onClick={toggleMenu}>
          <i className="icon-profile">👤</i> About
        </Link>
        <Link to="/work" className="mobile-nav-link" onClick={toggleMenu}>
          <i className="icon-work">💼</i> Work
        </Link>
        <Link to="/experience" className="mobile-nav-link" onClick={toggleMenu}>
          <i className="icon-experience">📈</i> Experience
        </Link>
        <Link to="/testimonials" className="mobile-nav-link" onClick={toggleMenu}>
          <i className="icon-testimonials">💬</i> Testimonials
        </Link>
        <a href={cv} target="_blank" rel="noopener noreferrer" className="mobile-nav-link">
          <i className="icon-resume">📄</i> Resume
        </a>
      </div>
    </nav>
  );
};

export default Navigation;
