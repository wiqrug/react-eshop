import { instance as axios } from "api/axios";

export const updateCandidateMark = async (recordId, newMark) => {
  const url = `CandidateCertificates/Certificates/${recordId}`;
  const jsonPayload = {
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
