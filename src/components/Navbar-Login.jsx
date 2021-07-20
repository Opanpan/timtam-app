import React, { Component } from "react";
import "../css/Navbar.css";
import Hamburger from "./Hamburger";
import logo from "../assets/logo_anamnesia.png";

class Navigation extends Component {
    render() {
        return (
            <>
                <div className="nav">
                    <div className="icon">
                        <Hamburger />
                    </div>
                    <div className="logo">
                        <img src={logo} height="80%" alt="logo" />
                    </div>
                    <div className="components">
                        <div class="navigation">
                            <a href="#">Profile</a>
                            <a href="#">Logout</a>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}

export default Navigation;
