import { getCertificates } from "../api";
import { useState, useEffect } from "react";

/**
 * Fetches certificates, sets state, and returns it
 */
export const useCertificates = () => {
  const [certificates, setCertificates] = useState(null);
  const fetchCertificates = () => {
    getCertificates().then((data) => {
      setCertificates(data.$values);
    });
  };

  useEffect(() => {
    fetchCertificates();
  }, []);

  return { certificates, fetchCertificates };
};
