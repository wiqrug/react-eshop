// src/components/Certificates/Certificates.js
import React from "react";
import "./Certificates.css";
import { Link } from "react-router-dom";
import { deleteCertificate } from "api/certificates/deleteCertificate";

//fix images
const Certificate = ({
  src,
  title,
  price,
  id,
  cookieValue,
  isAdminView,
  certificates,
  fetchCertificates,
}) => {
  //CandidateNumber returns 0 if user is an Admin, and something >0 in every other case
  //Need to update Delete and Update buttons to talk with API to update or delete certificate
  //Delete Certificate feels easier so im gonna implement it first
  //Update Certificate needs another component that has a form to change whatever u want

  const { candidateNumber } = cookieValue;
  return (
    <Link
      to={isAdminView ? "./" : `/Certificate/${id}`}
      style={{ textDecoration: "none" }}
      className="certificate-link"
    >
      <article>
        <img
          src="https://raw.githubusercontent.com/wiqrug/wiqrug.github.io/main/images/DALL%C2%B7E%202023-10-26%2018.43.43%20-%20Wide%20cartoon%20artwork%20with%20a%20gentle%20cream-colored%20backdrop.%20Playful%20anime%20clouds%20float%20around%2C%20some%20with%20cute%20expressions%2C%20ensuring%20the%20middle%20remains%20.png"
          alt="Certificate"
        />
        <h4 className="certificate-title">{title}</h4>
        <h4>{price} €</h4>
        {!candidateNumber && isAdminView && (
          <div className="action-buttons">
            <button className="action-button update">&#9998; Update</button>{" "}
            <button
              className="action-button delete"
              onClick={() =>
                deleteCertificate(certificates, id, fetchCertificates)
              }
            >
              &#128465; Delete
            </button>
          </div>
        )}
      </article>
    </Link>
  );
};

const CertificatesList = ({
  certificates,
  cookieValue,
  isAdminView,
  fetchCertificates,
}) => (
  <section>
    {certificates?.map(({ $id: id, title, price }) => (
      <Certificate
        key={id} // Using $id as the unique key
        id={id} // Assuming $id as the unique ID for each certificate
        src={"https://image.jpg"} // Default image src
        title={title}
        price={price}
        cookieValue={cookieValue}
        isAdminView={isAdminView}
        certificates={certificates}
        fetchCertificates={fetchCertificates}
      />
    ))}
  </section>
);

export default CertificatesList;
