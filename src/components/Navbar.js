import React from "react";
import ReactDOM from "react-dom";
import airBnbLogo from '../images/airbnb_logo.png';
import './Navbar.css';



export default function Navbar() {

    return (
        <div className="navbar-div">
            <navbar>
                <img className="image-logo" src={airBnbLogo} />
            </navbar>
        </div >
    );

}