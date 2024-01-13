import { Button, Dialog, DialogActions } from "@mui/material";
import React from "react";

export const AddCertificateModal = ({ open, onClose }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      {/* Modal content here */}
      <DialogActions>
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
