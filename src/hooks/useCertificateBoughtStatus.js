// import { useState, useEffect } from "react";
// import { useCandidateCertificates } from "./useCandidateCertificates";

// export const useCertificateBoughtStatus = (certificate) => {
//   const [isBought, setIsBought] = useState(false);
//   const availableCertificates = useCandidateCertificates("available");

//   useEffect(() => {
//     if (
//       availableCertificates &&
//       Array.isArray(availableCertificates) &&
//       certificate
//     ) {
//       const isCertificateAvailable = availableCertificates.some(
//         (cert) => cert.$id === certificate.$id
//       );
//       setIsBought(!isCertificateAvailable);
//     }
//   }, [availableCertificates, certificate]);

//   return [isBought, setIsBought];
// };
