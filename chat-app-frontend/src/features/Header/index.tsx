import React from "react";
import "./assets/header.scss"
const Header = () => {
    return (
        <header className="header">
            <div className="headerContainer">
                <div className="headerLogo">
                    {/* <img src={Vector} alt="logo" /> */}
                    <h3>ChatBox</h3>
                </div>
            </div>
        </header>
    );
};
export default Header;