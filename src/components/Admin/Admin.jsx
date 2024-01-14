import { createCertificate } from "api/certificates/createCertificate";
import AvailableCertificates from "components/CandidateCertificates/AvailableCertificates";
import ObtainedCertificates from "components/CandidateCertificates/ObtainedCertificates";
import { AddCertificateModal } from "components/Certificates/AddCertificateModal";
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
  const [isAddCertificateModalOpen, setIsAddCertificateModalOpen] =
    useState(false);

  const handleOpenAddCertificateModal = () =>
    setIsAddCertificateModalOpen(true);

  const handleCloseAddCertificateModal = () =>
    setIsAddCertificateModalOpen(false);

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
            <button onClick={handleOpenAddCertificateModal}>
              Add Certificate
            </button>
          </div>
          <CertificatesList
            certificates={certificates}
            cookieValue={cookieValue}
            isAdminView
            fetchCertificates={fetchCertificates}
          />
          <AddCertificateModal
            open={isAddCertificateModalOpen}
            onClose={handleCloseAddCertificateModal}
            onSave={createCertificate}
          />
        </>
      )}
      {selectedOption === "exams" && <AvailableCertificates />}
    </>
  );
};

export default Admin;
