
// src/components/Certificates/Certificates.js
import { React, useEffect, useState } from 'react';
import './Certificate.css';
import { useNavigate, useParams } from 'react-router-dom';

const Certificate = () => {
    // Todo: 
    // redircts you on your home screen if you are logINED in
    // redirects you on login in if you are not logged in and then returns you on this page through history
    const handleClick = () => {

    }

    const [isLoggedIn, setIsLoggedIn] = useState(false)
    const { id } = useParams()

    let navigate = useNavigate(); 
    const routeChange = (examId) =>{ 
        navigate("/Exam/" + examId);
    }


    return (
        <>
            
            <div>ti koitas </div>
            <div>re</div>
            <div>vlaka</div>

            <h1>Certificate {id}</h1>
            <p>Certificate description</p>
            <br />
            <h3>Exam1</h3>
            <p>Exam description</p>
            <p>Number of questions: 10</p>
            <p>Time Limit: 60 min</p>
            {isLoggedIn &&  
            <>
                {/* If not already Writen */}
                <button onClick={() => routeChange(1)}>Start Exam</button>
                {/* Else */}
                <div>Your Mark is 7/10!</div>
            </>}
            <h3>Exam2</h3>
            <p>Exam description</p>
            <p>Number of questions: 10</p>
            <p>Time Limit: 60 min</p>
            {isLoggedIn &&  
            <>
                {/* If not already Writen */}
                <button onClick={() => routeChange(1)}>Start Exam</button>
                {/* Else */}
                <div>Your Mark is 7/10!</div>
            </>}
            <h3>Exam3</h3>
            <p>Exam description</p>
            <p>Number of questions: 10</p>
            <p>Time Limit: 60 min</p>
            {isLoggedIn &&  
            <>
                {/* If not already Writen */}
                <button onClick={() => routeChange(1)}>Start Exam</button>
                {/* Else */}
                <div>Your Mark is 7/10!</div>
            </>}

            {/* should a modal asking you if you are sure to buy this cert */}
            <button onClick={() => setIsLoggedIn(!isLoggedIn)}>Login</button>
            <button onClick={handleClick}>Enroll</button>
            <br/>
            {/* redircts you on your home screen if you are logined in
            redirects you on login in if you are not logged in and then returns you on this page through history */}
        </>
    );
};

export default Certificate;
