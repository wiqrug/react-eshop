import React from "react";
import { useModal } from "hooks/useModal";
import { AddCertificateModal } from "components/Certificates/AddCertificateModal";
import CertificatesList from "components/Certificates/Certificates";
import { createCertificate } from "api/certificates/createCertificate";
import { useCertificates } from "hooks";

const ManageCertificates = (props) => {
    const { cookieValue } = props;
    const { certificates, fetchCertificates } = useCertificates();
    // console.log("certificates:"+ certificates)

    //Should this have higher-level names?
    const { isModalOpen, handleOpenModal, handleCloseModal } = useModal();

    const createAndFetchCertificate = async (certificateData) => {
        await createCertificate(certificateData);
        fetchCertificates();
    };
    // console.log("certificates:"+ certificates)

    return (
        <>
            <div className="add-certificate">
                <button onClick={handleOpenModal}>Add Certificate</button>
            </div>
            <CertificatesList
                certificates={certificates}
                cookieValue={cookieValue}
                isAdminView
                fetchCertificates={fetchCertificates}
            />
            <AddCertificateModal
                open={isModalOpen}
                onClose={handleCloseModal}
                onSave={createAndFetchCertificate}
            />
        </>
    );
};

export default ManageCertificates;
