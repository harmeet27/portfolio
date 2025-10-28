import React from "react";
import "./Address.scss";
import { address } from "../../portfolio";

export default function Address() {
    if (!address.display) {
        return null;
    }

    return (
        <div className="address-div">
            {address.city ? (
                <div className="address-icon-button">
                    <i className="fas fa-map-pin"></i>
                    <span>{address.city}</span>
                </div>
            ) : null}

            {address.home ? (
                <div className="address-icon-button">
                <i className="fas fa-home"></i>
                <span>{address.home}</span>
              </div>
            ) : null}
        </div>
    );
}
