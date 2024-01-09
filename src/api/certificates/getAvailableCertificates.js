import { getCookie } from "utils/getCookie";

export const getAvailableCertificates = async () => {
  try {
    const currentUser = getCookie();
    if (!currentUser || !currentUser.candidateNumber) {
      throw new Error("No current user or candidate number found.");
    }

    const url = `http://localhost:5021/api/CandidateCertificates/available/${currentUser.candidateNumber}`;
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching candidates available certificates", error);
    // Optionally return a default value or re-throw the error
    return []; // Example: return an empty array if there's an error
  }
};
