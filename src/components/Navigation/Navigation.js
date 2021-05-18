import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Navigation.css";

class Navigation extends Component {
  constructor(props) {
    super(props);
    this.dropdown = React.createRef();
    this.state = {
      openMenu: false
    };
  }

  componentDidMount() {
    document.addEventListener("click", this.handleClickOutside, true);
  }

  componentWillUnmount() {
    document.removeEventListener("click", this.handleClickOutside, true);
  }

  handleClickOutside = (e) => {
    const menuClassNameList = ["menu", "iconBar"];
    if (
      !ReactDOM.findDOMNode(this.dropdown.current)?.contains(e.target) &&
      !menuClassNameList.includes(e.target.className)
    ) {
      this.setState({
        openMenu: false,
      });
    }
  };

  toggle = (e) => {
    const openMenuValue = !this.state.openMenu;
    this.setState({
      openMenu: openMenuValue,
    });
  };

  handleMenuClick = (menuItem) => {
    return this.setState(
      {
        openMenu: false
      },
      () => this.props.onClick(menuItem)
    );
  };

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
    const { activeTab } = this.props;
    return (
      <div className="desktopMenu">
        <a
          href="#about"
          className={activeTab === "about" ? "tab active" : "tab"}
          onClick={() => this.handleMenuClick("about")}
        >
          About
        </a>
        <a
          href="#work"
          className={activeTab === "work" ? "tab active" : "tab"}
          onClick={() => this.handleMenuClick("work")}
        >
          Work
        </a>
        <a
          href="#contact"
          className={activeTab === "contact" ? "tab active" : "tab"}
          onClick={() => this.handleMenuClick("contact")}
        >
          Contact
        </a>
        <a
          href="#recommendations"
          className={activeTab === "recommendations" ? "tab active" : "tab"}
          onClick={() => this.handleMenuClick("recommendations")}
        >
          Recommendations
        </a>
      </div>
    );
  };
  render() {
    return (
      <React.Fragment>
        <nav className="navBar">
          <div className="navBarRight">
            {this.props.isDesktop
              ? this.renderDesktopMenu()
              : this.renderMobileMenu()}
          </div>
          {!this.props.isDesktop && this.state.openMenu && (
            <div className="dropdown" ref={this.dropdown}>
              <a
                href="#about"
                className="link"
                onClick={() => this.handleMenuClick("about")}
              >
                About
              </a>
              <a
                href="#work"
                className="link"
                onClick={() => this.handleMenuClick("work")}
              >
                Work
              </a>
              <a
                href="#contact"
                className="link"
                onClick={() => this.handleMenuClick("contact")}
              >
                Contact
              </a>
              <a
                href="#recommendations"
                className="link"
                onClick={() => this.handleMenuClick("recommendations")}
              >
                Recommendations
              </a>
            </div>
          )}
        </nav>
      </React.Fragment>
    );
  }
}

export default Navigation;
