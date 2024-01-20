import { useExams } from "hooks/useExams";
import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { useModal } from "hooks";
import AddExamModal from "components/Modals/AddExamModal";
import { addExam, deleteExam, updateExam } from "api";
import UpdateExamModal from "components/Modals/UpdateExamModal";

const ManageExams = () => {
  const [rows, setRows] = useState([]); // Initiate Rows as Empty Array
  const [columns, setColumns] = useState([]); // Initiate Columns as Empty Array
  const [examTitle, setExamTitle] = useState(null); //
  const { exams, fetchExams } = useExams(); // Deconstruct exams and fetchExams

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
      fetchExams();
      const dynamicColumns = Object.keys(exams[0]).map((key) => ({
        label: key,
      })); // Make Keys from Dictionary Exams as Columns
      setColumns(dynamicColumns);
      setRows(exams);
    } catch (error) {
      console.error("Failed to fetch exams:", error);
    }
  }, [exams]);

  const handleAdd = () => {
    handleOpenAddModal();
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

  const handleUpdate = (Title) => {
    console.log("Title handle update:" + Title);
    setExamTitle(Title);
    handleOpenUpdateModal();
  };

  const handleSaveUpdated = async (Title, updatedExamData) => {
    console.log(`Updated DAta ${updatedExamData}`);

    try {
      await updateExam(Title, updatedExamData);
      fetchExams();
      console.log(`Updated DAta ${updatedExamData}`);
    } catch (error) {
      console.log(`ERROR: `, error.message);

      console.error("failed to update candidate ");
    }
  };

  const handleDelete = async (Title) => {
    try {
      await deleteExam(Title);
      fetchExams();
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
        identifierField="title"
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
