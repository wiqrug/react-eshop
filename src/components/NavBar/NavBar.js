// src/components/NavBar/NavBar.js
import React from 'react';
import {Link, Routes, Route} from 'react-router-dom';
import './NavBar.css';

// const NavBar = ({ onMenuSelect }) => {
//     return (
//         <nav>
//             <div className="navbar-brand">CertShop</div>
//             <div className="nav-menu">
//                 <ul>
//                     <li onClick={() => onMenuSelect('home')}>Home</li>
//                     <li onClick={() => onMenuSelect('certificates')}>Certificates</li>
//                 </ul>
//             </div>
//             <div className="login-icon" onClick={() => onMenuSelect('login')}>&#128100;</div> {/* User icon */}
//         </nav>
//     );
// };

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
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </div>
        </nav>
        </>
    );
};

export default NavBar;
