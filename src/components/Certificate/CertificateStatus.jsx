///Certificate/:title/Status

import { addCandidateToACertainCertificate } from "api/candidates/addCandidateToACertainCertificate";
import { deleteCandidateOfCertainCertificate } from "api/candidates/deleteCandidateOfCertainCertificate";
import { getCandidatesOfCertainCertificate } from "api/candidates/getCandidatesOfCertainCertificate";
import { updateCandidateMark } from "api/candidates/updateCandidateMark";
import CustomTable from "components/Admin/CustomTable";
import AddCandidateInCertainCertificate from "components/Modals/AddCandidateInCertainCertificate";
import { UpdateCandidatesMarkInCertainCertificate } from "components/Modals/UpdateCandidatesMarkInCertainCertificate";
import { useModal } from "hooks";

const { default: React, useState, useEffect } = require("react");
const { useParams } = require("react-router-dom");
//////////////////////////////////////////////////////////////////////////////////////////
const CertificateStatus = () => {
  //Setting modals
  const { isModalOpen, setIsModalOpen, handleCloseModal, handleOpenModal } =
    useModal();

  const {
    isModalOpen: isUpdateModalOpen,
    setIsModalOpen: setIsUpdateModalOpen,
    handleCloseModal: handleCloseUpdateModal,
    handleOpenModal: handleOpenUpdateModal,
  } = useModal();

  ///////////////////////////////////////////////////////////////////////////////////

  const [candidates, setCandidates] = useState([]);
  const [candidate, setCandidate] = useState();
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const { title } = useParams();

  const [recordId, setRecordId] = useState(null);

  const fetchCandidates = async () => {
    try {
      const data = await getCandidatesOfCertainCertificate(title);
      setCandidates(data);

      //creating the columns of the array
      if (data.length > 0) {
        const dynamicColumns = Object.keys(data[0]).map((key) => ({
          label: key,
        }));
        setColumns(dynamicColumns);
        //creating the rows of the array
        setRows(data);
      }
    } catch (error) {
      console.error("Failed to fetch candidates:", error);
    }
  };
  useEffect(() => {
    fetchCandidates();
  }, [title]);

  //Add should be a modal.
  //this modal is a form with candidateNumber
  //I should take using useParam the name of the Certificate
  //and do a post method with the title of the certificate and the candidate number
  const handleAdd = () => {
    handleOpenModal();
  };

  const handleDelete = async (recordId) => {
    try {
      await deleteCandidateOfCertainCertificate(recordId);

      const updatedCandidates = candidates.filter(
        (c) => c.recordId !== recordId
      );
      setCandidates(updatedCandidates);
      setRows(updatedCandidates);
    } catch (error) {
      console.error("poli diskolo file!");
    }
  };

  //needs implementation
  const handleUpdate = (recordId) => {
    setRecordId(recordId);
    handleOpenUpdateModal(); // Open the update modal
  };

  const handleSaveUpdatedMark = async (newMark) => {
    if (recordId) {
      try {
        const targetRow = rows.find((row) => row.recordId === recordId);
        const updateCandMark = targetRow.candidateNumber;
        // Call your API to update the candidate's mark
        await updateCandidateMark(updateCandMark, title, newMark, recordId);
        // After updating, fetch the updated list of candidates
        const updatedCandidates = await getCandidatesOfCertainCertificate(
          title
        );
        setCandidates(updatedCandidates);
        setRows(updatedCandidates);
      } catch (error) {
        console.error("Error updating candidate's mark:", error);
      }
    }
  };

  const handleSaveNewCandidate = async (candidateNumber) => {
    try {
      await addCandidateToACertainCertificate(candidateNumber, title);
      const updatedCandidates = await getCandidatesOfCertainCertificate(title);
      setCandidates(updatedCandidates);
      setRows(updatedCandidates);
    } catch (error) {
      console.error("Error adding candidate to that certificate");
    }
  };

  return (
    <>
      <CustomTable
        columns={columns}
        rows={rows}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        identifierField={"recordId"}
      ></CustomTable>
      <AddCandidateInCertainCertificate
        open={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSaveNewCandidate}
      />
      <UpdateCandidatesMarkInCertainCertificate
        open={isUpdateModalOpen}
        onClose={handleCloseUpdateModal}
        onSave={handleSaveUpdatedMark}
      />
    </>
  );
};

export default CertificateStatus;
