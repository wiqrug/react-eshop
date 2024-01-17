import { instance as axios } from "api/axios";

export const updateCandidateMark = async (
  updateCandMark,
  title,
  newMark,
  recordId
) => {
  const url = `CandidateCertificates/Certificates/${recordId}`;
  const jsonPayload = {
    candidateNumber: updateCandMark,
    title: title,
    mark: newMark,
  };

  try {
    const response = await axios.put(url, jsonPayload);
    return response.data;
  } catch (error) {
    console.error("Error updating candidate's mark:", error);
    throw error;
  }
};
