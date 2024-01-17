import { instance as axios } from "api/axios";

export const getCandidateByNumber = async (candidateNumber) => {
  const url = `Admins/getCandidateByNumber/${candidateNumber}`;
  try {
    const response = await axios.get(url);
    return response.data;
  } catch (error) {
    console.error("Error ", error);
    throw error;
  }
};
