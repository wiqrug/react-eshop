import React from "react";
import { Link } from "react-router-dom";
import UpdateCertificateModal from "./UpdateCertificateModal";
import { deleteCertificate } from "api/certificates/deleteCertificate";
import { updateCertificateByTitle } from "api/certificates/updateCertificateByTitle";
import { useModal } from "hooks/useModal";

const CertificateCard = ({
  imageSrc,
  title,
  price,
  id,
  cookieValue,
  isAdminView,
  certificates,
  fetchCertificates,
}) => {
  const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

  const handleDelete = () => {
    const certificate = certificates.find((c) => c.$id === id);
    if (!certificate) {
      console.error("Certificate not found");
      return;
    }

    deleteCertificate(certificate).then(() => fetchCertificates());
  };

  const handleUpdate = async (updatedData) => {
    await updateCertificateByTitle({ title }, updatedData);
    fetchCertificates();
    handleCloseModal();
  };

  const linkPath = isAdminView
    ? `/CertificateStatus/${encodeURIComponent(title)}`
    : `/Certificate/${encodeURIComponent(title)}`;

  return (
    <>
      <Link
        to={linkPath}
        style={{ textDecoration: "none" }}
        className="certificate-link"
      >
        <article>
          <img
            src={imageSrc? imageSrc : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg"}
            alt="Certificate"
            style={{ maxWidth: '100%', minHeight: '50%', maxHeight: '50%' }}
          />
          <h4 className="certificate-title">{title.substring(0, 30)}{title.length>30 && "..."}</h4>
          <h4>{price} €</h4>
          {!cookieValue?.candidateNumber && isAdminView && (
            <div className="action-buttons">
              <button
                className="action-button update"
                onClick={handleOpenModal}
              >
                &#9998; Update
              </button>
              <button className="action-button delete" onClick={handleDelete}>
                &#128465; Delete
              </button>
            </div>
          )}
        </article>
      </Link>
      <UpdateCertificateModal
        open={isModalOpen}
        onClose={handleCloseModal}
        certificate={{ title, price, id }}
        onUpdate={handleUpdate}
      />
    </>
  );
};

export default CertificateCard;
