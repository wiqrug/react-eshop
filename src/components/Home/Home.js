// src/components/Home/Home.js
import React, { useState, useEffect } from 'react';
import { Link,Routes, Route} from 'react-router-dom';
import Certificates from '../Certificates/Certificates';
import './Home.css';

export default function Home(){
    const [url, setUrl] = useState("http://localhost:3000/");
    const [data, setData] = useState();

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setData(data))
    // }, [url]);

    // useEffect(() => {
    //     fetch(url)
    //         .then(response => response.json())
    //         .then(data => setData(data))
    // }, [url]);

    // const redirectOnCertificates = (e) => {
    //     e.preventDefault();
    //     setUrl("http://localhost:3000/Certificates")
    // };

    return(
        <>
            {/* <Routes>
                <Route path="/" element={<Certificates/>}/>
            </Routes> */}
            <h1>Home Content</h1>
            <div>
                <h3>Most Common Certificates</h3>
                <li>
                    <Link to="/Certificate/1">cert1</Link>
                </li>
                <li>
                    <Link to="/Certificate/2">cert2</Link>
                </li>
                <li>
                    <Link to="/Certificate/3">cert3</Link>
                </li>
                <Link to="/Certificates">See more Certificates</Link>
            </div>
            <div>
                <h3>Recommended Certificates</h3>
                <li>
                    <Link to="/Certificate/1">cert1</Link>
                </li>
                <li>
                    <Link to="/Certificate/2">cert2</Link>
                </li>
                <li>
                    <Link to="/Certificate/3">cert3</Link>
                </li>
                <Link  to="/Certificates">See more Certificates</Link>
            </div>
        </>
    );
    
}
