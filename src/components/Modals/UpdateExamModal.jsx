import { Button, Dialog, DialogActions, DialogContent } from "@mui/material";
import { getExam } from "api";
import ExamFormField from "components/FormFields/ExamFormField";
import useFormFields from "hooks/useFormFields";
import React, { useEffect } from "react";

const UpdateExamModal = ({
  open,
  onClose,
  onSave,
  Title,
}) => {
  const { fields, setFields, handleFieldChange } = useFormFields({
    title: "",
    description:"",
    time: "",
  });

  useEffect(() => {
    if (Title) {
      const fetchExamData = async () => {
        try {
          const examData = await getExam(Title);
          setFields(examData); // Sets all the fields with the fetched data
        } catch (error) {
          console.error("Error fetching Exam data: ", error);
        }
      };

      fetchExamData();
    }
  }, [Title, setFields]);

  const handleSaveClick = () => {
    onSave(fields); // Passesthe updated fields to the onSave function
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
