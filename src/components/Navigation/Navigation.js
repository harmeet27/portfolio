import React from "react";
import "./Navigation.css";
import svg from "../../my-logo.svg";

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
      activeTab: 'about'
    };
  }

  toggle = () => {
     const openMenuValue = !this.state.openMenu; 
     this.setState({
       openMenu: openMenuValue
     })
  }

  handleMenuClick = (menuItem) => {
    return this.setState({
      openMenu: false,
      activeTab: menuItem
    }, () => this.props.onClick(menuItem));
  }

  renderMobileMenu = () => {
    return (
      <button className="menu" onClick={this.toggle}>
        <span className="iconBar"></span>
        <span className="iconBar"></span>
        <span className="iconBar"></span>
      </button>
    );
  };

  renderDesktopMenu = () => {
    const { activeTab } = this.state;
    return (
      <div className="desktopMenu">
        <a
          href="#about"
          className={activeTab === 'about' ? "tab active" : "tab"}
          onClick={() => this.handleMenuClick('about')}
        >
          About
        </a>
        <a
          href="#projects"
          className={activeTab === 'projects' ? "tab active" : "tab"}
          onClick={() => this.handleMenuClick('projects')}
        >
          Projects
        </a>
        <a
          href="#contact"
          className={activeTab === 'contact' ? "tab active" : "tab"}
          onClick={() => this.handleMenuClick('contact')}
        >
          Contact
        </a>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navBar">
          <img src={svg} alt="Harmeet27.com" className="logo" />
          <div className="navBarRight">
            {this.props.isDesktop
              ? this.renderDesktopMenu()
              : this.renderMobileMenu()}
          </div>
        {!this.props.isDesktop && this.state.openMenu && (
            <div className="dropdown">
              <a
                href="#about"
                className="link"
                onClick={() => this.handleMenuClick('about')}
              >
                About
              </a>
              <a
                href="#projects"
                className="link"
                onClick={() => this.handleMenuClick('projects')}
              >
                Projects
              </a>
              <a
                href="#contact"
                className="link"
                onClick={() => this.handleMenuClick('contact')}
              >
                Contact
              </a>
            </div>
        )}
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
