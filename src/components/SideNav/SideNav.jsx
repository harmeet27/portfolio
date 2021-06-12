import React from "react";
import './SideNav.css'

const SideNav = (props) => {
    return (
        <div className="sideNav-container">
            <div className="link" onClick={() => props.history.push("/menu")}/>
            <div className="menu" onClick={() => props.history.push("/menu")}>Menu</div>
        </div>
    )
}

export default SideNav;