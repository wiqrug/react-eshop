
// src/components/Certificates/Certificates.js
import React from 'react';
import './Certificate.css';
import { useParams } from 'react-router-dom';

const Certificate = () => {
    const {id } = useParams()
    return(
        <>
            <h1>ti koitas </h1>
            <h1>re</h1>
            <h1>vlaka</h1>
    
            <div>Certificate {id}</div>
        </>
    );
};

export default Certificate;
