import { getAvailableCertificates } from "api/certificates/getAvailableCertificates";
import { useEffect, useState } from "react";

export const useAvailableCertificates = () => {
  const [availableCertificates, setAvailableCertificates] = useState([]);

  useEffect(() => {
    getAvailableCertificates().then((data) =>
      setAvailableCertificates(data.$values)
    );
  }, []);
  return availableCertificates;
};
