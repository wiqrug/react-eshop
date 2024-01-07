// src/components/NavBar/NavBar.js
import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

//App.js has a card coded user. in order to check his credentials to display
//his certificates, we need to check

const NavBar = ({ currentUser }) => {
  console.log(currentUser);
  return (
    <>
      <nav>
        <div className="navbar-brand">CertShop</div>
        <div className="nav-menu">
          <ul className="nav-menu-items">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Certificates">Certificates</Link>
            </li>

            <li>
              {currentUser.name === "pipas" && (
                <Link to="/MyCertificates">My Certificates</Link>
              )}
            </li>
            <li className="login-icon">
              <Link to={currentUser ? "/Login" : "/Logout"}>&#128100;</Link>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default NavBar;
