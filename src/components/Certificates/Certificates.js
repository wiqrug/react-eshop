// src/components/Certificates/Certificates.js
import React from "react";
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

const CertificatesList = ({certificates}) => {
  return (
    <section>
      {certificates?.map(({ $id: id, titleOfCertificate, price }) => (
        <Certificate
          key={id} // Using $id as the unique key
          id={id} // Assuming $id as the unique ID for each certificate
          src={"https://image.jpg"} // Default image src
          title={titleOfCertificate}
          price={price}
        />
      ))}
    </section>
  );
};

export default CertificatesList;
