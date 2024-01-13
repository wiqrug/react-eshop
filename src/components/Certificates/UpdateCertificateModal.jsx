import React, { useState } from "react";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";
import { TextField } from "@mui/material";

const UpdateCertificateModal = ({ open, onClose, certificate, onUpdate }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);
  const [price, setPrice] = useState(null);

  const payload = {
    title: title,
    description: description,
    price: price,
    imageSrc: imageSrc,
  };

  const handleSaveChanges = () => {
    onUpdate(payload);
    onClose();
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Update Certificate</DialogTitle>
      <DialogContent>
        <p>
          Fields marked with an asterisk (*) are optional. Leave them empty to
          keep the existing values.
        </p>
        <TextField
          margin="dense"
          label="Title *"
          type="text"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Description *"
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Price *"
          type="number"
          fullWidth
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Image Source *"
          type="text"
          fullWidth
          variant="outlined"
          value={imageSrc}
          onChange={(e) => setImageSrc(e.target.value)}
        />
        <p>Update form for: {certificate?.title}</p>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCertificateModal;
