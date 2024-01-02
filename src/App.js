// src/App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import NotFound from './components/NotFound/NotFound';
import Home from './components/Home/Home';
import Certificates from './components/Certificates/Certificates';
import Certificate from './components/Certificate/Certificate';
import Login from './components/Login/Login';
import {Link, Routes, Route}from 'react-router-dom';

const App = () => {
    const [menu, setMenu] = useState('home');
    const [message, setMessage] = useState('Welcome to Home');

    const handleMenuSelect = (menuOption) => {
        setMenu(menuOption);

        switch (menuOption) {
            case 'home':
                setMessage('Welcome to Home');
                break;
            case 'certificates':
                setMessage('Browse our Certificates');
                break;
            case 'login':
                setMessage('Please Log In');
                break;
            default:
                setMessage('');
        }
    };

    return (
        // <div>
        //     <NavBar onMenuSelect={handleMenuSelect} />
        //     <div style={{ marginTop: '60px' }}>{message}</div> {/* Display message below the navbar */}
        //     {menu === 'home' && <Home />}
        //     {menu === 'certificates' && <Certificates />}
        //     {menu === 'login' && <Login />}
        // </div>
        <>
            {/* <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/Certificates">Certificates</Link>
                    </li>
                    <li>
                        <Link to="/Login">Login</Link>
                    </li>
                </ul>
            </nav> */}
            {/* <NavBar onMenuSelect={handleMenuSelect} /> */}
            <NavBar />
            {/* <nav>
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
            </nav> */}
            

            <Routes>
                <Route path="/" element={<Home/>} />
                <Route path="/Certificates" element={<Certificates/>} />
                <Route path="/Certificate/:id" element={<Certificate/>} />
                <Route path="/Login" element={<Login/>} />
                <Route path="*" element={<NotFound/>} />
            
            </Routes>
        </>
    );
};

export default App;
