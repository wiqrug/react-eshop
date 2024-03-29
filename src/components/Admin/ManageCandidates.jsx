import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { getCandidates } from "api/candidates/getCandidates";
import { deleteCandidateByNumber } from "api/candidates/deleteCandidateByNumber";
import { useModal } from "hooks/useModal";
import AddCandidateModal from "components/Modals/AddCandidateModal";
import { createCandidate } from "api/candidates/createCandidate";
import { UpdateCandidateModal } from "components/Modals/UpdateCandidateModal";
import { updateCandidateByNumber } from "../../api/candidates/updateCandidateByNumber";

const ManageCandidates = () => {
  const [updatedCandidatesNumber, setUpdatedCandidatesNumber] = useState(null);
  const [candidates, setCandidates] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);

  const {
    isModalOpen: isAddModalOpen,
    handleCloseModal: handleCloseAddModal,
    handleOpenModal: handleOpenAddModal,
  } = useModal();

  const {
    isModalOpen: isUpdateModalOpen,
    handleCloseModal: handleCloseUpdateModal,
    handleOpenModal: handleOpenUpdateModal,
  } = useModal();

  const fetchCandidates = async () => {
    try {
      const data = await getCandidates();
      setCandidates(data);

      if (data.length > 0) {
        const dynamicColumns = Object.keys(data[0]).map((key) => ({
          label: key,
        }));
        setColumns(dynamicColumns);

        setRows(data);
      }
    } catch (error) {
      console.error("Failed to fetch candidates:", error);
    }
  };

  useEffect(() => {
    fetchCandidates();
  }, []);

  const handleAdd = () => {
    handleOpenAddModal();
  };

  const handleUpdate = (candidateNumber) => {
    setUpdatedCandidatesNumber(candidateNumber);
    handleOpenUpdateModal();
  };

  const handleSave = async (newCandidateData) => {
    try {
      await createCandidate(newCandidateData);
      console.log("from Manage Candidates");
      console.log(newCandidateData);

      await fetchCandidates();
    } catch (error) {
      console.error("Failed to add candidate:", error);
    }
  };
  const handleDelete = async (candidateNumber) => {
    try {
      await deleteCandidateByNumber(candidateNumber);

      const updatedCandidates = candidates.filter(
        (candidate) => candidate.candidateNumber !== candidateNumber
      );
      setCandidates(updatedCandidates);
      setRows(updatedCandidates);
    } catch (error) {
      console.error("Failed to delete candidate:", error);
    }
  };

  const handleSaveUpdated = async (updatedData) => {
    try {
      await updateCandidateByNumber(updatedCandidatesNumber, updatedData);
      const updatedCandidates = await getCandidates();
      setCandidates(updatedCandidates);
      setRows(updatedCandidates);
    } catch (error) {
      console.error("failed to update candidate:", error);
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
        identifierField={"candidateNumber"}
      />
      <AddCandidateModal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSave={handleSave}
      />
      <UpdateCandidateModal
        open={isUpdateModalOpen}
        onClose={handleCloseUpdateModal}
        onSave={handleSaveUpdated}
        candidateNumber={updatedCandidatesNumber}
      />
    </>
  );
};

export default ManageCandidates;
