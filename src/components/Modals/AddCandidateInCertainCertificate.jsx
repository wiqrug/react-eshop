import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";

const AddCandidateInCertainCertificate = ({ open, onClose, onSave }) => {
  const [candidateNumber, setCandidateNumber] = useState("");

  const handleSave = () => {
    console.log("Candidate Number:", candidateNumber);
    onSave(candidateNumber);
    onClose();
    setCandidateNumber(""); // Reset the field after saving
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <TextField
          label="Candidate Number"
          type="number"
          fullWidth
          value={candidateNumber}
          onChange={(e) => setCandidateNumber(e.target.value)}
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};

export default AddCandidateInCertainCertificate;
