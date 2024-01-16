import { instance as axios } from "api/axios";
export const createCandidate = async (candidateData) => {
  try {
    const response = await axios.post("admin/add-candidate", candidateData);
    console.log("Candidate added successfully", response.data);
    return response.data; // Assuming a successful response contains the added candidate data
  } catch (error) {
    if (error.response) {
      // The request was made and the server responded with a status code
      // that falls out of the range of 2xx
      console.error("Error response data:", error.response.data);
      console.error("Error response status:", error.response.status);
      console.error("Error response headers:", error.response.headers);
    } else if (error.request) {
      // The request was made but no response was received
      console.error("Error request:", error.request);
    } else {
      // Something happened in setting up the request that triggered an Error
      console.error("Error message:", error.message);
    }
    console.error("Error config:", error.config);
  }
};
