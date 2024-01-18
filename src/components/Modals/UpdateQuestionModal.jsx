import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import QuestionFormField from "components/FormFields/QuestionFormField";
import useFormFields from "hooks/useFormFields";
import React from "react";

const UpdateExamModal = ({
  open,
  onClose,
  onSave,
  questionId,
}) => {
    const { fields, handleFieldChange } = useFormFields({
        question: "",
        answerA: "",
        answerB: "",
        answerC: "",
        answerD: "",
        imageSrc: "",
        correctAnswer: '',
        examTitle: "",
    });
  
  const handleSaveClick = () => {
    console.log("From Update Question Modal fields:", fields);
    console.log("From Update Question Modal Title:", questionId);
    onSave(questionId, fields); // Passesthe updated fields to the onSave function
    onClose(); // Closes the modal
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        {/* Pass each field and its corresponding onChange handler as props */}
        <QuestionFormField {...fields} onChange={handleFieldChange} />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSaveClick}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateExamModal;
