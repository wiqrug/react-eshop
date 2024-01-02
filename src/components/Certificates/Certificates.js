// src/components/Certificates/Certificates.js
import React from 'react';
import './Certificates.css';
import { Link } from 'react-router-dom';

const Certificates = () => {
    return(
    <>
        <h1>ti 8es</h1>
        <h1>re</h1>
        <h1>mhn se spasw</h1>

        <div>Certificates</div>
        <div> Pou pas?</div>
        <Link to="/Certificate/1">Cert1</Link>
        <br/>
        <Link to="/Certificate/2">Cert2</Link>
        <br/>
        <Link to="/Certificate/3">Cert3</Link>
        <br/>
    </>
    );
};

export default Certificates;
