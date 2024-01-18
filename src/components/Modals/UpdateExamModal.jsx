import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import ExamFormField from "components/FormFields/ExamFormField";
import useFormFields from "hooks/useFormFields";
import React from "react";

const UpdateExamModal = ({
  open,
  onClose,
  onSave,
  Title,
}) => {
  const { fields, handleFieldChange } = useFormFields({
    title: "",
    description:"",
    time: "",
    certificateTitle: "",
  });
  
  const handleSaveClick = () => {
    console.log("From Update Exam Modal fields:", fields);
    console.log("From Update Exam Modal Title:", Title);
    onSave(Title, fields); // Passesthe updated fields to the onSave function
    onClose(); // Closes the modal
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        {/* Pass each field and its corresponding onChange handler as props */}
        <ExamFormField {...fields} onChange={handleFieldChange} />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSaveClick}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateExamModal;
