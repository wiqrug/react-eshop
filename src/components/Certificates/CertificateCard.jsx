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
  isAdminView,
  certificates,
  fetchCertificates,
  cookieValue
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

  const detailsPath = isAdminView
    ? `/CertificateStatus/${encodeURIComponent(title)}`
    : `/Certificate/${encodeURIComponent(title)}`;

  return (
    <>
      <article>
        {isAdminView ? (
          <>
            <img
              src={
                imageSrc
                  ? imageSrc
                  : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg%7D"
              }
              alt="Certificate"
            />
            <h4 className="certificate-title">{title}</h4>
          </>
        ) : (
          <Link to={detailsPath}>
            <img
              src={
                imageSrc
                  ? imageSrc
                  : "https://thewisdomofwalt.com/wp-content/uploads/2019/10/Learn-something-new.jpg%7D"
              }
              alt="Certificate"
            />
            <h4 className="certificate-title">{title}</h4>
          </Link>
        )}
        <h4>{price} €</h4>
        {isAdminView && (
          <div className="action-buttons">
            <button className="action-button update" onClick={handleOpenModal}>
              &#9998; Update
            </button>
            <button className="action-button delete" onClick={handleDelete}>
              &#128465; Delete
            </button>
            <Link to={detailsPath} className="action-button details">
              &#10148; Details
            </Link>
          </div>
        )}
      </article>
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
