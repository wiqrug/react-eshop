import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Button from "@mui/material/Button";

import { useCertificateProperties } from "hooks/useCertificateProperties";
import CertificateFormFields from "./CreateFormFields";
import React from "react";

const UpdateCertificateModal = ({ open, onClose, certificate, onUpdate }) => {
  //fix the null issue on the backend i think i cannot do that here right now

  const {
    title,
    setTitle,
    description,
    setDescription,
    price,
    setPrice,
    imageSrc,
    setImageSrc,
  } = useCertificateProperties();

  //fkin fixed!
  const handleSaveChanges = () => {
    const updatedData = {
      title: title !== null ? title : certificate?.title,
      description:
        description !== null ? description : certificate?.description,
      price: price !== null ? Number(price) : certificate?.price,
      imageSrc: imageSrc !== null ? imageSrc : certificate?.imageSrc,
    };

    onUpdate(updatedData);
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

        <CertificateFormFields
          title={title}
          setTitle={setTitle}
          description={description}
          setDescription={setDescription}
          price={price}
          setPrice={setPrice}
          imageSrc={imageSrc}
          setImageSrc={setImageSrc}
          certificate={certificate}
        />
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose}>Cancel</Button>
        <Button onClick={handleSaveChanges}>Save Changes</Button>
      </DialogActions>
    </Dialog>
  );
};

export default UpdateCertificateModal;
