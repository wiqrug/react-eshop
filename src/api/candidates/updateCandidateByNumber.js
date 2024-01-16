import { instance as axios } from "api/axios";

export const getCandidateByNumber = async (candidateNumber, payload) => {
  const url = `Admins/admin/get-candidate-by-number/${candidateNumber}`;
  try {
    const response = await axios.put(url, payload);
    return response.data; // Assuming the response data contains the candidate details
  } catch (error) {
    console.error("Error pipi", error);
    throw error; // Re-throw the error to handle it in the calling function
  }
};
