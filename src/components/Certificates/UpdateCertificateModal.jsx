// UpdateCertificateModal.js
import React from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

//I need to add the fields needed in order to update the certificate
//When user clicks on the button Save Changes, i should update the database
//And then fetch to get the new certificates.
//Remember the fetch method is in the useCertificates custom hook

//This form should make a JSONpayload that is going to be sent through the form to the backend

const UpdateCertificateModal = ({ open, onClose, certificate }) => {
  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Certificate</DialogTitle>
      <DialogContent>
        {/* Here i can add my form fields and handle whatever i want  */}
        <p>Update form for: {certificate?.title}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={onClose}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCertificateModal;
