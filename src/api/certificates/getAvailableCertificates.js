export const getAvailableCertificates = () =>
  fetch("http://localhost:5021/api/CandidateCertificates/available/1003")
    .then((response) => response.json())
    .catch((error) =>
      console.error("Error fetching candidates available certificates", error)
    );
