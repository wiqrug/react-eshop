import { createCertificate } from "api/certificates/createCertificate";
import AvailableCertificates from "components/CandidateCertificates/AvailableCertificates";
import { AddCertificateModal } from "components/Certificates/AddCertificateModal";
import CertificatesList from "components/Certificates/Certificates";
import { useModal } from "hooks/useModal";
import React, { useState } from "react";
import ManageExams from "./ManageExams";
import ManageCandidates from "./ManageCandidates";
import ManageCandidateCertificates from "./ManageCandidateCertificates";
import ManageCandidateExams from "./ManageCandidateExams";
import ManageQuestions from "./ManageQuestions";
import ManageCertificates from "./ManageCertificates";

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
 *
 * Update certificate -> if Value = " " then the value stays as it previously was
 */

const Admin = (props) => {
  const { certificates, cookieValue, fetchCertificates } = props;

  const [page, setPage] = useState(<ManageCandidates />)

  const handleSelectionChange = (option) => {
    switch (option) {
      case "ManageCandidates":
        setPage(<ManageCandidates />)
        break;
      case "ManageCertificates":
        setPage(<ManageCertificates certificates={certificates} cookieValue={cookieValue} fetchCertificates={fetchCertificates} />)
        break;
      case "ManageExams":
        setPage(<ManageExams />)
        break;
      case "ManageCandidateCertificates":
        setPage(<ManageCandidateCertificates />)
        break;
      case "ManageCandidateExams":
        setPage(<ManageCandidateExams />)
        break;
      case "ManageQuestions":
        setPage(<ManageQuestions />)
        break;
      default:
        setPage(<ManageCandidates />)
    }
  };

  return (
    <>
      <div className="menu">
        <button onClick={() => handleSelectionChange("ManageCandidates")}>
          Manage Candidates
        </button>
        <button onClick={() => handleSelectionChange("ManageCertificates")}>
          Manage Certificates
        </button>
        <button onClick={() => handleSelectionChange("ManageExams")}>
          Manage Exams
        </button>
        <button onClick={() => handleSelectionChange("ManageCandidateCertificates")}>
          Manage Candidates-Certificates
        </button>
        <button onClick={() => handleSelectionChange("ManageCandidateExams")}>
          Manage Candidates-Exams
        </button>
        <button onClick={() => handleSelectionChange("ManageQuestions")}>
          Manage Questions
        </button>
      </div>

      {/* Show Page of selection */}
      {page}
    </>
  );
};

export default Admin;
