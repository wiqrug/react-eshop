import { useEffect, useState } from "react";

export const useCertificateInfo = (certificate) => {
  const [, setCertTitle] = useState(null);

  useEffect(() => {
    if (certificate) {
      setCertTitle(certificate.title);
    }
  }, [certificate]);
};
