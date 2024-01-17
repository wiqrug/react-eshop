import { createCertificate } from "api/certificates/createCertificate";
import { AddCertificateModal } from "components/Certificates/AddCertificateModal";
import CertificatesList from "components/Certificates/Certificates";
import { useModal } from "hooks/useModal";
import React, { useState } from "react";
import ManageCandidates from "./ManageCandidates";
import ManageExams from "./ManageExams";
import ManageQuestions from "./ManageQuestions";

const Admin = (props) => {
  const { certificates, cookieValue, fetchCertificates } = props;

  const [selectedOption, setSelectedOption] = useState(null);

  //Should this have higher-level names?
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  const createAndFetchCertificate = async (certificateData) => {
    await createCertificate(certificateData);
    fetchCertificates();
  };

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
        <button onClick={() => handleSelectionChange("questions")}>
          Manage Questions
        </button>
      </div>

      {selectedOption === "candidates" && <ManageCandidates />}
      {selectedOption === "certificates" && (
        <>
          <div className="add-certificate">
            <button onClick={handleOpenModal}>Add Certificate</button>
          </div>
          <CertificatesList
            certificates={certificates}
            cookieValue={cookieValue}
            isAdminView
            fetchCertificates={fetchCertificates}
          />
          <AddCertificateModal
            open={isModalOpen}
            onClose={handleCloseModal}
            onSave={createAndFetchCertificate}
          />
        </>
      )}
      {selectedOption === "exams" && <ManageExams />}
      {selectedOption === "questions" && <ManageQuestions />}
    </>
  );
};

export default Admin;
