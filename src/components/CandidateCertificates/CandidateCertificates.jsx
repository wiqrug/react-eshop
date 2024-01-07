import React, { useState } from "react";
import "./candidate-certificate.css";
import ObtainedCertificates from "./ObtainedCertificates";
import UnobtainedCertificates from "./UnobtainedCertificates";
import AvailableCertificates from "./AvailableCertificates";

// O 1003 exei to certificate obtained

//TODOS: find what you're gonna do with the image.
//
//      the image will be rendered by the app so maybe pass it as a prop

//TODOv2: Instead of successfully completed, have a button to export the certificate as PDF

//Maybe i should export all these components for cleaner code

//TODOv3: Instead of rendering all these componens, create a menu
//So user can choose if he wants to see the Obtained, Unobtained, Remaining certificates
//By default the Obtained should be loaded
//Need to fix css caps and lower cases
//Also these components could be one component who dynamically changes

const CandidateCertificates = () => {
  const [selectedOption, setSelectedOption] = useState("obtained");

  const handleSelectionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="menu">
        <button onClick={() => handleSelectionChange("obtained")}>
          Obtained Certificates
        </button>
        <button onClick={() => handleSelectionChange("unobtained")}>
          Unobtained Certificates
        </button>
        <button onClick={() => handleSelectionChange("available")}>
          Available Certificates
        </button>
      </div>

      {selectedOption === "obtained" && <ObtainedCertificates />}
      {selectedOption === "unobtained" && <UnobtainedCertificates />}
      {selectedOption === "available" && <AvailableCertificates />}
    </>
  );
};

export default CandidateCertificates;
