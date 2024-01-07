export const getObtainedCertificates = () =>
  fetch("http://localhost:5021/api/CandidateCertificates/obtained/1003")
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching candidates obtained certificates", error)
    );
