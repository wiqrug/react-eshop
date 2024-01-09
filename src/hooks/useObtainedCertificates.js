import { useState } from "react";
import { useEffect } from "react";
import { getObtainedCertificates } from "api/certificates/getObtainedCertificates";
import { getCookie } from "utils/getCookie";

export const useObtainedCertificates = () => {
  const [obtainedCertificates, setObtainedCertificates] = useState(null);

  useEffect(() => {
    const currentUser = getCookie();
    if (currentUser) {
      getObtainedCertificates().then((data) => {
        // @ts-ignore
        setObtainedCertificates(data.$values);
      });
    }
  }, []);

  return obtainedCertificates;
};
