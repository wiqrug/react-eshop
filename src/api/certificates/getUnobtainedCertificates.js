import { getCookie } from "utils/getCookie";

export const getUnobtainedCertificates = () => {
  const currentUser = getCookie();
  if (currentUser && currentUser.candidateNumber) {
    const url = `http://localhost:5021/api/CandidateCertificates/unobtained/${currentUser.candidateNumber}`;

    return fetch(url)
      .then((response) => response.json())
      .catch((error) => {
        console.error(
          "Error fetching candidates unobtained certificates",
          error
        );
        // Optionally return a default value or re-throw the error
      });
  } else {
    // Handle the case where there is no current user or candidate number
    console.error("No current user or candidate number found");
    return Promise.resolve([]); // or however you want to handle this scenario
  }
};
