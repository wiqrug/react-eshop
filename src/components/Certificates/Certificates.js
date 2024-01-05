// src/components/Certificates/Certificates.js
import React, { useEffect, useState } from "react";
import "./Certificates.css";
import { Link } from "react-router-dom";
import "../../api/CertificatesApi/GetCertificates.js";

//fix images


const Certificate = ({ src, title, price, id }) => {
  return (
    <Link
      to={`/Certificate/${id}`}
      style={{ textDecoration: "none" }}
      className="certificate-link"
    >
      <article>
        <img src={src} alt="Certificate" />
        <h4 className="certificate-title">{title}</h4>
        <h4>{price} €</h4>
      </article>
    </Link>
  );
};

const CertificatesList = () => {
  const [certificates, setCertificates] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5021/api/Certificates")
      .then(response => response.json())
      .then(data => {
        setCertificates(data.$values); // Update the state with the fetched data
      })
      .catch(error => {
        console.error('Error fetching certificates:', error);
      }
      );

  }, []); // Empty dependency array to run only once

  return (
    <section>
      {certificates && certificates.map((certificate) => (
        <Certificate
          key={certificate.$id} // Using $id as the unique key
          id={certificate.$id} // Assuming $id as the unique ID for each certificate
          src={"https://image.jpg"} // Default image src
          title={certificate.titleOfCertificate}
          price={certificate.price} 
        />
      ))}
    </section>
  );
};

export default CertificatesList;

