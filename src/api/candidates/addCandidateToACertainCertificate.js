import { instance as axios } from "api/axios";

export const addCandidateToACertainCertificate = async (
  candidateNumber,
  certificateTitle
) => {
  const jsonPayload = {
    candidateNumber: candidateNumber,
    title: certificateTitle,
  };
  const url = "/CandidateCertificates";

  try {
    const response = await axios.post(url, jsonPayload);
    return response;
  } catch (error) {
    console.error("Error adding candidate to certificate:", error);

    throw error;
  }
};
