import { useState, useEffect } from "react";
import { getUnbtainedCertificates } from "api/certificates/getUnobtainedCertificates";

export const useUnobtainedCertificates = () => {
  const [unobtainedCertificates, setUnobtainedCertificates] = useState(null);

  useEffect(() => {
    getUnbtainedCertificates().then((data) => {
      // @ts-ignore
      setUnobtainedCertificates(data.$values);
    });
  }, []);
  return unobtainedCertificates;
};
