import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

/**
 * Gets certificate id from url parameter, and looks through certificates for the one with a matching id
 * Sets state and returns it
 */
export const useCertificate = (certificates) => {
  const [certificate, setCertificate] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    if (!certificates) return;

    const foundCertificate = certificates.find(
      (cert) => cert.$id.toString() === id
    );

    setCertificate(foundCertificate);
  }, [certificates, id]);

  return certificate;
};
