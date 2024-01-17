import React, { useState } from "react";
import "./candidate-certificate.css";
import ObtainedCertificates from "./ObtainedCertificates";
import UnobtainedCertificates from "./UnobtainedCertificates";
import AvailableCertificates from "./AvailableCertificates";

const CandidateCertificates = () => {
  const [selectedOption, setSelectedOption] = useState("obtained");

  const handleSelectionChange = (option) => setSelectedOption(option);

  const onHandleSelect = (status) => () => handleSelectionChange(status);

  let certificates = <ObtainedCertificates />;

  if (selectedOption === "unobtained")
    certificates = <UnobtainedCertificates />;
  else if (selectedOption === "available")
    certificates = <AvailableCertificates />;

  return (
    <>
      <div className="menu">
        <button onClick={onHandleSelect("obtained")}>
          Obtained Certificates
        </button>
        <button onClick={onHandleSelect("unobtained")}>
          Unobtained Certificates
        </button>
        <button onClick={onHandleSelect("available")}>
          Available Certificates
        </button>
      </div>
      {certificates}
    </>
  );
};

export default CandidateCertificates;
