import React from "react";
import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import ExamFormField from "components/FormFields/ExamFormField";
import useFormFields from "hooks/useFormFields";

const AddExamModal = ({ open, onClose, onSave }) => {
  const { fields, handleFieldChange } = useFormFields({
    certificateTitle: "",
    title: "",
    description: "",
    time: "",
    // Add all other fields here
  });

  const handleSave = () => {
    console.log("From Add Exam Modal", fields);
    onSave(fields);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <ExamFormField {...fields} onChange={handleFieldChange} />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddExamModal;
