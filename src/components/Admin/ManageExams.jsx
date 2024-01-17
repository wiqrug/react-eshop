import { useExams } from "hooks/useExams";
import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { useModal } from "hooks";
import AddExamModal from "components/Modals/AddExamModal";
import { addExam, updateExam } from "api";
import UpdateExamModal from "components/Modals/UpdateExamModal";

const ManageExams = () => {
  const [rows, setRows] = useState([]);           // Initiate Rows as Empty Array
  const [columns, setColumns] = useState([]);     // Initiate Columns as Empty Array
  const [examTitle, setExamTitle] = useState(null);     //
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

  const handleUpdate = (Title) => {
    handleOpenUpdateModal();
    setExamTitle(Title)
  };

  const handleSave = async (newExamData) => {
    try {
      // Call API function to add the new candidate
      await addExam(newExamData);
      console.log("from Manage Exams");
      console.log(newExamData);

      // Fetch the updated list of candidates after adding the new one
      await fetchExams();
    } catch (error) {
      console.error("Failed to add candidate:", error);
    }
  };

  const handleSaveUpdated = async (Title, updatedData) => {
    try {
      await updateExam(Title, updatedData);
      await fetchExams();
    } catch (error) {
      console.error("failed to update candidate ");
    }
    console.log(`Updated DAta ${updatedData}`);
  };


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
    <>
      <CustomTable
        columns={columns}
        rows={rows}
        handleAdd={handleAdd}
        handleDelete={handleDelete}
        handleUpdate={handleUpdate}
        identifierField={undefined}
      />
      <AddExamModal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSave={handleSave}
      />
      <UpdateExamModal
        open={isUpdateModalOpen}
        onClose={handleCloseUpdateModal}
        onSave={handleSaveUpdated}
        Title={examTitle}
      />
    </>
  );
};

export default ManageExams;
