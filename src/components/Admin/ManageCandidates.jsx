import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { getCandidates } from "api/candidates/getCandidates";
import { deleteCandidateByNumber } from "api/candidates/deleteCandidateByNumber";
import { useModal } from "hooks/useModal";
import AddCandidateModal from "components/Modals/AddCandidateModal";
import { createCandidate } from "api/candidates/createCandidate";
import { UpdateCandidateModal } from "components/Modals/UpdateCandidateModal";
import { getCandidateByNumber } from "api/candidates/getCandidateByNumber";
import { updateCandidateByNumber } from "../../api/candidates/updateCandidateByNumber";

//rows and columns should have the same label

//create 2 axios, one for get candidates details by candidate number,
// one for post candidate details by candidate number
// the handleSaveUpdated, should accept as argument the updated data frmo the UpdateCandidateModal
// and should do the post request.

//also in the UpdateCandidateModal i have an unimplemented useEffect
// this useEffect is to prepopulate the data for the UI to make it easier for the admin

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [updatedCandidatesNumber, setUpdatedCandidatesNumber] = useState(null);
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
  }, [candidates]);

  const handleAdd = () => {
    handleOpenAddModal();
  };

  const handleUpdate = (candidateNumber) => {
    setUpdatedCandidatesNumber(candidateNumber);
    handleOpenUpdateModal();
  };

  const handleSave = async (newCandidateData) => {
    try {
      // Call API function to add the new candidate
      await createCandidate(newCandidateData);
      console.log("from Manage Candidates");
      console.log(newCandidateData);

      // Fetch the updated list of candidates after adding the new one
      await fetchCandidates();
    } catch (error) {
      console.error("Failed to add candidate:", error);
    }
  };
  const handleDelete = async (candidateNumber) => {
    try {
      // Assuming deleteCandidateByNumber is an API call that deletes the candidate based on candidateNumber
      await deleteCandidateByNumber(candidateNumber);

      // Update the state to remove the candidate from the UI
      setCandidates(
        candidates.filter(
          (candidate) => candidate.candidateNumber !== candidateNumber
        )
      );
    } catch (error) {
      console.error("Failed to delete candidate:", error);
    }
  };

  //needs implementation
  const handleSaveUpdated = async (updatedData) => {
    try {
      await updateCandidateByNumber(updatedCandidatesNumber, updatedData);
      await getCandidates();
    } catch (error) {
      console.error("failed to update candidate ");
    }
    console.log(`Updated DAta ${updatedData}`);
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
      {/* Change the state of the candidate with candidateNumber (which comes from
      handleUpdate) */}
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
