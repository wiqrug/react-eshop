import { instance as axios } from "api/axios";
export const createCandidate = async (candidateData) => {
  try {
    const response = await axios.post("Admins/addCandidate", candidateData);
    console.log("Candidate added successfully", response.data);
    return response.data;
  } catch (error) {
    if (error.response) {
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      console.error("Error request:", error.request);
    } else {
      console.error("Error message:", error.message);
    }
    console.error("Error config:", error.config);
  }
};
