export const getCertificates = () =>
  fetch("http://localhost:5021/api/Certificates")
    .then((response) => response.json())
    .catch((error) => {
      console.error("Error fetching certificates:", error);
    });
