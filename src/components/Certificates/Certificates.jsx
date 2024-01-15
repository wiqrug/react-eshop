// src/components/Certificates/Certificates.js
import React from "react";
import "./Certificates.css";
import CertificateCard from "./CertificateCard";

//fix images

const CertificatesList = ({
  certificates,
  cookieValue,
  isAdminView = false,
  fetchCertificates,
}) => {
  return (
    <section>
      {certificates?.map(({ $id: id, title, price, imageSrc }) => (
        <CertificateCard
          key={id}
          id={id}
          imageSrc={imageSrc}
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
};

export default CertificatesList;
