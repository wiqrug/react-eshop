import { instance as axios } from "api/axios";

export const updateCandidateByNumber = async (candidateNumber, payload) => {
  const url = `Admins/updateCandidate/${candidateNumber}`;
  try {
    const response = await axios.put(url, payload);
    return response.data;
  } catch (error) {
    console.error("Error pipi", error);
    throw error;
  }
};
