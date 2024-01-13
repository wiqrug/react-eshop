import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  TextField,
} from "@mui/material";
import React, { useState } from "react";

export const AddCertificateModal = ({ open, onClose }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");
  const [imageSrc, setImageSrc] = useState("");
  const [error, setError] = useState({
    title: false,
    description: false,
    price: false,
  });

  const handleSave = () => {
    // Check if required fields are filled
    const newError = {
      title: !title,
      description: !description,
      price: !price,
    };

    setError(newError);

    // Check if there's any error
    const hasError = Object.values(newError).some((isError) => isError);

    if (hasError) {
      // Prevent saving if there are errors
      console.log("Please fill in all required fields.");
      return;
    }

    // Add your save functionality here
    console.log("Saving certificate data...");
    onClose(); // Close modal after saving
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogContent>
        <TextField
          error={error.title}
          helperText={error.title && "Title is required."}
          margin="dense"
          label="Title "
          type="text"
          fullWidth
          variant="outlined"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
        <TextField
          error={error.description}
          helperText={error.description && "Description is required."}
          margin="dense"
          label="Description "
          type="text"
          fullWidth
          multiline
          rows={4}
          variant="outlined"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
        <TextField
          error={error.price}
          helperText={error.price && "Price is required."}
          margin="dense"
          label="Price "
          type="number"
          fullWidth
          variant="outlined"
          value={price}
          onChange={(e) => setPrice(e.target.value)}
        />
        <TextField
          margin="dense"
          label="Image Source "
          type="text"
          fullWidth
          variant="outlined"
          value={imageSrc}
          onChange={(e) => setImageSrc(e.target.value)}
        />
      </DialogContent>
      <DialogActions style={{ justifyContent: "space-between" }}>
        <Button onClick={onClose}>Close</Button>
        <Button onClick={handleSave}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};
