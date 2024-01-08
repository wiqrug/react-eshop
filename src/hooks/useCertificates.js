import { getCertificates } from "../api";
import { useState, useEffect } from "react";

/**
 * Fetches certificates, sets state, and returns it
 */
export const useCertificates = () => {
  const [certificates, setCertificates] = useState(null);

  // useEffect(() => {
  //   getCertificates().then((data) => setCertificates(data.$values));
  // }, []); // Empty dependency array to run only once

  return certificates;
};
