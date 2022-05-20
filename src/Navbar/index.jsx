import React from "react";
import Logo from "../assets/logo.png";
import "./style.css";

export default function Navbar() {
    return(
        <>
         <div className="Navbar">
          <div className="container">
            <img src={Logo} alt="Logo" />
            <ul className="links">
              <li>
                <a href={toString()}>Home</a>
              </li>
              <li>
                <a href={toString()}>Properties</a>
              </li>
              <li>
                <a href={toString()}>Contacts</a>
              </li>
            </ul>
          </div>
        </div>
      
        </>
    )
}