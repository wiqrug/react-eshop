// src/components/NavBar/NavBar.js
import React from 'react';
import './NavBar.css';

const NavBar = ({ onMenuSelect }) => {
    return (
        <nav>
            <div className="navbar-brand">CertShop</div>
            <div className="nav-menu">
                <ul>
                    <li onClick={() => onMenuSelect('home')}>Home</li>
                    <li onClick={() => onMenuSelect('certificates')}>Certificates</li>
                </ul>
            </div>
            <div className="login-icon" onClick={() => onMenuSelect('login')}>&#128100;</div> {/* User icon */}
        </nav>
    );
};

export default NavBar;
