import { getAvailableCertificates } from "api/certificates/getAvailableCertificates";
import { useEffect, useState } from "react";
import { getCookie } from "utils/getCookie";

export const useAvailableCertificates = () => {
  const [availableCertificates, setAvailableCertificates] = useState([]);

  useEffect(() => {
    const currentUser = getCookie();
    if (currentUser) {
      // Check if there is a current user
      getAvailableCertificates().then((data) =>
        setAvailableCertificates(data.$values)
      );
    }
  }, []);
  return availableCertificates;
};
