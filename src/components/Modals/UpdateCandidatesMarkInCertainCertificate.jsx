import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const UpdateCandidatesMarkInCertainCertificate = ({
  open,
  onClose,
  onSave,
}) => {
  const [mark, setMark] = useState("");

  const handleSave = () => {
    console.log("Candidates Mark:", mark);
    onSave(mark);
    onClose();
    setMark("");
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <TextField
          label="Mark"
          type="number"
          fullWidth
          value={mark}
          onChange={(e) => setMark(e.target.value)}
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSave}>Save</Button>
      </DialogActions>
    </Dialog>
  );
};
