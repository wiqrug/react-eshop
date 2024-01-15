import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { getCandidates } from "api/candidates/getCandidates";
import { deleteCandidateByNumber } from "api/candidates/deleteCandidateByNumber";
import { useModal } from "hooks/useModal";
import AddCandidateModal from "components/Modals/AddCandidateModal";
import { createCandidate } from "api/candidates/createCandidate";

//rows and columns should have the same label

const ManageCandidates = () => {
  const [candidates, setCandidates] = useState([]);
  const [columns, setColumns] = useState([]);
  const [rows, setRows] = useState([]);
  const { isModalOpen, setIsModalOpen, handleCloseModal, handleOpenModal } =
    useModal();

  const fetchCandidates = async () => {
    try {
      const data = await getCandidates();
      setCandidates(data);

      if (data.length > 0) {
        const dynamicColumns = Object.keys(data[0]).map((key) => ({
          label: key,
        }));
        setColumns(dynamicColumns);
        setRows(data); // Set rows here after fetching data
      }
    } catch (error) {
      console.error("Failed to fetch candidates:", error);
    }
  };

  useEffect(() => {
    fetchCandidates();

    // Set up a polling mechanism to refetch candidates every X milliseconds
    const intervalId = setInterval(fetchCandidates, 5000); // Poll every 5 seconds, adjust as needed

    // Clean up the interval on component unmount
    return () => clearInterval(intervalId);
  }, []);

  //get the name of the properties
  // console.log(columns);
  // console.log(candidates);

  const handleAdd = () => {
    // Implement the logic for opening the modal here
    handleOpenModal();
  };

  const handleUpdate = () => {};
  const handleSave = async (newCandidateData) => {
    try {
      // Call API function to add the new candidate
      await createCandidate(newCandidateData);

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
        open={isModalOpen}
        onClose={handleCloseModal}
        onSave={handleSave}
      />
    </>
  );
};

export default ManageCandidates;
