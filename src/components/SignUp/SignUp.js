import React, { useState } from 'react';
import './SignUp.css';
import { Link } from 'react-router-dom';


const SignUp = () => {

    const [email, setEmail] = useState(null);
    const [password, setPassword] = useState(null);

    return <>
    <h2>Sign up</h2>
        <form method="post" className="login-box" action="url">
            <label for="email">Email</label>
            <input type="email" id="email" placeholder="Enter your E-mail" value={email} />
            <label for="password">Password</label>
            <input type="password" id="password" placeholder="Enter your Password" value={password} />
            <button type="submit" className="submit-btn">Log In</button>
        </form>
        <div className="center-me">
            <p>Already a member?</p>
            <p>You can log in <Link to="../Login">here</Link>!</p>  {/* link to SignUp page/component*/}
        </div>
    </>
        ;
};

export default SignUp;