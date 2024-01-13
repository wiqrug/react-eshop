import { Button, Dialog, DialogActions, TextField } from "@mui/material";
import React, { useState } from "react";

export const AddCertificateModal = ({ open, onClose }) => {
  const [title, setTitle] = useState(null);
  const [description, setDescription] = useState(null);
  const [price, setPrice] = useState(null);
  const [imageSrc, setImageSrc] = useState(null);

  return (
    <Dialog open={open} onClose={onClose}>
      {/* Modal content here */}
      <DialogActions>
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
        <Button onClick={onClose}>Close</Button>
      </DialogActions>
    </Dialog>
  );
};
