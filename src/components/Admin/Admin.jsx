import AvailableCertificates from "components/CandidateCertificates/AvailableCertificates";
import ObtainedCertificates from "components/CandidateCertificates/ObtainedCertificates";
import UnobtainedCertificates from "components/CandidateCertificates/UnobtainedCertificates";
import CertificatesList from "components/Certificates/Certificates";
import React, { useState } from "react";

/**
 * Admins role over candidates
 * 1) Create Candidate
 * 2) Delete Candidate
 * 3) Update Candidate
 * 4) Get All Candidates
 * 5) See Obtained/Unobtained/Available Certificates of a certain candidate
 * 6) Add a Candidate Certificate
 *
 * 7) Get all Certificates DONE
 * 8) Create a new Certificate
 * 9) Update a Certificate ADDED BUTTON NEEDS IMPLEMENTATION
 * 10) Delete a Certificate ADDED BUTTON NEEDS IMPLEMENTATION
 *
 * 11) Create exams
 * 12) Update Exams
 * 13) Delete exams
 * 14) Get exams
 *
 * 15) CRUD Questions
 */

const Admin = ({ certificates, cookieValue }) => {
  const [selectedOption, setSelectedOption] = useState(null);

  const handleSelectionChange = (option) => {
    setSelectedOption(option);
  };

  return (
    <>
      <div className="menu">
        <button onClick={() => handleSelectionChange("candidates")}>
          Manage Candidates
        </button>
        <button onClick={() => handleSelectionChange("certificates")}>
          Manage Certificates
        </button>
        <button onClick={() => handleSelectionChange("exams")}>
          Manage Exams
        </button>
      </div>

      {selectedOption === "candidates" && <ObtainedCertificates />}
      {selectedOption === "certificates" && (
        <CertificatesList
          certificates={certificates}
          cookieValue={cookieValue}
          isAdminView={true}
        />
      )}
      {selectedOption === "exams" && <AvailableCertificates />}
    </>
  );
};

export default Admin;
