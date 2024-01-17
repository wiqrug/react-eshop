import { instance as axios } from "api/axios";

export const getCandidateCertificates = async (
  certificateType,
  currentUser
) => {
  if (currentUser?.candidateNumber) {
    const url = `/CandidateCertificates/${certificateType}/${currentUser.candidateNumber}`;

    try {
      const response = await axios.get(url);
      console.log(response);
      return response.data;
    } catch (error) {
      console.error("Error fetching candidates obtained certificates", error);
      throw error;
    }
  } else {
    console.error("No current user or candidate number found");
    return Promise.resolve([]);
  }
};
