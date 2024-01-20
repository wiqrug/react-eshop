import React, { useEffect, useState } from "react";
import CustomTable from "./CustomTable";
import { useQuestions } from "hooks/useQuestions";
import { addQuestion, deleteQuestion, updateQuestion } from "api";
import { useModal } from "hooks";
import AddQuestionModal from "components/Modals/AddQuestionModal";
import UpdateQuestionModal from "components/Modals/UpdateQuestionModal";

const ManageQuestions = () => {
  const [rows, setRows] = useState([]); // Initiate Rows as Empty Array
  const [columns, setColumns] = useState([]); // Initiate Columns as Empty Array
  const [questionId, setQuestionId] = useState(null); //
  const { questions, fetchQuestions } = useQuestions(); // Deconstruct questions and fetchQuestions

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
      fetchQuestions();
      const dynamicColumns = Object.keys(questions[0]).map((key) => ({
        label: key,
      })); // Make Keys from Dictionary questions as Columns
      setColumns(dynamicColumns);
      setRows(questions);
    } catch (error) {
      console.error("Failed to fetch questions:", error);
    }
  }, [questions]);

  const handleAdd = () => {
    handleOpenAddModal();
  };

  const handleSave = async (question) => {
    try {
      // Call API function to add the new candidate
      const filteredQuestion = Object.keys(question)
        .filter((key) => key !== "examTitle")
        .reduce((result, key) => {
          result[key] = question[key];
          return result;
        }, {});

      await addQuestion(question.examTitle, filteredQuestion);

      // Fetch the updated list of candidates after adding the new one
      fetchQuestions();
    } catch (error) {
      console.error("Failed to add question:", error);
    }
  };

  const handleUpdate = (id) => {
    setQuestionId(id);
    handleOpenUpdateModal();
  };

  const handleSaveUpdated = async (id, updatedQuestion) => {
    console.log(`Updated DAta ${updatedQuestion}`);

    try {
      await updateQuestion(id, updatedQuestion);
      fetchQuestions();
      console.log(`Updated DAta ${updatedQuestion}`);
    } catch (error) {
      console.log(`ERROR: `, error.message);

      console.error("failed to update candidate ");
    }
    // console.log(`Updated DAta ${updatedQuestion}`);
  };

  const handleDelete = async (id) => {
    try {
      await deleteQuestion(id);
      fetchQuestions();
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
        identifierField="questionId"
      />
      <AddQuestionModal
        open={isAddModalOpen}
        onClose={handleCloseAddModal}
        onSave={handleSave}
      />
      <UpdateQuestionModal
        open={isUpdateModalOpen}
        onClose={handleCloseUpdateModal}
        onSave={handleSaveUpdated}
        questionId={questionId}
      />
    </>
  );
};

export default ManageQuestions;
