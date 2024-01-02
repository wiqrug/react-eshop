// src/components/Login/Login.js
import React, { useState } from 'react';
import './Login.css';
import { Link } from 'react-router-dom';

const Login = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return <>
    <h2>Log in with your credentials</h2>
    <form method="post" className="login-box"> {/*action="URL edo p stelnei email & password ston controller gia to login" px "localhost:3001/login"*/}
        <label for="email">Email</label>
          <input type="email" id="email" placeholder="Enter your E-mail" value={ email } />
        <label for="password">Password</label>
          <input type="password" id="password" placeholder="Enter your Password" value={ password } />
        <button type="submit" className="submit-btn">Log In</button>
    </form>
        <div className="center-me">
            <p>Not a member yet?</p>
            <p>You can sign up <Link to="../SignUp">here</Link>!</p>  {/* link to SignUp page/component*/}
        </div>
    
    
    </>
};

export default Login;
