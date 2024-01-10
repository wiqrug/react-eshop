import { getCandidateCertificates } from "api/certificates/getCandidateCertificates";
import { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "utils";

export const useCandidateCertificates = (certificateType) => {
  const [certificates, setCertificates] = useState(null);

  useEffect(() => {
    const currentUser = getCookie();
    if (currentUser) {
      getCandidateCertificates(certificateType).then((data) => {
        // @ts-ignore
        setCertificates(data.$values);
      });
    }
  }, [certificateType]);

  return certificates;
};
