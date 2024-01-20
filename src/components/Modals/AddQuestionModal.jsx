import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import QuestionFormField from "components/FormFields/QuestionFormField";
import useFormFields from "hooks/useFormFields";

const AddExamModal = ({ open, onClose, onSave }) => {
  const { fields, handleFieldChange } = useFormFields({
    question: "",
    answerA: "",
    answerB: "",
    answerC: "",
    answerD: "",
    imageSrc: "",
    correctAnswer: "",
    examTitle: "",
  });

  const handleSave = () => {
    console.log("From Add question Modal", fields);
    onSave(fields);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <QuestionFormField {...fields} onChange={handleFieldChange} />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExamModal;
