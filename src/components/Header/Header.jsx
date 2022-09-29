import React from "react";
import { CgGym } from "react-icons/cg";
import "./Header.css";

const Header = () => {
    return (
        <nav>
            <div className="header">
                <CgGym
                    className="App-logo"
                    style={{ fontSize: "40px", color: "#3dcfd3" }}
                />
                <h1 style={{ paddingLeft: "1rem" }}>
                    Get <span className="highlight">Fit</span>{" "}
                    <span className="highlight">Strong</span>
                </h1>
            </div>
        </nav>
    );
};

export default Header;
