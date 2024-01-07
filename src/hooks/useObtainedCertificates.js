import { useState } from "react";
import { useEffect } from "react";
import { getObtainedCertificates } from "api/certificates/getObtainedCertificates";

export const useObtainedCertificates = () => {
  const [obtainedCertificates, setObtainedCertificates] = useState(null);

  useEffect(() => {
    getObtainedCertificates().then((data) => {
      // @ts-ignore
      setObtainedCertificates(data.$values);
    });
  }, []);

  return obtainedCertificates;
};
