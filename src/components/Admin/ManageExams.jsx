import { useExams } from "hooks/useExams";
import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { useModal } from "hooks";

const ManageExams = () => {
  const [rows, setRows] = useState([]);           // Initiate Rows as Empty Array
  const [columns, setColumns] = useState([]);     // Initiate Columns as Empty Array
  const [examId, setExamId] = useState(null);     //
  const { exams, fetchExams } = useExams();       // Deconstruct exams and fetchExams
  
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
  
  useEffect(() => {
    try {
      fetchExams();                                               // Fetch
      const dynamicColumns =                                      // Make Keys from Dictionary Exams as Columns
        Object.keys(exams[0]).map((key) => ({ label: key }));
      setColumns(dynamicColumns);                                 // Set Columns
      setRows(exams);                                             // Set Rows
    } catch (error) {
      console.error("Failed to fetch exams:", error);
    }
  }, [exams]);

  const handleAdd = () => {
    handleOpenAddModal();
  };

  const handleUpdate = (id) => {
    handleOpenUpdateModal();
    setExamId(id)
  };

  // const handleSave = async (newCandidateData) => {
  //   try {
  //     // Call API function to add the new candidate
  //     await createCandidate(newCandidateData);
  //     console.log("from Manage Candidates");
  //     console.log(newCandidateData);

  //     // Fetch the updated list of candidates after adding the new one
  //     await fetchCandidates();
  //   } catch (error) {
  //     console.error("Failed to add candidate:", error);
  //   }
  // };




  const handleDelete = (id) => {
    // Not implemented yet
    try {
      // Assuming deleteCandidateByNumber is an API call that deletes the candidate based on candidateNumber
      // await deleteCandidateByNumber(candidateNumber);

      // Update the state to remove the candidate from the UI

      // setCandidates(
      //   candidates.filter(
      //     (candidate) => candidate.candidateNumber !== candidateNumber
        // )
      // );
    } catch (error) {
      console.error("Failed to delete candidate:", error);
    }
  };

  return (
    <CustomTable
      columns={columns}
      rows={rows}
      handleAdd={handleAdd}
      handleDelete={handleDelete}
      handleUpdate={handleUpdate}
      identifierField={undefined}
    />
  );
};

export default ManageExams;
