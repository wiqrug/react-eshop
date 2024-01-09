import Cookies from "js-cookie";

export const getAvailableCertificates = async () => {
  try {
    const currentUser = JSON.parse(Cookies.get("currentUser"));
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
  }
};
