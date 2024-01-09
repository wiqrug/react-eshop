import { useState, useEffect } from "react";
import { getUnobtainedCertificates } from "api/certificates/getUnobtainedCertificates";
import { getCookie } from "utils/getCookie";

export const useUnobtainedCertificates = () => {
  const [unobtainedCertificates, setUnobtainedCertificates] = useState(null);

  useEffect(() => {
    const currentUser = getCookie();
    if (currentUser) {
      getUnobtainedCertificates().then((data) => {
        // @ts-ignore
        setUnobtainedCertificates(data.$values);
      });
    }
  }, []);
  return unobtainedCertificates;
};
