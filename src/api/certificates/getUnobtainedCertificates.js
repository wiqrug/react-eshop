export const getUnbtainedCertificates = () =>
  fetch("http://localhost:5021/api/CandidateCertificates/unobtained/1003")
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching candidates obtained certificates", error)
    );
