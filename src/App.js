// src/App.js
import React, { useState } from 'react';
import NavBar from './components/NavBar/NavBar';
import Home from './components/Home/Home';
import Certificates from './components/Certificates/Certificates';
import Login from './components/Login/Login';

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
        <div>
            <NavBar onMenuSelect={handleMenuSelect} />
            <div ></div> {/* Display message below the navbar */}
            {menu === 'home' && <Home />}
            {menu === 'certificates' && <Certificates />}
            {menu === 'login' && <Login />}
        </div>
    );
};

export default App;
