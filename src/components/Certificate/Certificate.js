import React from "react";
import "./Certificate.css"
//I want to print details for each certificate
// Whenever the user presses in a certificate it navigates to this component

// Fields are : Name of certificate, Description of certificate

//Here instead of having hardcoded certificate, we need to get by id or title from the APIs that we made

//Maybe i shouldnt call the Backend everytime i need the certificates, is there any way to access
// The Certificates component and take the title and load it to the certificates 


//ABOUT BACKEND TASKS.
// Add property Certificate Description

const certificate = {
    src:"https://static.wikia.nocookie.net/windows/images/4/49/Adonet-300x225.png/revision/latest?cb=20190407170848",
  title: "Learn ADO.NET",
  description:
    "In this course you will struggle just to see how programmers struggled in the past",

};

const CertificateDetails = () => {
    const { title, description, src } = certificate;
    return (
      <div className="Certificate-Details-Container">
        <div className="Certificate-Details-Title">
          <h1>{title}</h1>
        </div>
        <img className="Certificate-Logo" src={src}/>
        <div className="Certificate-Details-Description"><h1>{description}</h1></div>
        <button className="Purhcase-Certificate">Buy now</button>
      </div>
    );
  };
  
  export default CertificateDetails;