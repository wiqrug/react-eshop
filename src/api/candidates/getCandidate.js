import { instance as axios } from "api/axios";

export const getCandidate = async (candidateNumber) => {
  const url = `Candidates/${candidateNumber}`;
  try {
    const response = await axios.get(url);
    return response;
  } catch (error) {
    console.error("Error fetching candidate:", error);
    throw error;
  }
};
