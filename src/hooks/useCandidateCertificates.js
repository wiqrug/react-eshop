import { getCandidateCertificates } from "api/certificates/getCandidateCertificates";
import { useState } from "react";
import { useEffect } from "react";
import { getCookie } from "utils";
import { useUserCookie } from "./useUserCookie";

export const useCandidateCertificates = (certificateType) => {
  const [certificates, setCertificates] = useState(null);
  const { cookie } = useUserCookie();

  useEffect(() => {
    const currentUser = getCookie();
    if (currentUser) {
      getCandidateCertificates(certificateType, cookie).then((data) => {
        // @ts-ignore
        setCertificates(data.$values);
      });
    }
  }, [certificateType, cookie]);

  return certificates;
};
