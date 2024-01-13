import { getCertificates } from "api";
import AvailableCertificates from "components/CandidateCertificates/AvailableCertificates";
import ObtainedCertificates from "components/CandidateCertificates/ObtainedCertificates";
import CertificatesList from "components/Certificates/Certificates";
import React, { useEffect, useState } from "react";

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
 * 8) Add Certificate, first displayed in the UI when admin clicks Manage Certificates
 * 9) Update a Certificate ADDED BUTTON NEEDS IMPLEMENTATION
 * 10) Delete a Certificate DONE
 *
 *
 *
 * 11) Create exams
 * 12) Update Exams
 * 13) Delete exams
 * 14) Get exams
 *
 * 15) CRUD Questions
 *
 *
 * Update certificate -> if Value = " " then the value stays as it previously was
 */

const Admin = (props) => {
  const { certificates, cookieValue, fetchCertificates } = props;
  const [selectedOption, setSelectedOption] = useState(null);
  console.log(props);

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
        <>
          <div className="add-certificate">
            <button>Add Certificate</button>
          </div>
          <CertificatesList
            certificates={certificates}
            cookieValue={cookieValue}
            isAdminView
            fetchCertificates={fetchCertificates}
          />
        </>
      )}
      {selectedOption === "exams" && <AvailableCertificates />}
    </>
  );
};

export default Admin;
