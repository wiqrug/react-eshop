// src/components/NavBar/NavBar.js
import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import './NavBar.css';


const NavBar = () => {
    return (
        <>
        
        <nav>
            <div className="navbar-brand">CertShop</div>
            <div className="nav-menu">
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Certificates">Certificates</Link>
                    </li>
                    <li className="login-icon">
                         <Link to="/Login">&#128100;</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default NavBar;
